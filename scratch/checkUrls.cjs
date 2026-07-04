const axios = require('axios');
const urls = [
  'https://www.truvox.com/wp-content/uploads/2023/11/HML-Website-768x1728.png',
  'https://www.truvox.com/wp-content/uploads/2023/11/HML-in-use1.jpg',
  'https://www.truvox.com/wp-content/uploads/2023/11/HML-in-use2.jpg',
  'https://www.truvox.com/wp-content/uploads/2023/11/HML-in-use3.jpg'
];
async function check() {
  for (let url of urls) {
    try {
      const res = await axios.head(url);
      console.log(url, res.status);
    } catch (e) {
      console.log(url, 'FAILED', e.message);
    }
  }
}
check();
