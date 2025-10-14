const fs = require("fs");
const path = require("path");

const cssDir = path.join(__dirname, "../build/assets/css");
const outputFile = path.join(cssDir, "styles-latest.css");

// Find the hashed CSS (e.g. styles.073d90d0.css)
const cssFile = fs.readdirSync(cssDir).find(file => /^styles\.[a-f0-9]+\.css$/.test(file));

if (!cssFile) {
  console.error("No hashed styles file found.");
  process.exit(1);
}

fs.copyFileSync(path.join(cssDir, cssFile), outputFile);

console.log(`Copied ${cssFile} → styles-latest.css`);
