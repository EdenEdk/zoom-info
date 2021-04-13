const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/zoom-info/runtime.js',
    './dist/zoom-info/polyfills.js',
    './dist/zoom-info/main.js'
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/eden-popup.js');
  await fs.copyFile('./dist/zoom-info/styles.css', 'elements/styles.css');
})()
