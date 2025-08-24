let button = document.createElement("button");
button.innerText="Click me";
button.style.color="white";
button.style.backgroundColor ="blue";
document.querySelector("body").prepend(button);

let paragraph = document.querySelector("p");
// paragraph.setAttribute("class", "newClass"); thisremoves attributes of previous class, all of them. IF we need to add another class we sue classList
paragraph.classList.add("newClass");
