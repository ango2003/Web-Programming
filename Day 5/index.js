/*
console.log("Hello World");
console.log("The answer is "+42);
alert("Message!"); // Single line comment

let level = 23;
let accuracy = 0.99;
let name = "Pikachu";
let temp = [55, 60, 57, 5]; // Array

let isValid = "hello!";
const BEST_CLASS="CS3163";
BEST_CLASS="CS3163"; // Error

let credit = 5 + 4 + (2*3);

*/

// Strings

let names = "Aaron Ngo";
let fName = names.substring(0, names.indexOf(" "));
let len = fName.length;
console.log(len);

/* Loops and Conditions */

function mystery(a,b){
    if (a > b){
        return 0;
    }else{
        let result = 0;
        for (let i=0;i<=b; i++)
        {
            result+=i;
        }
        return result;
    }
}

console.log(mystery(4,6));

while(condition){
    console.log("While loop");
}
do{
    statements;
} while(conditions);

/* Arrays */

let name = ["Earth", "Water", "Fire"];
let array=[]; //[]
name[0] = "Hello";
name[2] = " My";

array.push("Aaron");
array.unshift("Tyler");
array.pop(); //Delete last element
array.sort();
