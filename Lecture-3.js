//Print all even numbers from 0-100

for (let i=0;i<=100;i++){
    if (i%2==0)
        console.log(i);
}

//Guess the number game 

let number=9;
let guessed=false;
while (!guessed){
   let guess=  prompt("Guess the number");
   if (guess==number){
       alert ("correct");
       guessed=true;
   }
   else 
    alert ("wrong, guess again");
}

//Prompt for name then output username=@name+name.length

let name = prompt ("Enter your name");
let username = `@${name}${name.length}`;
alert(username); 