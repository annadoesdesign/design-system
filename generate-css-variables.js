const fs = require('fs');
const tokens = require('./design-tokens.json'); // Adjust the path if needed

const generateCSSVariables = (tokens) => {
  let cssVariables = ':root {\n';

  for (const [category, values] of Object.entries(tokens)) {
    for (const [key, value] of Object.entries(values)) {
      cssVariables += `  --${category}-${key}: ${value};\n`;
    }
  }

  cssVariables += '}\n';
  return cssVariables;
};

const cssContent = generateCSSVariables(tokens);
fs.writeFileSync('./src/tokens.css', cssContent);
console.log('CSS variables generated!');