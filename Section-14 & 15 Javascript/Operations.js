let str1 = "Bala"
let str2 = "sai"

let str3 = str1 + str2
console.log(str3);

//if we have first var as a string and others as ajust number we get,

console.log("2" + 1);
console.log(2 + "1");

//her  we are getting the same as "12"; both the numbers a changed to string and combined together her..

//if we add another number her,let see what happpens,


console.log("2" + 1 + "3");
console.log(2 + "1" + 3);

//here also all these number are converted to String and gives output as "213"


// if we give first element of a var and last element of another var ,lets see what we get:

console.log("2" + 1 + 3);//here we have a sting starting so 'JS' changes the whole thing to a sting!!
console.log(2 + 1 + "3");//here we have first two elements of normal number so 'JS' do the arthematic operation and then just combine the output with the string which is prenent in the end!!
