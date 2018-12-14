let changeContent = function() {
  let row = prompt("row");
  let column = prompt("column");
  let string =prompt("string");



  let table = document.getElementById("myTable").rows[row].cells[column];
  table.innerHTML = string;
}
