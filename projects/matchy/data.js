/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal ={
    
};
animal.species = "Tiger";
animal["name"] = "Jeffery";
animal.noises = [];
console.log(animal);

 


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0]="roar";//second
noises.push("wrar");//not showing up
noises.unshift("rawr xd");// first true
noises[noises.length] = "King of jungle";//third
console.log(noises.length-1);
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
noises.push("get out me land");//last
console.log(animal);
console.log(noises.length);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
console.log(animals);
var snake = {
    species: "ball Python",
    name: "Snakey snake",
    noises: ["hiss", "ssssss", "wiss", "ccchhhrrr"],
};
animals.push(snake);
var bear = {
    species: "brown bear",
    name: "Smokey the bear",
    noises: ["roar", "groar", "hmph", "rogf"],
};
animals.push(bear);
var dinosaur = {
    species: "T-Rex",
    name: "Rexy Rex",
    noises: ["baugh", "roar", "ugh", "buuuuurp"],
};
animals.push(dinosaur);
console.log(animals);
console.log(animals.length);





//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //I decided to use an array because it can store multiple 'friends'
var friends = [];
function getRandom(min, max){
    min = 0;
    max = animals.length-1;
    return Math.floor(Math.random()* (max-min)) + min;
}
friends.push(animals[getRandom()].name);
console.log(friends);
animals[0].friends = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
