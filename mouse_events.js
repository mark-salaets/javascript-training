let enter = function(i) {
  let x = document.getElementsByClassName("hover")[0];
  x.style.visibility = "hidden";
}

let enter1 = function(i) {
  let x = document.getElementsByClassName("hover")[1];
  x.style.visibility = "hidden";
}

let enter2 = function(i) {
  let x = document.getElementsByClassName("hover")[2];
  x.style.visibility = "hidden";
}

let reset = function() {
  let x = document.getElementsByClassName("hover");
  x[0].style.visibility = "visible";
  x[1].style.visibility = "visible";
  x[2].style.visibility = "visible";
}

let cordsX = function(e) {
  let x = e.clientX;
  document.getElementById("x-axis").innerHTML = "x-coördinaten : " + x;
}

let cordsY = function(e) {
  let y = e.clientY;
  document.getElementById("y-axis").innerHTML = "y-coördinaten : " + y;
}



var hover = document.getElementsByTagName("div");

hover[0].addEventListener("mouseover", enter);
hover[1].addEventListener("mouseover", enter1);
hover[2].addEventListener("mouseover", enter2);

var click = document.getElementById("reset");
click.addEventListener("click", reset);

document.getElementById("x-axis").addEventListener("mousemove", cordsX);
document.getElementById("y-axis").addEventListener("mousemove", cordsY);
