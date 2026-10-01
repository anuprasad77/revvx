const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');

async function processImages() {
    console.log('Finding images...');
    const imagesDir = path.join(__dirname, '..', 'images').replace(/\\/g, '/');
    
    // Find all images except webp
    const files = glob.sync(imagesDir + '/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}');
    console.log(`Found ${files.length} images to compress.`);

    let totalSaved = 0;

    for (const file of files) {
        try {
            const ext = path.extname(file);
            const webpPath = file.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');

            const metadata = await sharp(file).metadata();
            
            // Resize if width is > 1000px, otherwise keep same size
            let img = sharp(file);
            if (metadata.width > 1200) {
                img = img.resize(1200, null, { withoutEnlargement: true });
            }

            // Convert to webp
            const info = await img.webp({ quality: 80 }).toFile(webpPath);
            
            // Calculate savings
            const oldSize = (await fs.stat(file)).size;
            const saved = oldSize - info.size;
            if (saved > 0) totalSaved += saved;
            
            // Delete old file
            await fs.unlink(file);
        } catch (e) {
            console.error(`Failed to process ${file}:`, e);
        }
    }
    
    console.log(`\nDone compressing! Saved ${(totalSaved / 1024 / 1024).toFixed(2)} MB of space.`);

    console.log('Updating products.js...');
    const productsJsPath = path.join(__dirname, '..', 'static', 'products.js');
    let content = await fs.readFile(productsJsPath, 'utf8');
    
    // Replace HEIF and JPG with .webp
    content = content.replace(/\.(jpeg|jpg|png|JPEG|JPG|PNG|heif|HEIF|heic|HEIC)(\?v=\d+\.\d+)?/g, '.webp');
    
    await fs.writeFile(productsJsPath, content);
    console.log('products.js updated successfully!');
}

processImages().catch(console.error);
