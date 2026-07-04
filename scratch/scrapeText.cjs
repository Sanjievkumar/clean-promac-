const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  const { data } = await axios.get('https://www.truvox.com/product/hydromist-lite/');
  const $ = cheerio.load(data);
  console.log($('body').text().replace(/\s+/g, ' ').substring(0, 3000));
}
run();
