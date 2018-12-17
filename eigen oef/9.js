function calc() {
  let x = document.getElementById("myForm").elements;
  let rad = parseInt(x[0].value, 10);
  let vol = 4/3*Math.PI*rad*rad*rad;
  x[1].value = vol;
}
