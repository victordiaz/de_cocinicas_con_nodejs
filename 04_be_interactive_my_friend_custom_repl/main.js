/*
* Usamos la REPL de Node.js
* (READ, EVAL, PRINT, LOOP)
* 1. con Node
* 2. cargando script con .load main.js
* 3. Usando el módulo REPL
* Nota: _ contiene el resultado de la última expresión
*
* Probar arrays y objetos
*
*/



var repl = require("repl");

var replServer = repl.start({
  prompt: "my-app > ",
});

//esto es un array
var miArray = ["hola", "que", "tal"];

//esto es un objeto
var miObjeto = {primero:"Sopa", segundo:"Tofu con verduras", postre:"flan", bebida:"aguica"};

function suma(a, b) {
  var res = a + b;
  console.log("resultado: " + res);
}

//añadimos la funcion SUMA al contexto de la REPL
replServer.context.suma = suma;
replServer.context.miArray = miArray;
replServer.context.miObjeto = miObjeto;
