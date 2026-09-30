
const fs = require('fs');

let content = fs.readFileSync('./static/products.js', 'utf8');
let START = content.indexOf('let PRODUCTS = [');
let scriptCode = content.substring(START, content.lastIndexOf('];') + 2);
scriptCode = scriptCode.replace('let PRODUCTS =', 'global.PRODUCTS =');
eval(scriptCode); 

let changed = false;

// Update KTM Duke Gen 3
PRODUCTS.forEach(p => {
    if (p.bike && p.bike.includes('KTM DUKE 390 / 350 / 250 (GEN 3)')) {
        let oldDesc = p.description;
        let newDesc = p.description;
        
        // Patterns to replace
        newDesc = newDesc.replace(/KTM DUKE GEN 3 390, 350, 250/gi, 'KTM Duke Gen 3 Series');
        newDesc = newDesc.replace(/KTM Duke 390 and Duke 250 Gen 3/gi, 'KTM Duke Gen 3 Series');
        newDesc = newDesc.replace(/KTM Duke 390 & Duke 250 Gen 3/gi, 'KTM Duke Gen 3 Series');
        newDesc = newDesc.replace(/KTM Duke 250\/390 Gen 3/gi, 'KTM Duke Gen 3 Series');
        newDesc = newDesc.replace(/KTM DUKE 390 \/ 350 \/ 250 \(GEN 3\)/gi, 'KTM Duke Gen 3 Series');
        
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

