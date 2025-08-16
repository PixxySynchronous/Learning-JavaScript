//Make an array for marks of studetns and output its average. 

let marks = [34,55,67,34,53,46];
let sum=0;
for (let mark in marks){
    sum+=marks[mark]; 
    console.log (sum);
}
let average = sum/marks.length;
console.log (average);

//For a given array which stores prices of items, all items have 10% off. Change array to store the final prices. 

let price= [250,645,300,900,50];
let discount =.10;
for (let i in price){
    price[i]=(1-discount)*price[i];
}
console.log (price); 

//Create an array and remove first element, replace an element and add an element at the end

let company = ["Bloomberg", "Microsoft" , "uber", "google", "IBM", "Netflix"]; 

company.shift(); //removes and returns first elemnt 
console.log(company); 
 
company.splice(1,1,"ola");//since uber will be at index 1 after shift()
console.log(company); 

company.push("Amazon");
console.log(company); 
