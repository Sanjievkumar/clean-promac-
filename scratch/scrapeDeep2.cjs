const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  const { data } = await axios.get('https://www.truvox.com/product/hydromist-lite/');
  const $ = cheerio.load(data);
  $('style, script').remove();
  const text = $('body').text().replace(/\s+/g, ' ');

  console.log('\n--- SPECS ---');
  const specMatch = text.match(/SPECIFICATIONS\s+(.*?)ACCESSORIES/i);
  console.log(specMatch ? specMatch[1].substring(0, 1000) : 'Not found');
  
  console.log('\n--- ACCESSORIES ---');
  const accMatch = text.match(/ACCESSORIES(.*?)GALLERY/i);
  console.log(accMatch ? accMatch[1].substring(0, 1000) : 'Not found');
}
run();
