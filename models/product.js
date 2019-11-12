const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    fs.readFile(p, (err, content) => {
      console.log(content);
    });
  }

  static fetchAll() {
  }
}