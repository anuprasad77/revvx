
const fs = require('fs');

let content = fs.readFileSync('./static/products.js', 'utf8');
let START = content.indexOf('let PRODUCTS = [');
let scriptCode = content.substring(START, content.lastIndexOf('];') + 2);
scriptCode = scriptCode.replace('let PRODUCTS =', 'global.PRODUCTS =');
eval(scriptCode); 

let changed = false;

// Update KTM Duke Gen 2
PRODUCTS.forEach(p => {
    if (p.bike && p.bike.includes('KTM DUKE 390 / 250 / 125 (GEN 2)')) {
        let oldDesc = p.description;
        let newDesc = p.description;
        
        // Patterns to replace
        newDesc = newDesc.replace(/KTM DUKE 390 \/ 250 \/ 125 \(GEN 2\)/gi, 'KTM Duke Gen 2 Series');
        newDesc = newDesc.replace(/KTM DUKE GEN 2 /gi, 'KTM Duke Gen 2 Series ');
        newDesc = newDesc.replace(/KTM Duke Gen 2 with/gi, 'KTM Duke Gen 2 Series with');
        newDesc = newDesc.replace(/KTM Duke Gen 2 Series Series/gi, 'KTM Duke Gen 2 Series'); // Just in case of duplicates
        
        if (newDesc !== oldDesc) {
            console.log('Updating:', p.name);
            changed = true;
        }
        
        p.description = newDesc;
    }
});

if (changed) {
    let newScript = 'let PRODUCTS = ' + JSON.stringify(PRODUCTS, null, 4) + ';\n\n';
    let footer = content.substring(content.lastIndexOf('];') + 2);
    fs.writeFileSync('./static/products.js', newScript + footer.trim() + '\n', 'utf8');
    console.log('Saved');
} else {
    console.log('No changes made');
}

