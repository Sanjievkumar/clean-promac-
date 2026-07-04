const fs = require('fs');
let js = fs.readFileSync('src/data/klencoProducts.js', 'utf8');

const banners = {
  'vacuum-cleaners': '/assets/klenco-banners/klenco_vacuums_1783195952635.jpg',
  'carpet-extractors': '/assets/klenco-banners/klenco_carpet_extractors_1783195962843.jpg',
  'single-disc-machines': '/assets/klenco-banners/klenco_single_disc_1783195972621.jpg',
  'automatic-scrubbers': '/assets/klenco-banners/klenco_auto_scrubbers_1783195982050.jpg',
  'sweepers': '/assets/klenco-banners/klenco_sweepers_1783195991979.jpg',
  'ride-on-sweepers': '/assets/klenco-banners/klenco_ride_on_sweepers_1783196001597.jpg',
  'steam-cleaners': '/assets/klenco-banners/klenco_steam_cleaners_1783196011239.jpg',
  'high-pressure-cleaners': '/assets/klenco-banners/klenco_high_pressure_1783196021489.jpg',
  'cold-water-cleaners': '/assets/klenco-banners/klenco_cold_water_1783196033661.jpg'
};

for (const cat in banners) {
  const target = "id: '" + cat + "',";
  const split = js.split(target);
  if (split.length > 1) {
    js = split[0] + target + '\n      bannerImage: \'' + banners[cat] + '\',' + split[1];
  }
}

fs.writeFileSync('src/data/klencoProducts.js', js);
console.log('Done injecting Klenco banners');
