const axios = require('axios');
const truvoxUrls = [
  'scrubber-dryers',
  'single-disc',
  'dry-vacuums',
  'wet-dry-vacuums',
  'carpet-cleaners',
  'cimex-three-brush',
  'escalator-sweepers',
  'air-movers'
];
async function run() {
  for (let cat of truvoxUrls) {
    try {
      const { data } = await axios.get('https://www.truvox.com/product-category/' + cat + '/');
      const headerUrl = data.match(/https:\/\/[^\"]+Header[^\"]*\.(?:jpg|png|webp)/i);
      console.log(cat + ' : ' + (headerUrl ? headerUrl[0] : 'Not Found'));
    } catch(e) {
      console.log(cat + ' failed');
    }
  }
}
run();
