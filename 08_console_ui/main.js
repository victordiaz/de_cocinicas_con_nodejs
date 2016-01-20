var meneamescrap = require('./lib/meneamescrap.js');
var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true
});

screen.title = 'Meneascrapper';

var list = blessed.list({
	top:'center',
	left:'center',
	width:'60%',
	height:'80%',
	padding:'3',
	input:true,
	keys: true,
	border: {
		type: 'line'
	},
  items: ["1", "2", "3", "4", "5"],
	style:{fg:'white', bg:'blue'}
});

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

list.on('select', function(item, index) {
  screen.append(box);

  meneamescrap.getLastNews(index, function(nombre, num) {
    screen.append(box);
    box.setContent(nombre + " " + num);
    screen.render();
    box.focus();

  });
});
screen.append(list);
list.focus();


//screen.remove(box);

screen.key(['escape'], function(ch, key) {
  screen.remove(box);
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();
