const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  const { data } = await axios.get('https://www.truvox.com/product/hydromist-lite/');
  const $ = cheerio.load(data);
  $('style, script').remove();
  console.log($('body').text().replace(/\n\s*\n/g, '\n').substring(0, 5000));
}
run();
