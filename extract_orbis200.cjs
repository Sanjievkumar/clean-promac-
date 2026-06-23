const fs = require('fs');
const html = fs.readFileSync('C:/Users/dolph/.gemini/antigravity/brain/a7b51314-f580-4433-b127-15414ee079c3/.system_generated/steps/2010/content.md', 'utf8');

const all = html.match(/https:\/\/www\.truvox\.com\/wp-content\/uploads\/[^\s"'<>)]+/g) || [];
const unique = [...new Set(all)].filter(u => !u.includes('favicon') && !u.includes('cropped') && !/-\d+x\d+\./.test(u) && (u.includes('.jpg') || u.includes('.png')));

console.log('=== UNIQUE IMAGES ===');
unique.forEach(u => console.log(u));

const clean = html
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const idx = clean.indexOf('Orbis');
console.log('\n=== PRODUCT TEXT ===');
console.log(clean.substring(idx, idx + 4000));
