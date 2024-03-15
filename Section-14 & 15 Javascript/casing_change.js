const prompt = require('prompt-sync')();

var name =prompt("Enter your name:");
// name_A=name.toUpperCase();
// name_L=name.toLowerCase();
// console.log("Upper Case: "+name_A);
// console.log("Lower Case: "+name_L);

//write Hello, Name.....where first character should be only capital
name_1=name.slice(0,1);
name_1=name_1.toUpperCase();
name_lower=name.slice(1,20);
name_lower=name_lower.toLowerCase();
console.log("Hello, "+name_1+name_lower);