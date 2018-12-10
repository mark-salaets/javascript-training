let chars = {
  mainChar : {
    name : "Dragonborn",
    level : 80,
    life : 2000,
    weapon : {
      name : "sword",
      damage : 5
    },
    attack : function() {
      console.log(this.name + " attacks " + chars.opponentChar.name + " with weapon: " + this.weapon.name);
      return chars.opponentChar.receiveDamage();
    }
  },

  opponentChar : {
    name : "Dragon",
    level : 75,
    life : 1850,
    weapon : {
      name : "fire breath",
      damage : 26
    },
    receiveDamage : function() {
      let dmgDone = chars.mainChar.weapon.damage * chars.mainChar.level;
      this.life -= dmgDone;

      if(this.life < 0) {
        return window.alert(this.name + " is dead!");
      }
      console.log(this.name + " has taken " + dmgDone + " damage and has " + this.life + " hp left.");
      console.log(" ");
    }
  }
}

console.log("click the button to attack");
console.log(" ");
