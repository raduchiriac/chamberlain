const testFolder = '';
const fs = require('fs');

!!testFolder && fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
