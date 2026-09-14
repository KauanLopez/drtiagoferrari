const fs = require('fs');
const svg = fs.readFileSync('public/logo.svg', 'utf8');
const newSvg = svg.replace(
  /<g mask="url\(#80fd525664\)">[\s\S]*?<\/g>\s*<\/g>/,
  '<g mask="url(#80fd525664)"><rect x="0" y="0" width="810" height="810" fill="#5c0012"/></g></g>'
);
console.log('Old length:', svg.length, 'New length:', newSvg.length);
fs.writeFileSync('public/test_logo.svg', newSvg);

