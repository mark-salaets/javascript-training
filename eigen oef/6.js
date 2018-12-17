let createTable = function() {
  let row = prompt("number of rows", 1);
  let column = prompt("number of columns", 1);

  for(i=0;i<parseInt(row, 10);i++) {
    let x = document.getElementById("myTable").insertRow(i);

    for(j=0;j<parseInt(column, 10);j++) {
      let y = x.insertCell(j);
      y.innerHTML = "row " + (i + 1) + ", column " + (j + 1) + "."
    }
  }
}
