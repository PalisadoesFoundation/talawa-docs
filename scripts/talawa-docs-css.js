const fs = require("fs");
const path = require("path");

// Directory where the built hashed CSS resides
const cssDir = path.join(__dirname, "../build/assets/css");

// Output path in static folder
const outputFile = path.join(__dirname, "../static/css/styles-latest.css");

// Find the hashed CSS (e.g., styles.073d90d0.css)
const cssFile = fs.readdirSync(cssDir).find(file => /^styles\.[a-f0-9]+\.css$/.test(file));

if (!cssFile) {
  console.error("No hashed styles file found.");
  process.exit(1);
}

// Copy hashed CSS to static folder with stable name
fs.copyFileSync(path.join(cssDir, cssFile), outputFile);

console.log(`Copied ${cssFile} → static/css/styles-latest.css`);
