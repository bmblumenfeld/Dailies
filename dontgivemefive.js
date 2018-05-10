function dontGiveMeFive(start, end) {
  var count = 0;
  for (var i = start; i <= end; i++) {
    var number = i + ''
    var fiveOnIt = 1;
    for (var k = 0; k < number.length; k++) {
      if (number[k] === '5') {
        fiveOnIt--
      }
    }
    if (fiveOnIt === 1) {
      count++
    }
  }
  return count;
}

function findShort(s){
  var words = s.split(' ');
  return words.reduce (function (acc, element, index){
  if (!index) {
      acc = element.length  
    }
    if (element.length < acc) {
      acc = element.length;
    }
    return acc;
  },0)
}
