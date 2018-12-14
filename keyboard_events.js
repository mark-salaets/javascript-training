let changeColor = function(e) {
  let n = e.keyCode;
  let x = document.getElementById("character").style;
  switch (n) {
    case n = 96:
      x.backgroundColor = "rgb(73, 23, 23)";
      break;
    case n = 97:
      x.backgroundColor = "rgb(58, 149, 144)";
      break;
    case n = 98:
      x.backgroundColor = "rgb(171, 136, 49)"
      break;
    case n = 99:
      x.backgroundColor = "rgb(40, 15, 145)"
      break;
    case n = 100:
      x.backgroundColor = "rgb(99, 129, 67)"
      break;
    case n = 101:
      x.backgroundColor = "rgb(185, 123, 116)"
      break;
    case n = 102:
      x.backgroundColor = "rgb(84, 95, 135)"
      break;
    case n = 103:
      x.backgroundColor = "rgb(182, 54, 227)"
      break;
    case n = 104:
      x.backgroundColor = "rgb(41, 73, 105)"
      break;
    case n = 105:
      x.backgroundColor = "rgb(40, 210, 34)"
      break;
    default:
      x.backgroundColor = "white";
      break;
  }

}

let fadeOut = function(e) {
  let n = e.keyCode;

  switch(n) {
    case 37:
      document.getElementById("left").classList.add("highlight");
      break;
    case 38:
      document.getElementById("up").classList.add("highlight");
      break;
    case 39:
      document.getElementById("right").classList.add("highlight");
      break;
    case 40:
      document.getElementById("down").classList.add("highlight");
      break;
  }
}

let returnNormal = function(e) {
  let n = e.keyCode;

  switch(n) {
    case 37:
      document.getElementById("left").classList.remove("highlight");
      break;
    case 38:
      document.getElementById("up").classList.remove("highlight");
      break;
    case 39:
      document.getElementById("right").classList.remove("highlight");
      break;
    case 40:
      document.getElementById("down").classList.remove("highlight");
      break;
  }
}


window.addEventListener ("keydown", changeColor);

window.addEventListener ("keydown", fadeOut);

window.addEventListener ("keyup", returnNormal);
