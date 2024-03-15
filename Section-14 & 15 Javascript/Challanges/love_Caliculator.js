const prompt = require("prompt-sync")()

var name = prompt("Enter your name: ")
var crush = prompt("Enter your crush name: ")

var love_score = Math.floor(Math.random() * 100) + 1
console.log(name + " and " + crush + " has '" + love_score + "%' match with each other!!")

if(love_score === 95){
    console.log(name + " and " + crush + " has '" + love_score + "%' match with each other!!")
}

if(love_score > 50){
    console.log(name + " and " + crush + " has '" + love_score + "%' match with each other!!")
}