const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  // Remove wavy-mesh divs
  { regex: /<div className="absolute inset-0 wavy-mesh wavy-mesh-light opacity-\d+ pointer-events-none" \/>/g, replacement: '' },
  
  // Remove wavy-mesh classes
  { regex: /wavy-mesh wavy-mesh-light/g, replacement: '' },
  { regex: /wavy-mesh/g, replacement: '' },
  
  // Remove inline styles for backgrounds
  { regex: /style=\{\{\s*background:\s*["']hsl\(215,\s*53%,\s*\d+%\)["'],\s*minHeight:\s*["']100vh["']\s*\}\}/g, replacement: 'style={{ minHeight: "100vh" }}' },
  { regex: /style=\{\{\s*background:\s*["']#12223b["'],\s*paddingTop:\s*["']15vh["'],\s*paddingBottom:\s*["']15vh["']\s*\}\}/g, replacement: 'style={{ paddingTop: "15vh", paddingBottom: "15vh" }}' },
  { regex: /style=\{\{\s*borderTop:\s*["']0\.5px solid rgba\(255,255,255,0\.1\)["'],\s*background:\s*["']hsl\(215,\s*53%,\s*12%\)["']\s*\}\}/g, replacement: 'style={{ borderTop: "0.5px solid rgba(255,255,255,0.1)" }}' },
  { regex: /style=\{\{\s*background:\s*["']hsl\(215,\s*53%,\s*15%\)["']\s*\}\}/g, replacement: '' },
  { regex: /style=\{\{\s*background:\s*["']hsl\(215,\s*53%,\s*10%\)["']\s*\}\}/g, replacement: '' },
  { regex: /style=\{\{\s*background:\s*["']hsl\(215,\s*53%,\s*8%\)["']\s*\}\}/g, replacement: '' },
  { regex: /style=\{\{\s*background:\s*["']hsl\(215,\s*53%,\s*6%\)["']\s*\}\}/g, replacement: '' },
  
  // Remove tailwind background classes
  { regex: /bg-\[hsl\(215,53%,10%\)\]/g, replacement: '' },
  { regex: /bg-\[hsl\(215,53%,12%\)\]/g, replacement: '' },
  { regex: /bg-\[#060A11\]/g, replacement: '' },
  { regex: /bg-\[#12223b\]/g, replacement: '' },
  { regex: /bg-dark/g, replacement: '' },
  
  // Clean up empty style tags or extra spaces
  { regex: /style=\{\{\s*\}\}/g, replacement: '' },
  { regex: /className="\s+/g, replacement: 'className="' },
  { regex: /\s+"/g, replacement: '"' }
];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

walkDir(directory);
