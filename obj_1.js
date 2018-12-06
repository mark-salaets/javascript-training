let char = {
  name : "guard",
  age : 35,
  items_to_give : ["cheese", "potato", "silver plate"],
  give_item : function(n) {
      return (char.items_to_give[n]);
    }
}

console.log("character name: " + char.name);
console.log("character age " + char.age);
console.log("character items: " + char.items_to_give);
console.log(" ");

console.log("I once was an adventurer like you, here's item: " + char.give_item(0));
