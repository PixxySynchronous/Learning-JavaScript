//Make multiplication arrow function

const multiplication = (a, b) => {
    return a * b;
}

let ans = multiplication(2, 3);
console.log(ans);

//make a function which takes in astring and returns the number of vowels present in it 

function vowelcounter(string) {
    let counter = 0;
    for (let i of string) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            counter++;
        }
    }
    return counter;
}

let ANS = vowelcounter("abcde");
console.log(ANS);

//arrow function doing the same task

const arrowcounter = (string) => {
    let counter = 0;
    for (let i of string) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            counter++;
        }
    }
    return counter;
}
console.log(arrowcounter("aeiou"));

//Using for each and using arrow function as a callback function in it 

let arr = ["Delhi", "mumbai", "goa"];
arr.forEach(val => console.log(val.toUpperCase()));

arr.forEach((val) => {
    console.log(val.toLowerCase());
});
console.log(arr);
/*for better understanding if seeing in revision:
no () are required if there is only one parameter present inthe arrow function and hence the val parameter which wouldve been written like this: arr.forEach((val)=>{
console.log(val.toUppercase());}); is written like that. If arrow function is one liner, that one line is returned automatically as well so we dont need a return statement.*/

//Print a sqaure of each number in the array 

let unsquared = [1,2,4,5,6,7,8,9];
unsquared.forEach(x=>console.log(x*x));
console.log(unsquared); //no changes in the array via forEach therefore we can use map function to make a sep arr.


//Map function

let newArr = unsquared.map(x=>x*x);
console.log(newArr);

//Filter out marks above 90

let marks = [90,91,99,82,34];
let marksabove90 = marks.filter(val=>val>90);
console.log(marksabove90);

//take input of a number. make an array from 1-number. Use reduce methid to find sum and calc product of all numbers. 

let number = prompt("enter number");
let array=[];
for (let i=1;i<=number;i++){
     array[i-1]=i;
}
const sum = array.reduce((result,current)=>{
    return result+current;
});
console.log(sum);
const multi = array.reduce((result,current)=>{
    return result;
});
console.log(multi); 