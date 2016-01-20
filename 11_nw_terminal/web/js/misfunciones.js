var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

$( document ).ready(function() {
    initUI();
    console.log( "ready!" );
});

function initUI() {
  $('#textInput').keypress(function (e) {
    if (e.which == 13) {
      var line = $('#textInput').val();
      console.log( line );
      execute(line);
      $('#textInput').val("");
      return false;
    }
  });
}

function execute(line) {
  var lineSplitted = line.split(" ");
  var cmd = lineSplitted[0];
  var vars = lineSplitted.slice(1, lineSplitted.length);

  const ls = spawn(cmd, vars);
  ls.stdout.on('data', function(data) {
    var str = data.toString(), lines = str.split(/(\r?\n)/g);
     for (var i=0; i<lines.length; i++) {
       $('#cmd_list').append('<li>'+ lines[i] +'</li>')
     }
  });

  ls.stderr.on('data', function(data) {
    $('#cmd_list').append('<li class ="error">'+ data +'</li>')
  });

  ls.on('close', function(code) {
    //$('#cmd_list').append('<li class ="close">'+ code +'</li>')
  });
}
