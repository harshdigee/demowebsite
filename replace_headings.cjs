const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = [
  { regex: /className="font-body text-xs tracking-\[0\.35em\] uppercase mb-8"/g, replacement: 'className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"' },
  { regex: /className="font-body text-sm tracking-\[0\.3em\] uppercase mb-4"/g, replacement: 'className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"' },
  { regex: /className="font-body text-\[10px\] tracking-\[0\.35em\] uppercase mb-6"/g, replacement: 'className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"' },
  { regex: /className="font-body text-\[10px\] tracking-\[0\.35em\] uppercase"/g, replacement: 'className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-4"' },
  { regex: /className="font-body text-xs tracking-\[0\.3em\] uppercase mb-4"/g, replacement: 'className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6"' },
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
