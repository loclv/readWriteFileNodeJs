const lineReader = require('line-reader');

const fs = require('fs');

const stream = fs.createWriteStream("./output.csv");

stream.once('open', function(fd) {


  lineReader.eachLine('./test.csv', function(line) {
    console.log(line);
    const headLine = line.substr(0, 3);
    console.log(headLine);
    if ('10.' === headLine || '127.0.0.1' === line) {
      stream.write("v\n");
    } else {
      stream.write("n\n");
    }
  });

});
