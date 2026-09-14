const fs = require('fs');
const svg = fs.readFileSync('logo.svg', 'utf8');
const match = svg.match(/data:image\/png;base64,([^"]+)/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  fs.writeFileSync('extracted_logo.png', buf);
  console.log('PNG extracted, size:', buf.length);
} else {
  console.log('No base64 PNG found');
}
