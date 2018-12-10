let shopItems = [];

let sword = {
  title : "Sword of flames",
  physic : 3591,
  magic : -5,
  minLevel : 9,
  available : true
};

let axe = {
  title : "Axe of beheading",
  physic : 4346,
  magic : -10,
  minLevel : 12,
  available : false
};

let staff = {
  title : "Staff of destruction",
  physic : 50,
  magic : 9001,
  minLevel : 14,
  available : true
};

shopItems.push(sword);
shopItems.push(axe);
shopItems.push(staff);

function showObjects() {
  for(i=0;i<shopItems.length;i++) {
    console.log(shopItems[i]);
  }
  return;
}

function isAvailable() {
  for(i=0;i<shopItems.length;i++) {
    if(shopItems[i].available == true) {
      console.log(shopItems[i].title + " is available");
    }
  };
  return;
};

function meetLvlReq() {
  for(i=0;i<shopItems.length;i++) {
    if(shopItems[i].minLevel >= 10) {
      console.log("Your level is high enoug to equip item: " + shopItems[i].title);
    }
  }
  return;
}

console.log(showObjects());
console.log(isAvailable());
console.log(meetLvlReq());
