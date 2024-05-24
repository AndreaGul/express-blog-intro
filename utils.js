const path = require('path');
const fs = require('fs');

const readJSON = (fileName) => {
  const filePath = path.join(__dirname, 'db', `${fileName}.json`);
  const json = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(json);
};

module.exports = {
  readJSON,
};
