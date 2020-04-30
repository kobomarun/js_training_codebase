
let name = prompt("What is your name");
let age = 
(prompt("Hello "+name + " How old are you?")) // expect number value

 if(isNaN(age)) {
     alert("Just type number");
     age = Number(prompt("Hello "+name + " How old are you?"))
     alert("Sorry, we can talk")
  } else {
   alert("Awesome "+name + "your are " +age + "years old" );
 }



