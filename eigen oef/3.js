let getAttributes = function() {
  let x = document.getElementById("w3r");
  let type = x.type;
  let lang = x.hreflang;
  let rel = x.rel;
  let target = x.target;
  let href = x.href;

  alert("type: " + type + "\nlang: " + lang + "\nrel: " + rel + "\ntarget: " + target + "\nhref: " + href);
}
