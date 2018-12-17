function getOptions() {
  let x = document.getElementById("mySelect");

  let colors= "the colors are ";

  for (i=0;i<x.length;i++) {
    colors = colors + "\n" + x.options[i].text;
  }
  alert(colors);
}
