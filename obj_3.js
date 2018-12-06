let mainChar = {
  name : "Dragonborn",
  level : 100,
  life : 200,
  weapon : {
    name : "Daedric sword",
    damage : 25
  },
  attack : function() {
    console.log(mainChar.name + " does " + mainChar.weapon.damage + " damage with the weapon: " + mainChar.weapon.name);
  }
}

mainChar.attack();
