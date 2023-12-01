"use strict";
// function testMe(name:string):void{
//     console.log(name);
// }
// testMe("Your Mom");
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// did not carry over to index.js after doing node. /src/index.js
//ask for help tomorrow morning
//first thing first: Classes:
//reference back to W3 for RPG:
//----------Classes----------------//
//Create Character class with the attributes of classType(Warrior, Barbarian, Nightblade...), healthpoints(HP),
// attackpoint(HP), Weapons(maybe give the player and option to carry 3 max limits for weapons.)
//Weapons will have to be a [] if given 3 weapons to carry.
// Weapons class maybe? attributes, name of weapon and damage? or just name 
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}
class Character {
    constructor(classType, hP, attackPoints) {
        this.classType = classType;
        this.hP = hP;
        this.attackPoints = attackPoints;
        this.weapons = [];
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    ;
    depleteHealth(damage) {
        console.log('AHHHHH');
        this.hP -= damage;
        if (this.hP < 0) {
            this.hP = 0;
        }
    }
    ;
    regainHealth(healing) {
        console.log("I've got the power!");
        this.hP += healing;
    }
    ;
    pickUpWeapon(weapon) {
        console.log("look what I found!");
        if (this.weapons.length < 3) { //append the weapon if the weapons list is less than 3.
            this.weapons.push(weapon);
        }
        else {
            console.log("Sorry, you can only have 3 weapons!");
        }
    }
    ;
    dropWeapons() {
        this.weapons = [];
    }
    stats() {
        console.log(`I am ${this.classType} with ${this.hP}, ${this.attackPoints} attack points, and come with these weapons: ${this.weapons}`);
    }
}
//----------functions-----//
//functions: depleteHealth(class Character, damage)
//regainHealth(class Character, healing)
//addWeapon(class Character, class Weapon)BUT CANT HAVE MORE THAN 3
//removeWeapon(class Character, class Weapon)This one might be tricky.
//possible stats function(class Character)
//Do we have to do a createUser function? How would we know who is playing?
//if you make a createUser function, they would have to carry over all of class Character attributes 
//IF you are wondering why do I have lots of the functions or things commented out, it's because I put all the functions outside of the class. But later thought about if they really needed to be there. 
function createUser(classType, hP, attackPoints) {
    // let user = new Character(
    //     uuid(),
    //     classType,
    //     hP,
    //     attackPoints,
    //     weapon
    // )
    // return user
    return new Character(classType, hP, attackPoints);
}
function blacksmith(name, damage) {
    let weapon = new Weapon(name, damage);
    return weapon;
}
//--------driver code-------//
let BattleMage = createUser('BattleMage', 75, 100); //Takes is classType, hP, attackPoints and weapons[]
//weapons: can only hold up to 3.(name, damage)
let Staff = blacksmith("Staff", 50);
let Mace = blacksmith("Thorn", 20);
let Spell = blacksmith("Elemental Fury", 75); //can add the other and we'll add an extra to see the error message. 
let Dagger = blacksmith("Dagger", 10);
//depleteHealth(player, damage)
BattleMage.depleteHealth(35);
//regainHealth(player, healing)
BattleMage.regainHealth(15);
// now to add these weapons to the list(player, weapon)
BattleMage.pickUpWeapon(Staff);
BattleMage.pickUpWeapon(Mace);
BattleMage.pickUpWeapon(Spell);
BattleMage.pickUpWeapon(Dagger);
//stats(player)
BattleMage.stats();
//since you added an option to drop weapon, now add it. You should console.log a message to let the user know
BattleMage.dropWeapons();
console.log('You dropped all your weapons!');
