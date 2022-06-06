let browserType = 'mozilla';
browserType[0]; // output ‘m’
console.log(browserType)



var vegetables ={
    veg1:"potato",
    veg2:"brinjal",
    veg3:"bottle gourd"
 }
  
 var vegetable1= vegetables.veg1;
 var vegetable2= vegetables.veg2;
 var vegetable3= vegetables.veg3;
 
 
 console.log(vegetable1);
 console.log(vegetable2);
 console.log(vegetable3);
  
 //output:
 // potato
 // brinjal
 // bottle gourd

 //JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

