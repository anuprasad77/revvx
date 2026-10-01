const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');

async function processHEIF() {
    console.log('Finding HEIF/HEIC images...');
    const imagesDir = path.join(__dirname, '..', 'images').replace(/\\/g, '/');
    
    const files = glob.sync(imagesDir + '/**/*.{heif,heic,HEIF,HEIC}');
    console.log(`Found ${files.length} HEIF images to compress.`);

    for (const file of files) {
        try {
            const ext = path.extname(file);
            const webpPath = file.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');

            let img = sharp(file);
            const metadata = await img.metadata();
            
            if (metadata.width > 1200) {
                img = img.resize(1200, null, { withoutEnlargement: true });
            }

            await img.webp({ quality: 80 }).toFile(webpPath);
            await fs.unlink(file);
            console.log(`Converted ${path.basename(file)} to WebP and removed original.`);
        } catch (e) {
            console.error(`Failed to process ${file}:`, e);
        }
    }
    
    console.log('Updating products.js...');
    const productsJsPath = path.join(__dirname, '..', 'static', 'products.js');
    let content = await fs.readFile(productsJsPath, 'utf8');
    
    content = content.replace(/\.(heic|heif|HEIC|HEIF)(\?v=\d+\.\d+)?/g, '.webp');
    
    await fs.writeFile(productsJsPath, content);
    console.log('products.js updated successfully!');
}

processHEIF().catch(console.error);
