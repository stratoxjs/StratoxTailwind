const fs = require('fs');
const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');

const iconsDir = './src/assets/heroicons/src/24/outline'; // Directory with SVGs
const outputDir = './src/assets/encoded-icons'; // Output directory for encoded SVGs

// Ensure the output directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Encode SVG function
const encodeSVG = (filePath) => {
  const svgContent = fs.readFileSync(filePath, 'utf8');
  return svgToMiniDataURI(svgContent);
};

// Process all SVGs in the directory
fs.readdirSync(iconsDir).forEach((file) => {
  if (file.endsWith('.svg')) {
    const filePath = path.join(iconsDir, file);
    const encodedSVG = encodeSVG(filePath);
    const outputFilePath = path.join(outputDir, `${path.basename(file, '.svg')}.txt`);
    fs.writeFileSync(outputFilePath, encodedSVG); // Save encoded SVG to a file
    console.log(`Encoded: ${file} -> ${outputFilePath}`);
  }
});

console.log('All icons encoded successfully!');
