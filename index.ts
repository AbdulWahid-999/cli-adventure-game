#! /usr/bin/env node

import inquirer from "inquirer";

class Hero {
    name: string;
    health =100;

    constructor(name: string) {
        this.name = name
        
    }

    decreaseHealth(){
        this.health -= 20
    }
increaseHealth(){
    this.health = 100
}
}
// for enemy

class Enemy {
    name: string;
    health = 100;

    constructor(name: string) {
        this.name = name
        
    }

    decreaseHealth(){
        this.health -= 20
    }
increaseHealth(){
    this.health = 100
}
}

// step 2 hero object

async function main(){
    const{ heroName } = await inquirer.prompt(
        [
            {
                type: "input",
                name: "heroName",
                message: "Enter your hero name:"
            }
        ]
    )
    // enemy object
    const {enemyType} =await inquirer.prompt(
        [
            {
                type: "list",
                name: "enemyType",
                choices: ["alien","witch","zombie"],
                message: "select the enemy you want to fight with:"
            }
        ]
    )
    // step 3 battelfield
    const hero = new Hero (heroName)
    const enemy = new Enemy (enemyType)

    console.log(`${enemy.name} v/s ${hero.name}`);

// step 4 action 
do{
    const {action} = await inquirer.prompt([
        {
         type: "list",
         name: "action",
         choices: ["Attack","Defend","Run Back"],
        message: "choose the attack type to perform action",
        }
    ])


// step 5 switch case

switch (action){
    case "Attack":
        const randomNum = Math.random()
        if (randomNum > 0.5) {
            hero.decreaseHealth();
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health}`);
            if(hero.health <= 0){
                console.log("you loss! try again");
                return
            }
        } else{
            // enemy health
            enemy.decreaseHealth()
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health}`);
            if(enemy.health <= 0){
                console.log("congratulation! you win");
                return
        }
    }
    break;
}
}
while (true)
}


main();``