/*
*
*/

var meneamescrap = require('./lib/meneamescrap.js');
var commander = require('commander');

commander
  .version('0.0.1')
  .usage('[options] <file>')
  .description('muestra el numero de votos para una noticia del [0 al 10]')
  .option('-n, --number', 'Muestra numero de votos para una una noticia')
  .parse(process.argv);


if (commander.number) {
  if(commander.args.length !== 1) {
		console.log("Indica un numero");
	} else {
    meneamescrap.getLastNews(commander.args[0], function(nombre, num) {
      console.log(nombre, num);
    });
	}
}
