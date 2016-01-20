console.log("Bienvenido Mr. Node")

setInterval(function() {
  process.stdout.write("#")
}, 100);

function mensaje() {
  console.log("hola ");
}
setInterval(mensaje, 500);
