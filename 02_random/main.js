var stdin = process.openStdin();

ask();

stdin.addListener("data", function(d) {
  console.log( d.toString().trim() + "? ya sabia yo.... ");
  ask();
});

function ask() {
  console.log('Dime algo aleatorio: ');
}
