const fs = require('fs');

const svg = fs.readFileSync('public/logo.svg', 'utf8');

// The gold color is #d2ab66
// R: 210/255 = 0.8235
// G: 171/255 = 0.6705
// B: 102/255 = 0.4000
const goldMatrix = '0 0 0 0 0.8235 0 0 0 0 0.6705 0 0 0 0 0.4000 0 0 0 1 0';

let goldSvg = svg.replace(
  'values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"',
  `values="${goldMatrix}"`
);

fs.writeFileSync('public/logo-gold.svg', goldSvg);

const bgGradient = `
<linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#2a0008"/>
  <stop offset="100%" stop-color="#5c0012"/>
</linearGradient>
<rect width="810" height="810" rx="150" fill="url(#hero-bg)"/>
`;

const insertIndex = goldSvg.indexOf('</defs>') + 7;
const faviconSvg = goldSvg.slice(0, insertIndex) + bgGradient + goldSvg.slice(insertIndex);

fs.writeFileSync('public/favicon.svg', faviconSvg);
fs.writeFileSync('public/og-image.svg', faviconSvg);

console.log('Successfully created logo-gold.svg, favicon.svg, and og-image.svg');
