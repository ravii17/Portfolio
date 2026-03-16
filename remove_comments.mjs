import fs from 'fs';
import path from 'path';

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.match(/\.(ts|tsx|js|jsx)$/)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const original = content;

      // 1. Remove {/* ... */}
      content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
      
      // 2. Remove block comments /* ... */
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // 3. Remove line comments // ... but avoid http:// and https:// and we should be careful about whitespace
      content = content.replace(/(?<!:)\/\/.*$/gm, '');

      // Clean up multiple empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

const srcDir = path.join(process.cwd(), 'src');
processDirectory(srcDir);
console.log('Done!');
