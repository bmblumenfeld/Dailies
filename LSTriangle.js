var minimumTotal = function(triangle) {
  return triangle.reduce(function(acc, block) {
    var lowest = block.sort(function(a, b) {
      return a - b;
    })[0];
    console.log(acc);
    acc += lowest;
    return acc;
  }, 0);
};

var treechie = [[-1], [2, 3], [1, -1, -3]];
console.log(minimumTotal(treechie));
