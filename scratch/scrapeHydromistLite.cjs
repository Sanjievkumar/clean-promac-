const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  const url = 'https://www.truvox.com/product/hydromist-lite/';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  
  const name = $('h1').first().text().trim();
  const tagline = $('.elementor-widget-heading .elementor-heading-title').text().trim().replace(/\n/g, ' ');
  const description = $('#product-hero-text p').first().text().trim() || tagline;
  
  let mainImage = $('#hero-main-slider img').attr('src') || $('.woocommerce-product-gallery__image img').attr('src');
  
  const gallery = [];
  $('.gallery-thumbnail img, .woocommerce-product-gallery__image img').each((i, el) => {
    let src = $(el).attr('src') || $(el).attr('data-src');
    if (src && !gallery.includes(src)) {
       gallery.push(src);
    }
  });

  const idealFor = [];
  $('.ideal-for-list li').each((i, el) => {
     idealFor.push($(el).text().trim());
  });

  const features = [];
  $('.features-list .feature-item').each((i, el) => {
     const label = $(el).find('.feature-title').text().trim() || 'FEATURE';
     const desc = $(el).find('.feature-desc, p').text().trim();
     const image = $(el).find('img').attr('src') || '';
     if (desc) features.push({ label, desc, image });
  });

  const specs = [];
  $('.specifications-table tr, .woocommerce-product-attributes tr').each((i, el) => {
    const label = $(el).find('th, .label').text().trim();
    const value = $(el).find('td, .value').text().trim();
    if (label && value) {
       specs.push({ label, value });
    }
  });

  console.log(JSON.stringify({
    id: 'hydromist-lite',
    name,
    modelCode: 'HM-LITE',
    image: mainImage,
    tagline,
    heroDescription: description,
    description: description,
    idealFor,
    floorTypes: ['Carpet', 'Upholstery'],
    features,
    gallery,
    techSpecs: specs
  }, null, 2));
}

scrape();
