const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  const { data } = await axios.get('https://www.truvox.com/product/hydromist-lite/');
  const $ = cheerio.load(data);
  
  console.log('--- GALLERY ---');
  $('.gallery-thumbnail img, .woocommerce-product-gallery__image img').each((i, el) => {
     console.log($(el).attr('src') || $(el).attr('data-src'));
  });
  
  console.log('\n--- SPECS ---');
  $('.specifications-table tr, .woocommerce-product-attributes tr, .elementor-widget-container table tr').each((i, el) => {
     console.log($(el).find('th, td').map((i, e) => $(e).text().trim()).get().join(' : '));
  });
  
  console.log('\n--- ACCESSORIES ---');
  $('.accessories-grid .accessory, .product-accessory').each((i, el) => {
     console.log($(el).text().replace(/\s+/g, ' ').trim());
  });

  console.log('\n--- TEXT DUMP FOR SPECS/ACC ---');
  console.log($('body').text().replace(/\s+/g, ' ').match(/(?=SPECIFICATIONS)(.*)(?=ACCESSORIES)/i)?.[0].substring(0, 500));
  console.log($('body').text().replace(/\s+/g, ' ').match(/(?=ACCESSORIES)(.*)(?=GALLERY)/i)?.[0].substring(0, 500));
}
run();
