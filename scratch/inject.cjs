const fs = require('fs');
let js = fs.readFileSync('src/data/klencoProducts.js', 'utf8');
const products = fs.readFileSync('scratch/scraped-vacuums.json', 'utf8');
const startStr = "id: 'cold-water-cleaners',";
const endStr = "} // end cold-water-cleaners";
const startIdx = js.indexOf(startStr);
const endIdx = js.indexOf(endStr);
if (startIdx > -1 && endIdx > -1) {
  const block = js.substring(startIdx, endIdx);
  const updatedBlock = block.replace(/products: \[[^]*?\]\s*(?=\}\s*,\s*\{)/, 'products: ' + products + '\n    ');
  js = js.substring(0, startIdx) + updatedBlock + js.substring(endIdx);
  fs.writeFileSync('src/data/klencoProducts.js', js);
  console.log('Success');
} else {
  console.log('Failed to find bounds');
}
