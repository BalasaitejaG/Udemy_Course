// var name="balasaiteja";
// var length=name.length;
// console.log(length);

// console.log(name.slice(0,3))
// console.log(name.slice(0,6))
// console.log(name.slice(0,10))
// console.log(name.slice(0,11))
// console.log(name.slice(0,15))



//slice the paragraph that is greater than 180 characters

var paragraph="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For ";
var length=paragraph.length;
console.log(length);
if(length>=200){
    console.log(paragraph.slice(0,180));
}
else{
    console.log("You have "+paragraph.length+" characters in the paragraph");
}
