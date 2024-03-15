const prompt = require('prompt-sync')();

var paragraph=prompt("Enter a string: ");
if(paragraph.length>=280){
    console.log("You have reached your character limit");
}
else{
    console.log("You have " + (280-paragraph.length) + " more characters left");
}