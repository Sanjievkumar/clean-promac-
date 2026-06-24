const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://www.klenco-asia.com/product/typhoon-hardy/',
  'https://www.klenco-asia.com/product/typhoon-nova-q/',
  'https://www.klenco-asia.com/product/typhoon-r327/',
  'https://www.klenco-asia.com/product/typhoon-r337/',
  'https://www.klenco-asia.com/product/typhoon-r590/',
  'https://www.klenco-asia.com/product/typhoon-678/',
  'https://www.klenco-asia.com/product/typhoon-432/',
  'https://www.klenco-asia.com/product/typhoon-480p/',
  'https://www.klenco-asia.com/product/typhoon-463/'
];

async function downloadImage(url, filename) {
  try {
    const res = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    const dest = path.join(__dirname, '../public/assets', filename);
    res.data.pipe(fs.createWriteStream(dest));
    return `/assets/${filename}`;
  } catch (e) {
    return null;
  }
}

function cleanText(str) {
  if (!str) return '';
  return str.replace(/[^\x20-\x7E]/g, ' ').replace(/\s+/g, ' ').trim();
}

async function scrapeProduct(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    let name = $('h1').first().text().trim();
    if (!name || name.toLowerCase() === 'products') {
        name = $('.product_title').text().trim();
    }
    if (!name) {
        name = url.split('/').filter(Boolean).pop().replace(/-/g, ' ').toUpperCase();
    }
    name = cleanText(name);
    
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const modelCode = name.replace(/[^A-Z0-9]/gi, '').substring(0, 10).toUpperCase();
    
    // Description
    let descText = cleanText($('.woocommerce-product-details__short-description').text() || $('#tab-description').text());
    const description = descText;
    const tagline = descText.split('.')[0] + '.';

    // Features
    const features = [];
    $('#tab-description ul li').each((i, el) => {
      features.push({
        title: cleanText($(el).text()),
        desc: ''
      });
    });

    // Image
    let imgUrl = $('.woocommerce-product-gallery__image a').attr('href');
    if (!imgUrl) {
      imgUrl = $('.wp-post-image').attr('src');
    }
    
    let localImage = '/assets/placeholder-machine.png';
    if (imgUrl) {
      const filename = `klenco-${id}.png`;
      localImage = await downloadImage(imgUrl, filename) || localImage;
    }

    // Specifications
    const specifications = [];
    $('table.shop_attributes tr').each((i, el) => {
      const label = cleanText($(el).find('th').text());
      const value = cleanText($(el).find('td').text());
      if (label && value) {
        specifications.push({ label, value });
      }
    });

    return {
      id,
      name,
      modelCode,
      image: localImage,
      tagline,
      heroDescription: tagline,
      description,
      idealFor: ['Commercial', 'Industrial', 'Retail'],
      floorTypes: ['Hard Floors', 'Carpets'],
      features,
      benefits: [],
      specifications,
      gallery: [],
      brochureUrl: null,
      manualUrl: null
    };
  } catch (err) {
    console.error(`Failed to scrape ${url}:`, err.message);
    return null;
  }
}

async function main() {
  const products = [];
  for (const url of urls) {
    console.log(`Scraping ${url}...`);
    const p = await scrapeProduct(url);
    if (p) {
      products.push(p);
    }
  }
  
  fs.writeFileSync(path.join(__dirname, 'scraped-vacuums.json'), JSON.stringify(products, null, 2));
  console.log('Done!');
}

main();
