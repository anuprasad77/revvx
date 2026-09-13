let PRODUCTS = [];

const manualAccessories = [
    // APRILIA RS 457 / TUONO 457
    ...[
        { name: "Spools M6", mrp: 1000, price: 849 },
        { name: "Swing arm sliders rear", mrp: 1500, price: 1269 },
        { name: "Fork sliders Front", mrp: 1500, price: 1269 },
        { name: "Frame Sliders", mrp: 6000, price: 5099 },
        { name: "Rear Master Cylinder Gaurd", mrp: 800, price: 679 },
        { name: "ALU Radiator Gaurd", mrp: 4000, price: 3399 },
        { name: "Tail Tidy", mrp: 1200, price: 1049 }
    ].flatMap(acc => ["APRILIA RS 457", "APRILIA TUONO 457"].map(bike => ({ ...acc, bike, category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) }))),

    // KTM ADV / ENDURO
    ...[
        { name: "Spools M10", mrp: 1000, price: 849 },
        { name: "Swing arm sliders rear", mrp: 1100, price: 929 },
        { name: "Fork sliders Front", mrp: 1100, price: 929 },
        { name: "Frame Sliders", mrp: 2500, price: 2129 },
        { name: "ALU Radiator Guard", mrp: 3500, price: 2999 },
        { name: "Mobile Holder", mrp: 1000, price: 849 },
        { name: "Side stand extender", mrp: 700, price: 700 },
        { name: "Fog lamp clamp", mrp: 1100, price: 929 },
        { name: "Tail Tidy", mrp: 1100, price: 929 },
        { name: "Tail Tidy (with light slot)", mrp: 1100, price: 929 }
    ].flatMap(acc => ["KTM ADVENTURE 390", "KTM ADVENTURE 250", "KTM ENDURO"].map(bike => ({ ...acc, bike, category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) }))),

    // KTM DUKE (ALL)
    ...[
        { name: "Spools M10", mrp: 1000, price: 849 },
        { name: "Tail Tidy", mrp: 1100, price: 929 },
        { name: "ALU Radiator Guard", mrp: 3500, price: 2999 },
        { name: "Fork sliders Front", mrp: 1100, price: 929 },
        { name: "Swing arm sliders rear", mrp: 1100, price: 929 },
    ].flatMap(acc => [
        "KTM DUKE GEN 3 390", "KTM DUKE GEN 3 250", "KTM DUKE GEN 3 390R",
        "KTM DUKE GEN 2 390", "KTM DUKE GEN 2 250", "KTM DUKE GEN 2 200", "KTM DUKE GEN 2 125"
    ].map(bike => ({ ...acc, bike, category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) }))),

    // KTM DUKE (GEN 2 ONLY)
    ...[
        { name: "Tailtidy (Gen 2)", mrp: 920, price: 799 }
    ].flatMap(acc => [
        "KTM DUKE GEN 2 390", "KTM DUKE GEN 2 250", "KTM DUKE GEN 2 200", "KTM DUKE GEN 2 125"
    ].map(bike => ({ ...acc, bike, category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) }))),

    // TVS RTX 300
    ...[
        { name: "Spools M8", mrp: 1000, price: 849 },
        { name: "Fork sliders", mrp: 1100, price: 929 },
        { name: "Swing arm sliders", mrp: 1100, price: 929 },
        { name: "MS Radiator Gaurd", mrp: 1600, price: 1359 },
        { name: "GPS Mount", mrp: 1000, price: 849 }
    ].map(acc => ({ ...acc, bike: "TVS APACHE RTX", category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) })),

    // RE HIMALAYAN 450
    ...[
        { name: "MS Radiator Gaurd", mrp: 1600, price: 1359 },
        { name: "Fork sliders", mrp: 1100, price: 929 },
        { name: "GPS Mount", mrp: 1000, price: 849 },
        { name: "Rear Master Cylinder Gaurd", mrp: 800, price: 679 },
        { name: "Top rack", mrp: 1500, price: 1500 }
    ].map(acc => ({ ...acc, bike: "RE HIMALAYAN 450", category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) })),

    // KAWASAKI KLX 230
    ...[
        { name: "Tailtidy", mrp: 1099, price: 929 },
        { name: "Skidplate MS CKD", mrp: 3499, price: 2975 },
        { name: "Skidplate MS CBU", mrp: 3499, price: 2975 },
        { name: "Skidplate ALU CBU", mrp: 4499, price: 3829 }
    ].flatMap(acc => {
        let bikes = ["KAWASAKI KLX 230 CKD", "KAWASAKI KLX 230 CBU"]; // Default to both
        if (acc.name.includes("CKD")) bikes = ["KAWASAKI KLX 230 CKD"];
        else if (acc.name.includes("CBU")) bikes = ["KAWASAKI KLX 230 CBU"];
        return bikes.map(bike => ({ ...acc, bike, category: "Accessories", image: "", id: Math.random().toString(36).substr(2, 9) }));
    })
];

PRODUCTS.push(...manualAccessories);
let BIKES_DATA = {
    "Aprilia": [
        { id: "Aprilia_RS_457", name: "APRILIA RS 457", image: "https://teamskydd.com/wp-content/uploads/2025/04/aprilia-1.webp", categorySearch: "APRILIA RS 457", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/aprilia/3643/closed-door/{N}.jpg", frames: 72 } },
        { id: "Aprilia_Tuono_457", name: "APRILIA TUONO 457", image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/aprilia-tuono-457-special-edition1782056239075.jpg", categorySearch: "APRILIA TUONO 457", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/aprilia/3073/closed-door/{N}.jpg", frames: 72 } }
    ],
    "KTM": [
        { id: "KTM_ADVENTURE_390", name: "KTM ADVENTURE 390", image: "https://teamskydd.com/wp-content/uploads/2025/04/00.png", categorySearch: "KTM ADVENTURE 390", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/ktm/3728/closed-door/{N}.jpg", frames: 72 } },
        { id: "KTM_ADVENTURE_250", name: "KTM ADVENTURE 250", image: "https://teamskydd.com/wp-content/uploads/2025/04/00.png", categorySearch: "KTM ADVENTURE 250" },
        { id: "KTM_ENDURO", name: "KTM ENDURO", image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/204158/390-enduro-r-right-side-view-45.jpeg", categorySearch: "KTM ENDURO", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/ktm/3057/closed-door/{N}.jpg", frames: 72 } },
        { id: "KTM_DUKE_GEN3_390", name: "KTM DUKE GEN 3 390", image: "https://teamskydd.com/wp-content/uploads/2025/04/duke-gen-3.png", categorySearch: "KTM DUKE GEN 3 390", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/ktm/3724/closed-door/{N}.jpg", frames: 72 } },
        { id: "KTM_DUKE_GEN3_250", name: "KTM DUKE GEN 3 250", image: "https://teamskydd.com/wp-content/uploads/2025/04/duke-gen-3.png", categorySearch: "KTM DUKE GEN 3 250", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/ktm/2589/closed-door/{N}.jpg", frames: 72 } },
        { id: "KTM_DUKE_GEN3_390R", name: "KTM DUKE GEN 3 390R", image: "https://teamskydd.com/wp-content/uploads/2025/04/duke-gen-3.png", categorySearch: "KTM DUKE GEN 3 390R" },
        { id: "KTM_DUKE_GEN2_390", name: "KTM DUKE GEN 2 390", image: "https://www.bikewale.com/n/bw/models/colors/ktm-select-model-ceramic-white-1608043983303.jpg", categorySearch: "KTM DUKE GEN 2 390" },
        { id: "KTM_DUKE_GEN2_250", name: "KTM DUKE GEN 2 250", image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/49497/ktm-duke-250-side0.jpeg", categorySearch: "KTM DUKE GEN 2 250" },
        { id: "KTM_DUKE_GEN2_200", name: "KTM DUKE GEN 2 200", image: "https://www.bikewale.com/n/bw/models/colors/undefined-ceramic-white-1580995329917.jpg", categorySearch: "KTM DUKE GEN 2 200" },
        { id: "KTM_DUKE_GEN2_125", name: "KTM DUKE GEN 2 125", image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/129741/duke-125-right-side-view-2.png", categorySearch: "KTM DUKE GEN 2 125" }
    ],
    "Kawasaki": [
        { id: "Kawasaki_KLX_230_CKD", name: "KAWASAKI KLX 230 CKD", image: "./static/images/klx_transparent.png", categorySearch: "KAWASAKI KLX 230 CKD" },
        { id: "Kawasaki_KLX_230_CBU", name: "KAWASAKI KLX 230 CBU", image: "./static/images/klx_transparent.png", categorySearch: "KAWASAKI KLX 230 CBU" }
    ],
    "TVS": [
        { id: "TVS_APACHE_RTX", name: "TVS APACHE RTX", image: "https://teamskydd.com/wp-content/uploads/2026/01/Untitled-1-e1767878585697.png", categorySearch: "TVS APACHE RTX", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/tvs/3153/closed-door/{N}.jpg", frames: 72 } }
    ],
    "RE": [
        { id: "RE_HIMALAYAN_450", name: "RE HIMALAYAN 450", image: "https://teamskydd.com/wp-content/uploads/2026/05/14880490-600x400.jpg", categorySearch: "RE HIMALAYAN 450", imageSequence: { urlPattern: "https://imgd.aeplcdn.com/860x484/bw/360/royalenfield/1789/closed-door/{N}.jpg", frames: 72 } }
    ]
};

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1AgAF6D5OmeSm2ipUKmcDuduRaivJBo0M7tPy9ip0FZM/export?format=csv";

// Helper to convert Google Drive viewing URLs into direct image URLs
function convertDriveUrl(url) {
    if (!url) return "";
    const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url;
}

// Fetch the raw CSV text first to skip the dashboard rows at the top
fetch(GOOGLE_SHEET_CSV_URL)
    .then(response => response.text())
    .then(csvText => {
        // The user's sheet has headers on row 6 (index 5)
        // Let's find the header row dynamically or just skip until "BIKE NAME" is found
        const lines = csvText.split(/\r?\n/);
        let headerIndex = -1;
        for (let i = 0; i < lines.length; i++) {
            const upperLine = lines[i].toUpperCase();
            if (upperLine.includes('BIKE NAME') && upperLine.includes('ACCESSORY NAME')) {
                headerIndex = i;
                break;
            }
        }

        // If we couldn't find the header, fallback to skipping the first 5 rows (the performance dashboard)
        if (headerIndex === -1) headerIndex = 5;

        // Join the CSV back together from the header onwards
        const cleanCsv = lines.slice(headerIndex).join('\n');

        // Parse the cleaned CSV
        Papa.parse(cleanCsv, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const data = results.data;

                data.forEach(row => {
                    const bikeNameFull = row['BIKE NAME']?.trim();
                    const accName = row['Accessory Name']?.trim();
                    let priceRaw = row['Price']?.trim() || "0";
                    const img1 = row['Image 1']?.trim();

                    if (!bikeNameFull) return; // Skip empty rows

                    // Extract a brand (first word) and capitalize it
                    const words = bikeNameFull.split(' ');
                    const brand = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
                    const bikeModel = bikeNameFull.toUpperCase(); // Ensure uniform casing

                    // Do not auto-register new bikes from the CSV to strictly maintain the requested list.

                    // Register the product if there is an accessory name
                    if (accName) {
                        // Clean price of currencies and commas
                        const cleanPrice = parseFloat(priceRaw.replace(/[^0-9.-]+/g, ""));

                        PRODUCTS.push({
                            id: Math.random().toString(36).substr(2, 9),
                            name: accName,
                            bike: bikeModel,
                            category: "Accessories",
                            price: isNaN(cleanPrice) ? 0 : cleanPrice,
                            tag: "",
                            image: convertDriveUrl(img1) || ""
                        });
                    }
                });

                // Re-render UI now that data is loaded
                if (typeof renderProductsList === 'function') renderProductsList();
                if (typeof renderBrands === 'function') renderBrands();
            }
        });
    })
    .catch(err => {
        console.error("Error loading Google Sheet CSV.", err);
        alert("Failed to load data from Google Sheets.");
    });
