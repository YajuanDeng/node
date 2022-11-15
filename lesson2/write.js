const fs = require('fs');

fs.writeFile("./files/2.txt", "I am tired", function(err) {
  if(err) {
    return console.log("failed write files", err.message);
  }
  console.log("write file succeed");
})