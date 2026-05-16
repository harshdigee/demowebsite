const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  { regex: /#caa56a/g, replacement: '#999999' },
  { regex: /hsl\(41,\s*38%,\s*52%\)/g, replacement: '#999999' },
  { regex: /hsl\(41,\s*50%,\s*65%\)/g, replacement: '#B3B3B3' },
  { regex: /hsl\(41,\s*50%,\s*45%\)/g, replacement: '#808080' },
  { regex: /rgba\(179,\s*151,\s*86/g, replacement: 'rgba(153, 153, 153' },
  { regex: /rgba\(202,\s*165,\s*106/g, replacement: 'rgba(153, 153, 153' },
  { regex: /Playfair Display,\s*serif/g, replacement: 'Rawgly, Helvetica, sans-serif' },
  { regex: /Playfair Display/g, replacement: 'Rawgly' }
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
