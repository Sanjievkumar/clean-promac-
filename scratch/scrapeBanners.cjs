const axios = require('axios');
const cheerio = require('cheerio');

const categories = [
  'scrubber-dryers',
  'single-disc',
  'dry-vacuums',
  'wet-and-dry-vacuums',
  'carpet-cleaners',
  'cimex-three-brush',
  'escalator-sweepers',
  'air-movers'
];

async function run() {
  for (let cat of categories) {
    try {
      const { data } = await axios.get('https://www.truvox.com/products/' + cat);
      const $ = cheerio.load(data);
      
      let imgSrc = null;
      $('[style*="background-image"]').each((i, el) => {
        let style = $(el).attr('style');
        if (style.includes('url(')) {
           imgSrc = style.split('url(')[1].split(')')[0].replace(/['"]/g, '');
        }
      });

      console.log(cat + ' : ' + imgSrc);
    } catch (e) {
      console.log(cat + ' : failed - ' + e.message);
    }
  }
}
run();
