//oefening 1

var x = document.querySelector("body");
x.classList.remove("bg-aqua");
x.classList.add("bg-olive");

// var elements = document.getElementsByTagName("body")[0];
// elements.classList.remove("bg-aqua");
// elements.classList.add("bg-olive");

var elements = document.getElementsByTagName("p")[0];
elements.classList.remove("bg-lime");
elements.classList.remove("gray");
elements.classList.add("aqua");

var elements = document.getElementsByClassName("bg-silver");
for(i=0;i<elements.length;i++){
  elements[i].classList.add("bg-teal");
}
elements[0].classList.remove("bg-silver");

var elements = document.getElementsByTagName("blockquote");
for(i=0;i<elements.length;i++) {
  elements[i].classList.add("bg-white");
}

//oefening 2

var x = document.querySelector("#my-table");
x.classList.add("bg-purple");

var x = document.querySelectorAll("p");
x[0].classList.add("shadow");
x[2].classList.add("shadow");


//oefening 3

var x = document.getElementsByTagName("pre");
for(i=0;i<x.length;i++) {
  x[i].style.color = "red";
}
for(i=0;i<x.length;i++) {
  x[i].style.backgroundColor = "blue";
}
for(i=0;i<x.length;i++) {
  x[i].style.borderTop = "3px solid red";
}
for(i=0;i<x.length;i++) {
  x[i].style.borderBottom = "3px solid red";
}
var x = document.getElementsByTagName("h3")[0];
x.innerHTML = "<em>Italic title ! yeah !</em>";

var x = document.getElementsByTagName("h2")[0];
x.innerHTML = "<strong>HTML doesn't work !</strong>";

//oefening 4

var x = document.getElementsByTagName("ul")[0];
var li = document.createElement("li");
li.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>";
x.appendChild(li);
var y = x.getElementsByTagName("a")[0];
y.style.color = "white";

//oefening 5

var x = document.getElementsByTagName("ol")[0];

var i = x.children.length;
while(i--) {
  x.removeChild(x.children[i]);
}
var list = ["Silent Teacher","Code Monkey", "CodeCombat"];

for(i=0;i<list.length;i++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.textContent=list[i];
  li.textContent=a;

  a.setAttribute("href", "http://www." + list[i] + ".com");

  li.appendChild(a);
  x.appendChild(li);
}

//oefening 6
