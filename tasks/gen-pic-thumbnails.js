const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const { readdirSync } = require('fs');
const { basename, extname } = require('path');
const { execSync } = require('child_process');

const execute = (command) => execSync(command.replace(/\s+/g, ' '));

const root = `${__dirname}/../static/pics`;
const srcPath = `${root}/o`;
const dstPath = `${root}/t`;

// eslint-disable-next-line no-console
console.log('Building picture thumbnails...');

rimraf.sync(dstPath);
mkdirp.sync(dstPath);

readdirSync(srcPath).forEach((fileName) => {
  const extName = extname(fileName);
  const baseName = basename(fileName, extName);
  execute(`
    convert ${srcPath}/${fileName}${extName === '.gif' ? '[0]' : ''}
      -strip -quality 85% -resize 460x460^ -gravity center -extent 460x460
      -write ${dstPath}/${baseName}-460x460.jpg
      -resize 230
      -write ${dstPath}/${baseName}-230x230.jpg
      -quality 33% -resize 20 ${dstPath}/${baseName}-20x20.jpg
  `);
  if (baseName.endsWith('-cover')) {
    execute(`
      convert ${srcPath}/${fileName}
        -strip -quality 85% -resize 460
        -write ${dstPath}/${baseName}-460.jpg
        -resize 230
        -write ${dstPath}/${baseName}-230.jpg
        -quality 33% -resize 20 ${dstPath}/${baseName}-20.jpg
    `);
  }
  // eslint-disable-next-line no-console
  console.log(`Done ${fileName}...`);
});

process.exit(0);
