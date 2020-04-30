
let name = prompt("What is your name");
let age = Number(prompt("Hello "+name + " How old are you?")) // expect number value
 if(isNaN(age)) {
     alert("Just type number");
     age = Number(prompt("Hello "+name + " How old are you?"))
  } else {
   alert("Awesome "+name + "your are " +age + "years old" );
 }



