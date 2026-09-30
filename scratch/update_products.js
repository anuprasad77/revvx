
const fs = require('fs');

let content = fs.readFileSync('./static/products.js', 'utf8');
let START = content.indexOf('let PRODUCTS = [');
let scriptCode = content.substring(START, content.lastIndexOf('];') + 2);
scriptCode = scriptCode.replace('let PRODUCTS =', 'global.PRODUCTS =');
eval(scriptCode); 

// Update KTM Adventure
PRODUCTS.forEach(p => {
    if (p.bike === 'KTM ADVENTURE 390 / 350 / 250' || p.bike === 'KTM ADVENTURE 390') {
        let newDesc = p.description;
        
        // General patterns for numbers
        newDesc = newDesc.replace(/KTM ADVENTURE 390 \/ 350 \/ 250/gi, 'KTM Adventure Series');
        newDesc = newDesc.replace(/KTM ADVENTURE 390\/350\/250/gi, 'KTM Adventure Series');
        newDesc = newDesc.replace(/KTM Adventure 390, 350, 250/gi, 'KTM Adventure Series');
        newDesc = newDesc.replace(/KTM ADVENTURE 390/gi, 'KTM Adventure Series');
        
        // Tail Tidy with light slot
        newDesc = newDesc.replace(/KTM Adventure 390 Series/gi, 'KTM Adventure Series');
        
        // Fork sliders
        newDesc = newDesc.replace(/KTM Duke 390\/350\/250/gi, 'KTM Adventure Series');
        newDesc = newDesc.replace(/KTM Duke 390\/250 Gen 3, Adventure 390\/250 Gen 2, and Enduro R/gi, 'KTM Adventure Series');
        
        // Any lingering Enduro R
        newDesc = newDesc.replace(/Enduro R/gi, '');
        // Sometimes it leaves weird commas like '... Gen 2, and ' -> if we removed Enduro R it might be 'KTM Adventure Series for seamless...'
        
        p.description = newDesc;
    }
});

let newScript = 'let PRODUCTS = ' + JSON.stringify(PRODUCTS, null, 4) + ';\n\n';
let footer = content.substring(content.lastIndexOf('];') + 2);

fs.writeFileSync('./static/products.js', newScript + footer.trim() + '\n', 'utf8');
console.log('Updated products.js');

