const fs = require('fs');
const pkg = require('../package.json');

(() => {
  fs.copyFileSync('LICENSE', './dist/LICENSE');
  fs.copyFileSync('README.md', './dist/README.md');
  fs.writeFileSync('./dist/package.json', JSON.stringify({ ...pkg }, null, 2));
})()
