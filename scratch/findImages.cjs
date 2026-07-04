const axios = require('axios');
async function run() {
  const { data } = await axios.get('https://www.truvox.com/product-category/scrubber-dryers/');
  const links = data.match(/https:\/\/[^\"]+\.(?:jpg|png)/g);
  console.log([...new Set(links)]);
}
run();
