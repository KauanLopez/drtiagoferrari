const fs = require('fs');
const svg = fs.readFileSync('logo.svg', 'utf8');
console.log('Total length:', svg.length);
console.log('Without base64:');
console.log(svg.replace(/data:image\/[a-zA-Z0-9\+]+;base64,[^"]+/g, '[BASE64]'));
