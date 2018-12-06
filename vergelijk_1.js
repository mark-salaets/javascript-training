let lang = "nl";
let msg;

if(lang === "nl") {
  msg = "hallo iedereen";
} else if(lang === "fr") {
  msg = "Bonjour tout le monde";
} else if(lang === "en") {
  msg = "Hello world";
} else {
  msg = "taal onbekend";
}

console.log(msg)
