const prompt = require("prompt-sync")();
var output = [];

function fizzBuzz() {
    if(count%3===0 && count%5===0){
        output.push("fizzbuzz");
    }
    else if(count%3===0){
        output.push("fizz");
    }
    else if(count%5===0){
        output.push("buzz");
    }
    else{
        output.push(count);
    }
    
    console.log(output);
}
var inn =prompt("enter a number: ");
for(var count=1;count<=inn;count++){
    fizzBuzz()
}


