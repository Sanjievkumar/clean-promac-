const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  const { data } = await axios.get('https://www.truvox.com/product/hydromist-lite/');
  const $ = cheerio.load(data);
  const specs = {};
  $('.woocommerce-product-attributes tr').each((i, el) => {
    const label = $(el).find('th').text().trim();
    const val = $(el).find('td').text().trim();
    specs[label] = val;
  });
  console.log('Specs:', specs);
}
run();
