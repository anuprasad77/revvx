const fs = require('fs');
const path = require('path');

const productsJsPath = path.join(__dirname, '..', 'static', 'products.js');
let content = fs.readFileSync(productsJsPath, 'utf8');

// Find JSON-like arrays for gallery and remove duplicate consecutive strings
// We can use a regex to match "gallery": [ ... ] and then process the array inside.
content = content.replace(/"gallery"\s*:\s*\[([\s\S]*?)\]/g, (match, arrayContent) => {
    // split by comma, trim, remove empty, and then deduplicate
    let items = arrayContent.split(',').map(s => s.trim()).filter(s => s);
    let uniqueItems = [];
    let seen = new Set();
    
    for (let item of items) {
        if (!seen.has(item)) {
            seen.add(item);
            uniqueItems.push(item);
        }
    }
    
    // recreate the formatted array content
    let formatted = uniqueItems.map(item => `            ${item}`).join(',\n');
    return `"gallery": [\n${formatted}\n        ]`;
});

fs.writeFileSync(productsJsPath, content);
console.log('Removed duplicate gallery images in products.js');
