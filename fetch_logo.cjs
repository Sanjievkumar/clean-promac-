const https = require('https');
https.get('https://www.truvox.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+logo[^">]+)"/g);
    if(matches) {
      console.log(matches.join('\n'));
    } else {
      console.log('no logo found');
    }
  });
});
