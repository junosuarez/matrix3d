var cat = document.getElementById('cat');
var show = document.getElementById('show');

document.addEventListener('change', change, false);
document.addEventListener('keyup', change, false);

function change(e) {
  var i = parseInt(e.target.id);
  var val = e.target.value;
  vals[i] = val;
  setDom();
}

var vals = [
1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1
];




function scale(percent) {
var percent = percent / 100;
var factor = Math.pow(percent, -1);
var vals = [
1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, factor
];
return vals;
}

vals = scale(125);

var els = [];
//vals = vals.map(Math.random);
function init() {
  var grid = document.createElement('div');

  vals.forEach(function(val, i) {
    var el = document.createElement('input');
    el.id = i;
    els.push(el);
    grid.appendChild(el);
  });

  setDom();

  document.body.appendChild(grid);
}

function makeStyle(vals) {
  return 'transform: matrix3d(' + vals.join(', ') + ');';
}

function setDom() {
  els.forEach(function(el, i) {
    el.setAttribute('value', vals[i]);
  });
  var style = makeStyle(vals);
  show.innerHTML = style;


  cat.setAttribute('style', '-webkit-' + style);
  var valid = cat.style.webkitTransform !== '';
  show.setAttribute('class', valid ? '' : 'invalid');
  if (valid) {
    var previousStyle = style;
  } else {
    cat.setAttribute('style', '-webkit-' + previousStyle);
  }
}



init();