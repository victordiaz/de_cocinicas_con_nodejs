var fs = require('fs'),
    readline = require('readline'),
    instream = fs.createReadStream('comida.txt'),
    outstream = new (require('stream'))(),
    rl = readline.createInterface(instream, outstream);

rl.on('line', function (line) {
    console.log(line+ " me mola.");
});