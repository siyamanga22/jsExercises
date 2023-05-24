// NUMBER 1,2,3,4.
//  variable It is a placeholder where we can temporarily store a value.
//  Value is Data that was saved on a specific variable. 
//  Datatype The variables nature, or what kind of data are we going to store in our variable. 
//  Initialisation Is the act of creating a variable and assigning a value at the same time.

// NUMBER 5.
// DIFFERENCE BETWEEN let,VAR &CONST
// var : After you've declared it, you can keep assigning different values to
// it, which is totally wrong. var is an abbreviation for a variable.
//  let reinforces the scope of a variable, which means that once a variable is
// declared, JavaScript will create its reference in our memory (RAM) as a
// container, and when we are done using it, it will be removed or deleted from
// memory.
// const: Once we create a variable using const, that means we don’t want to
// change its value, and we need to make sure that the variable has a value.
// Otherwise, we will get an error.

// NUMBER 6.
// What is a scope of a variable?
// Variable Scope in C – Local and Global Scope Explained
// In simple terms, scope of a variable is its lifetime in the program. This means that the scope of a variable is the block of code in the entire program where the variable is declared, used, and can be modified.

// NUMBER 7.
// For Loop: A for loop is an iteration method that is best used when you know the number of iterations ahead of time. It’s always followed by the initialization, expression and increment statements.
// While Loop: A while loop is an iteration method that is best used when you don't know the number of iterations ahead of time. The contents of the loop are executed as long as the expression evaluates to true.
// use forEach only and only if you want to process all elements in the array. Use while loop, when you want the iteration to stop once some condition is met and for loop for anything else.

// NUMBER 8.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

let name = "Siyamanga"
function fullname(){
    console.log(name);
    
}
fullname();

// QUESTION 2 

let person2 ={
    firstName: 'Siyamanga',
    lastName: 'Zweni',
    Age: 22,
   
   
}
let Subjects=['CSS','HTML','BOOTSTRAP','JS']
let Address={
    name: 'GroundWork',
    streetNumber: 05,
    surbub: 'BlueDowns',
    city: 'CPT',
    Country: 'SA',
}
function fullDetails (){
    console.log( "these are my details", person2 , "i did the following subjects", Subjects, "Here is my address", Address);
}
fullDetails();


// QUESTIO N3
let numb1 =document.querySelector('#firstValue')
let operator=document.querySelector('#secondValue')
let numb2=document.querySelector('#3rdValue')
let bmi=0;
let result= document.querySelector('#Answer')
let val =true

//operator
function displayResult() {
    let number1 = document.getElementById("number1").value;
    let operator = document.getElementById("operator").value;
    let number2 = document.getElementById("number2").value;
    let result = "Number 1: " + number1 + "<br>Oparetor: " + operator + "<br>Number 2: " + number2;
    document.getElementById("lblResult").innerHTML = result;
  }
  let btnResult = document.getElementById("btnResult");
  btnResult.addEventListener("click", displayResult);