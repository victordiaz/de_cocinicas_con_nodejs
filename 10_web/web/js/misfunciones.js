$( document ).ready(function() {
    console.log( "ready!" );

    startCounter();
});


function startCounter() {
  var count = 0;

  setInterval(function() {
    $("#counter").text(count++);
  }, 1000);

}
