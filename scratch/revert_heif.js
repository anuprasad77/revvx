const fs = require('fs');
const path = require('path');

const productsJsPath = path.join(__dirname, '..', 'static', 'products.js');
let content = fs.readFileSync(productsJsPath, 'utf8');

content = content.replace(/images\/kawasaki klx\/tail tidy \(1\)\.webp/g, 'images/kawasaki klx/tail tidy (1).HEIF');
content = content.replace(/images\/kawasaki klx\/tail tidy \(2\)\.webp/g, 'images/kawasaki klx/tail tidy (2).HEIF');
content = content.replace(/images\/kawasaki klx\/tail tidy \(3\)\.webp/g, 'images/kawasaki klx/tail tidy (3).HEIF');
content = content.replace(/images\/kawasaki klx\/tail tidy \(4\)\.webp/g, 'images/kawasaki klx/tail tidy (4).HEIF');
content = content.replace(/images\/kawasaki klx\/last image\.webp/g, 'images/kawasaki klx/last image.HEIF');

fs.writeFileSync(productsJsPath, content);
console.log('Reverted HEIF paths in products.js');
