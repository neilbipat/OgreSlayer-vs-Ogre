// Question 1

// const mynameNeil = {

//   favoriteFood: "Coconut Shrimp",

// };

// mynameNeil();

// const: It is a statment saying that myNameNeil can not be changed.

// myNameNeil =: It is the name of the object, where is if we list the object,
// it will show all the contents cotained. You put the equal sign and you're
// now ready to start the object.

// {}: The curly braces contain the variable and properties inside.

// favoriteFood: Is a value, and I like to think of it as a chapter in a book,
// where it stays, and hosts different things in it. Note that it seperated
// itself and contents use of the colon.

// "Coconut Shrimp": Is the thing otherwise known as a property that the value
// holds.

// , : It ends the propreties held by a value, in which you would press enter
// and add a new value along with more properties.

 // Question 2

 const me = {
   name: "Neil",
   age: 24,
   email: "neilbipat@gmail.com"
 };

console.log(me);

console.log(me.name);

me["age"] = 42;
console.log(me.age);

me["place of residence"] = "Queens"

console.log(me["place of residence"]);

//  Question 3;

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
};

console.log(monster.name);

console.log(monster["type"]="creature");

console.log(monster["age"]=6);

console.log(monster);

console.log(monster["intro"] = `Hello I am ${monster.name} and I am ${monster.color} and I am a ${monster.type}.`);

//
// 4. ogres

// Program:  Ogre Slayer vs Ogre
// Ogre Slayer needs hitpoints, health bar
// Ogre needs hitpoints, health bar
// Ogre Slayer attacks Ogre
// Ogre attacks Ogre Slayer
// Ogre Slayer's attack stat is fixed
// Ogre's attack stat is randomized
// If Ogre-slayer's health goes down Ogre wins
// If Ogre's health goes down Ogre Slayer wins

console.log("");

function Character(name, hitPoints, healthBar){
  this.name = name;
  this.hitPoints = hitPoints;
  this.healthBar = healthBar;

    this.damage = function(){
      return this.hitPoints [ Math.floor( Math.random() * this.hitPoints.length ) ];
    };
    // }console.log(`${this.name}` did ${this.damage} points of damage`);


};

const ogreSlayer = new Character("Ogre Slayer", [25, 25, 25], 100);

const ogre = new Character("Ogre", [0, 0, 0, 0, 5, 18, 18, 18, 20,20, 55], 150);


function Game(ogreSlayer, ogre){
  this.ogreSlayer = ogreSlayer;
  this.ogre= ogre;

  // ogre[healthBar] = ogre[healthBar] - orgeSlayer[damage];



  let round = 1;
  while (ogreSlayer.healthBar>0 && ogre.healthBar>0){
    console.log("Round "+ round);
    ogre.healthBar -= this.ogreSlayer.damage();
    console.log(`The ogre's health is: ${ogre.healthBar}`);


    ogreSlayer.healthBar -= this.ogre.damage();
    console.log(`ogreSlayer's health is: ${ogreSlayer.healthBar}`);
    round++;
  }
// The reason the while loop exists it to away the character's health.
  if(ogreSlayer.healthBar === 0){
    console.log("Ogre Wins. . .");
  }else if(ogre.healthBar === 0){
    console.log("Ogre Slayer Wins!");
  }
  return "Game Over"
}


console.log(Game(ogreSlayer, ogre));
