function isEven(n) {
   return n % 2 == 0;
}

for(var i = 0; i < 20; i++) {
  //console.log(i + " is " + isEven(i));
  if(isEven(i)) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is niet even.");
  }
}
