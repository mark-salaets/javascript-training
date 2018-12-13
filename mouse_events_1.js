let enter = function(i) {
  let x = document.getElementsByClassName("hover")[0];
  x.style.visibility = "hidden";
}

// let leave = function() {
//   let x = document.getElementsByClassName("hover")[0];
//   x.style.visibility = "visible";
// }

var hover = document.getElementsByTagName("div");

  hover[0].addEventListener("mouseover", enter);
