var aftrekking = function(a, b) {
  return a - b;
}

var divisie = function(a, b) {
  return a / b;
}

var vermenigvuldiging = function(a, b) {
  return a * b;
}

var percentage = function(a, b) {
  return a * (b / 100);
}

var snelheid = function(a, b) {
  return (a / b) + "km/u";
}

console.log(aftrekking(100, 5));
console.log(divisie(100, 2));
console.log(vermenigvuldiging(2, 100));
console.log(percentage(10, 50));
console.log(snelheid(100, 2));
