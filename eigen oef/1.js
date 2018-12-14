let getFormvalue = function() {
	let x = document.getElementById("form1");

	for(i=0;i<x.elements.length;i++) {
		if(x.elements[i].value != "Submit") {
			console.log(x.elements[i].value);
		}
	}
}
