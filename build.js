const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const file of ['index.html', 'README.md']) {
  if (fs.existsSync(path.join(__dirname, file))) {
    fs.copyFileSync(path.join(__dirname, file), path.join(dist, file));
  }
}
console.log('Build concluído: ficheiros copiados para dist/');
