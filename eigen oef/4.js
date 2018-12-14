let insert_Row = function() {
  let table = document.getElementById("sampleTable");
  let row = table.insertRow(0);

  let td1 = row.insertCell(0);
  let td2 = row.insertCell(1);

  td1.innerHTML = "row 1";
  td2.innerHTML = "row 2";

}
