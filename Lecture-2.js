//Get user input and check if number div by 5. 

let number = prompt ("Enter a number");
if(number%5===0){
    alert ("The number is divisible by 5");
}
else 
    // alert ("The number" , number, "is not divisible by 5");
    alert ("The number " + number + " is not divisible by 5");


    //console log prints all arguments so the first alert if written in console log would work properly, however the same doesnt work in alert as that only prints the first argument and hence we need to use the + operator.  

//Problem 2: write a program which assigns grades to students 

let marks = prompt("Enter your marks");
if (marks >= 90) {
    alert("Grade A");
} else if (marks >= 80) {
    alert("Grade B");
} else if (marks >= 70) {
    alert("Grade C");
} else {
    alert("Grade D");
}