const fs = require('fs');
const filePath = 'c:/Users/anoop/OneDrive/Desktop/revvx/static/products.js';
let content = fs.readFileSync(filePath, 'utf8');

const insertions = [
    {
        id: "aprilia_rs_457_aprilia-rs-457-tuono-457-spools-m6",
        images: [
            '"./images/aprilia rs457/spools new (1).PNG"',
            '"./images/aprilia rs457/spools new (2).PNG"'
        ]
    },
    {
        id: "aprilia_rs_457_apriliarstuono457-swing-arm-sliders-rear",
        images: [
            '"./images/aprilia rs457/swingarm sliders new (1).PNG"',
            '"./images/aprilia rs457/swingarm sliders new (2).PNG"'
        ]
    },
    {
        id: "aprilia_tuono_457_aprilia-rs-457-tuono-457-spools-m6",
        images: [
            '"./images/tuono 457/spools new (1).PNG"',
            '"./images/tuono 457/spools new (2).PNG"'
        ]
    },
    {
        id: "aprilia_tuono_457_apriliarstuono457-swing-arm-sliders-rear",
        images: [
            '"./images/tuono 457/swingarm sliders new (1).PNG"',
            '"./images/tuono 457/swingarm sliders new (2).PNG"'
        ]
    },
    {
        id: "ktm_enduro_ktm-enduro-frame-sliders",
        images: [
            '"./images/enduro r/crash guard (1).PNG"',
            '"./images/enduro r/crash guard (2).PNG"',
            '"./images/enduro r/crash guard (3).webp"'
        ]
    }
];

for (const insertion of insertions) {
    const idIndex = content.indexOf("id": " + insertion.id + "");
    if (idIndex === -1) {
        console.log("Could not find ID:", insertion.id);
        continue;
    }
    
    const galleryIndex = content.indexOf('"gallery": [', idIndex);
    if (galleryIndex !== -1) {
        const galleryEndIndex = content.indexOf(']', galleryIndex);
        
        let ptr = galleryEndIndex - 1;
        while(ptr > 0 && /\s/.test(content[ptr])) {
            ptr--;
        }
        
        const prefix = content[ptr] === ',' ? '' : ',';
        const strToInsert = prefix + '\n            ' + insertion.images.join(',\n            ') + '\n        ';
        
        content = content.substring(0, ptr + 1) + strToInsert + content.substring(galleryEndIndex);
    }
}

fs.writeFileSync(filePath, content);
console.log("Updated products.js");
