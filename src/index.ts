// function testMe(name:string):void{
//     console.log(name);
// }
// testMe("Your Mom");

import { v4 as uuid } from "uuid"
import * as rl from 'readline-sync';

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
   
    constructor(public name:string, 
                public damage:number){}
}

class Character{ //id, classType, HP, attackpoints, weapons(this will have to be an array[])
 //this can reference from class Weapons
    private readonly _id: string;

    weapons: Weapon[] = []

    constructor(public classType:string,
                public hP:number,
                public attackPoints: number,
                ){

                    this._id = uuid();
                }

                get id():string{
                    return this._id
                };

                depleteHealth(damage: number):void{ //REMEMBER THIS CANNOT GO BELOW ZERO so make sure to do that. so you need a conditional
                    console.log('AHHHHH')
                    this.hP -= damage; 
                    if (this.hP < 0){
                        this.hP = 0;
                    } 
                };

                regainHealth(healing:number):void{
                    console.log("I've got the power!")
                    this.hP += healing
                };

                pickUpWeapon(weapon:Weapon):void{ //Limit is 3 per character so you have to add another conditional.
                    console.log("look what I found!")
                    if(this.weapons.length < 3){ //append the weapon if the weapons list is less than 3.
                        this.weapons.push(weapon)
                    } else{
                        console.log("Sorry, you can only have 3 weapons!")
                    }
                };

                dropWeapons():void{
                    this.weapons = [];
                }

                stats(): void{
                    console.log(`I am ${this.classType} with ${this.hP}, ${this.attackPoints} attack points, and come with these weapons: ${this.weapons}`)
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


function createUser(): Character {
    let classType:string = ""
    let hP: number = 0
    let attackPoints: number = 0

    classType = rl.question("What class would you like be? ")

    while(true){
    hP = parseInt(rl.question("How much health or Hit Points would you like to start off with? "))
    attackPoints = parseInt(rl.question("How much Attack Damage do you do? "))

    if (isNaN(hP)){
        console.log("Needs to be a number!");
    }else{
        break
    }
    if (isNaN(attackPoints)){
        console.log("Needs to be a number!");

    }else{
        break
    }
     
    }
    return new Character(classType, hP, attackPoints);
     
    
}
console.log(createUser())



function blacksmith(): Weapon{ //creating a weapon
    let name:string = ""
    let damage:number = 0

    name = rl.question("What is the name of your weapon? ")
    while(true){
        damage = parseInt(rl.question("How much damage does this weapon do? "))

    if (isNaN(damage)){
        console.log("Needs to be a number!")
    }else{
        break
    }
    }
    return new Weapon(name, damage)    
}
console.log(blacksmith())

//have to comeback to add an option to find a weapon during the dungeon
//maybe randomize it like how to did with the numbers in your driver code.
//but how can randomize the weapon found without having the user manually type it in? The program doesn't know what the weapon options are.
//might have to make an array of weapons
//then use the math.random to select a weapon within the array. 

// function findNewWeapon(): 



//--------driver code-------//
// let BattleMage =  createUser('BattleMage', 75, 100);//Takes is classType, hP, attackPoints and weapons[]

// //weapons: can only hold up to 3.(name, damage)
// let Staff = blacksmith("Staff", 50)
// let Mace = blacksmith("Thorn", 20)
// let Spell = blacksmith("Elemental Fury", 75) //can add the other and we'll add an extra to see the error message. 
// let Dagger = blacksmith("Dagger", 10)

// //depleteHealth(player, damage)
// BattleMage.depleteHealth(35)

// //regainHealth(player, healing)
// BattleMage.regainHealth(15)

// // now to add these weapons to the list(player, weapon)
// BattleMage.pickUpWeapon(Staff) 
// BattleMage.pickUpWeapon(Mace)
// BattleMage.pickUpWeapon(Spell)
// BattleMage.pickUpWeapon(Dagger)

// //stats(player)
// BattleMage.stats()

// //since you added an option to drop weapon, now add it. You should console.log a message to let the user know
// BattleMage.dropWeapons();
// console.log('You dropped all your weapons!')

//---------updated driver code------//
//What can I do to use all methods in class.
//depletedHealth, regainHealth, pickUpWeapon, dropWeapons, 
// stats, createUser, blacksmith
//lets try to mimic a dungeon
//if I add taken damage, need a function that can generate a random number. RESEARCH
// also need it for regainHealth
//this is going to be alot. KEEP TRACK OF MR. SQUIGGLES

while(true){
    const gamer = createUser()
    console.log(`Come on in ${gamer.classType} to Dark Castle! `)

    while(true) {
        // console.log("Explore Dark Castle")
        // console.log("Check Stats")
        // console.log("Coward Away")

        const input = rl.keyInSelect(["Explore", "Stats", "Blacksmith", "Exit" ], "Choose an Option")
// have to reference index in array. Not Working. Ask Help. 
        if(input === 0){
            const action = Math.floor(Math.random() * 100) + 1;

            if(action < 40){

                const takenDamage = Math.floor(Math.random() * 10) + 1
                gamer.depleteHealth(takenDamage);
                console.log(`Zenhoa appears and used Blaze Wall. You took ${takenDamage} damage!`)

            } else if(action < 60){

                const healing = Math.floor(Math.random() * 10) + 1;
                gamer.regainHealth(healing);
                console.log(`Candy was used! Restored ${healing} HP`)

            } else if(action < 80){

                const newWeapon = blacksmith()
                gamer.pickUpWeapon(newWeapon)
                console.log(`While roaming, you found ${newWeapon.name} and it does ${newWeapon.damage}`)

            } else{
                console.log("You ran into Spiky Tiger. He curled into a ball and knocked you unconscience!")
                gamer.dropWeapons()
                console.log("All weapons were dropped due to special ability!")

            }
        }else if(input === 1){

            gamer.stats()
            
        }else if(input === 3){
            console.log("Thank you for exploring Dark Castle")
            break
        }

        if(gamer.hP <= 0){
            console.log("Death has arrived for you.")
            break
        }
            
    }
    break
}
