const fs = require('fs');
const files = ['index.html', 'product.html', 'bike.html', 'policies.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\.\/images\/IMG_0499\.JPG/g, './images/IMG_0499.webp');
    fs.writeFileSync(file, content);
});
console.log('Fixed header logo image path to use .webp');
