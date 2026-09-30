const fs = require('fs');
const files = ['index.html', 'product.html', 'bike.html', 'policies.html'];

const svgCloseButton = `<button class="close-cart-btn" onclick="closeCart()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Safely replace the button (accounting for both encodings and spacing)
    // We will do it by finding <div class="drawer-title"> and the next </div>
    content = content.replace(
        /<div class="drawer-title">\s*<h2>YOUR GARAGE<\/h2>.*?<\/div>/s,
        `<div class="drawer-title">\n          <h2>YOUR GARAGE</h2>\n          ${svgCloseButton}\n        </div>`
    );

    // 2. Add scroll lock to JS
    content = content.replace(
        /function openCart\(\)\s*\{([^}]*?)classList\.add\('show'\);([^}]*?)\}/g,
        `function openCart() { $1classList.add('show'); document.body.style.overflow = 'hidden'; document.documentElement.style.overflow = 'hidden';$2}`
    );
    
    content = content.replace(
        /function closeCart\(\)\s*\{([^}]*?)classList\.remove\('show'\);([^}]*?)\}/g,
        `function closeCart() { $1classList.remove('show'); document.body.style.overflow = ''; document.documentElement.style.overflow = '';$2}`
    );

    fs.writeFileSync(file, content);
});

console.log('Restored cart UI correctly without adding extra footer text.');
