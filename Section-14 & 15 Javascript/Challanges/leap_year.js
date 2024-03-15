const prompt = require('prompt-sync')();

function isleap(year){
    if(year%4===0 && year%400===0){
        if(year%100===0){
            return "Not leap year."
        }
        else{
            return "Leap year."
        }
    }
    else{
       return"Not Leap year.";
    }
}

var year=prompt("Enter a year: ");
console.log(isleap(year));
