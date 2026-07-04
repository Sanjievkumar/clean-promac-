const fs = require('fs');
let js = fs.readFileSync('src/data/truvoxProducts.js', 'utf8');

const banners = {
  'scrubber-dryers': 'https://www.truvox.com/wp-content/uploads/2024/01/Scrubber-Dryer-Header-1.jpg',
  'single-disc': 'https://www.truvox.com/wp-content/uploads/2024/01/Single-disc-header.jpg',
  'dry-vacuums': 'https://www.truvox.com/wp-content/uploads/2024/02/VTVe-C-range-header.jpg',
  'wet-dry-vacuums': '/assets/wet-dry-vac-banner.jpg',
  'carpet-cleaners': 'https://www.truvox.com/wp-content/uploads/2024/01/Carpet-Cleaners-header.jpg',
  'cimex-three-brush': 'https://www.truvox.com/wp-content/uploads/2024/02/Cimex-header-banner.jpg',
  'escalator-sweepers': 'https://www.truvox.com/wp-content/uploads/2024/02/Escalator-sweepers-header.jpg',
  'air-movers': '/assets/air-movers-banner.jpg'
};

for (const cat in banners) {
  const target = "id: '" + cat + "',";
  const split = js.split(target);
  if (split.length > 1) {
    js = split[0] + target + '\n      bannerImage: \'' + banners[cat] + '\',' + split[1];
  }
}

fs.writeFileSync('src/data/truvoxProducts.js', js);
console.log('Done injecting banner images');
