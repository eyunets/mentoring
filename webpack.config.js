const path = require('path');

module.exports = {
  entry: './drawElement.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  }
};