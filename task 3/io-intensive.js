const fs = require('fs');
const crypto = require("crypto");

function performIOOperations() {
  const fileName = './io-test-file.txt';
  
  var randomStr = crypto.randomBytes(20).toString('hex');
  fs.writeFileSync(fileName, randomStr);

  const content = fs.readFileSync(fileName, 'utf-8');

  fs.unlinkSync(fileName);

  return content;
}

console.time('io-intensive');
performIOOperations();
console.timeEnd('io-intensive');