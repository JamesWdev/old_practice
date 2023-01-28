// Collect input from a user


// Convert the input to a number


// Use Math.random() and the user's number to generate a random number


// Create a message displaying the random number
//Random Number Generator Limit:

/*

alert('Welcome to the random number generator!!!')

const inputNumber = +prompt('Please enter the highest number in the Random Number Generator!')
console.log(inputNumber)

if (inputNumber) {
  randomNumber = Math.floor( Math.random() * inputNumber ) + 1;
console.log(randomNumber)

alert(`The random number between 1 and ${inputNumber} is ${randomNumber}!`);
} else {
  console.log('Please enter a NUMBER.....') & alert('Please enter a NUMBER.....');
}

*/


//
//alert('Welcome to the random number generator!!!')
//
//const lowestInput = +prompt('Please enter the lowest number in the Random Number Generator!')
//console.log(lowestInput)
//
//const highestInput = +prompt('Please enter the highest number in the Random Number Generator!')
//console.log(highestInput)
//
//const lowestNumber = parseInt(lowestInput);          /*This is needed if you want to remove all the decimals from the final message.*/ 
//const highestNumber = parseInt(highestInput);  
//
//const numberSum = highestNumber - lowestNumber + 1;       *The plus is one becuase the Math.floor will always round down one number in this equation*/
//console.log(numberSum)
//
//if (numberSum) {
//  randomNumber = Math.floor( Math.random() * numberSum) + lowestNumber; 
//console.log(randomNumber)
//
//alert(`The random number between ${lowestNumber} and ${highestNumber} is ${randomNumber}!`);
//} else {
//  console.log('Please enter a NUMBER.....') & alert('Please enter a NUMBER.....');
//}


/*Treehouse method ****************************************/


const inputLow = prompt('Please provide your lowest number');
const inputHigh = prompt('Please provide your highest number');

// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

// Check if lowNumber OR highNumber is not a number
if ( isNaN(lowNumber) || isNaN(highNumber) ) {
  console.log('You need to provide two numbers. Try again.');
} else {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
}






