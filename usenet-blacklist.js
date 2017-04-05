var deetsCells = document.querySelectorAll('#detailstable td');
   
blackList = [/m@ovie.com \(M\)/]

function matchInArray(string, expressions) {
  if ( string === undefined ) {
    return false;
  }

  var len = expressions.length,
    i = 0;

  for (; i < len; i++) {
    if (string.match(expressions[i])) {
      return true;
    }
  }

  return false;

};


Array.prototype.forEach.call(deetsCells, function(cell) {
  if (matchInArray(cell.innerHTML, blackList)) {
    cell.style.border = "5px solid red";
  }
})
