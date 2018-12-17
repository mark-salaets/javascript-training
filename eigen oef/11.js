/*functies van oefening*/

function squareNumber(num) {
  var squaredNumber = num * num;
  console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
  return squaredNumber;
}

function halfOf(num) {
  var half = num / 2;
  console.log('Half of ' + num + ' is ' +  half);
  return half;
}

function percentOf(num1, num2) {
  var percent = (num1/num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}

function areaOfCircle(radius) {
  var area = Math.PI * squareNumber(radius);
  console.log('The area of circle with radius ' + radius + ' is ' + area);
  return area;
}

function doCrazyStuff(num) {
  var half    = halfOf(num);
  var squared = squareNumber(half);
  var area    = areaOfCircle(squared);
  var result  = percentOf(squared, area);
}

/*eigen code*/

document.getElementById("square-button").addEventListener("click", function() {
  let num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});

document.getElementById("half-button").addEventListener("click", function() {
  let num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(num);
});

document.getElementById("percent-button").addEventListener("click", function() {
  let num1 = document.getElementById("percent1-input").value;
  let num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1, num2);
});

document.getElementById("area-button").addEventListener("click", function() {
  let num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(num);
});
