const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  { regex: /hsl\(215,\s*53%,\s*10%\)/g, replacement: '#0f172a' },
  { regex: /hsl\(215,\s*53%,\s*12%\)/g, replacement: '#0f172a' },
  { regex: /hsl\(215,\s*53%,\s*15%\)/g, replacement: '#0f172a' },
  { regex: /hsl\(215,\s*53%,\s*8%\)/g, replacement: '#0f172a' },
  { regex: /hsl\(215,\s*53%,\s*6%\)/g, replacement: '#0f172a' },
];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
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
