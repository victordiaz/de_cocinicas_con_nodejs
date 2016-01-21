function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        console.log(line+ " me mola.");
    });
    
    rl.on('close', function (line) {
        console.log(line);
    });
}
processFile('comida.txt');