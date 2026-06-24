const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const targets = [
  { url: 'https://www.klenco-asia.com/product/hooray/', subcategory: 'UPRIGHT & MINI SCRUBBER DRYERS' },
  { url: 'https://www.klenco-asia.com/product/lava-280b/', subcategory: 'UPRIGHT & MINI SCRUBBER DRYERS' },
  { url: 'https://www.klenco-asia.com/product/lava-351/', subcategory: 'UPRIGHT & MINI SCRUBBER DRYERS' },
  
  { url: 'https://www.klenco-asia.com/product/lava-501/', subcategory: 'WALK BEHIND AUTO SCRUBBERS' },
  { url: 'https://www.klenco-asia.com/product/lava-520b/', subcategory: 'WALK BEHIND AUTO SCRUBBERS' },
  { url: 'https://www.klenco-asia.com/product/lava-flow/', subcategory: 'WALK BEHIND AUTO SCRUBBERS' },
  { url: 'https://www.klenco-asia.com/product/lava-650-655r/', subcategory: 'WALK BEHIND AUTO SCRUBBERS' },
  
  { url: 'https://www.klenco-asia.com/product/lava-rx2-55-rx2-60/', subcategory: 'RIDE ON SCRUBBER DRYERS' },
  { url: 'https://www.klenco-asia.com/product/lava-2060b/', subcategory: 'RIDE ON SCRUBBER DRYERS' },
  { url: 'https://www.klenco-asia.com/product/lava-3085b/', subcategory: 'RIDE ON SCRUBBER DRYERS' }
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

async function scrapeProduct(url, subcategory) {
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
    
    let descText = cleanText($('.woocommerce-product-details__short-description').text() || $('#tab-description').text());
    const description = descText;
    const tagline = descText.split('.')[0] + '.';

    const features = [];
    $('#tab-description ul li').each((i, el) => {
      features.push({ title: cleanText($(el).text()), desc: '' });
    });

    // Gallery
    const galleryUrls = [];
    $('.woocommerce-product-gallery__image a').each((i, el) => {
      const href = $(el).attr('href');
      if (href) galleryUrls.push(href);
    });

    if (galleryUrls.length === 0) {
      const imgUrl = $('.wp-post-image').attr('src');
      if (imgUrl) galleryUrls.push(imgUrl);
    }
    
    let localImage = '/assets/placeholder-machine.png';
    const localGallery = [];

    // Important: Wait for downloads one by one to avoid overwhelming or creating errors
    for (let i = 0; i < galleryUrls.length; i++) {
      const filename = `klenco-${id}-${i}.png`;
      const localPath = await downloadImage(galleryUrls[i], filename);
      if (localPath) {
        localGallery.push(localPath);
        if (i === 0) localImage = localPath;
      }
    }

    const specifications = [];
    $('table.shop_attributes tr').each((i, el) => {
      const label = cleanText($(el).find('th').text());
      const value = cleanText($(el).find('td').text());
      if (label && value) specifications.push({ label, value });
    });

    return {
      id,
      name,
      subcategory,
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
      gallery: localGallery,
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
  for (const t of targets) {
    console.log(`Scraping ${t.url}...`);
    const p = await scrapeProduct(t.url, t.subcategory);
    if (p) {
      products.push(p);
    }
  }
  
  fs.writeFileSync(path.join(__dirname, 'scraped-vacuums.json'), JSON.stringify(products, null, 2));
  console.log('Done!');
}

main();
