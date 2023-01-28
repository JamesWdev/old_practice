/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

//Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Call the function and pass it different values

//function randomNumberGenerator(lower, upper) {  
//  const randomNumber =  Math.floor(( Math.random() * (upper - lower +1) ) + lower);
//  return  alert(randomNumber);  
//}

//randomNumberGenerator = (lower, upper = 100) => Math.floor(( Math.random() * (upper - lower +1) ) + lower);
//alert(randomNumberGenerator(3, 300))
//console.log( `${randomNumberGenerator(10, 100)} is a random number between 10 and 100!` )

function randomNumberGenerator(lower, upper) {  
  
  if ( isNaN(lower) || isNaN(upper) ) {
    throw Error('Both arguments must be numbers.')
  }  
  return Math.floor(( Math.random() * (upper - lower +1) ) + lower);
}

alert(randomNumberGenerator(3, 300))
console.log( `${randomNumberGenerator(10, 100)} is a random number between 10 and 100!` )
console.log ( randomNumberGenerator(200, 'three hundred') )   /*Keep in mine that this will generate a real custom error*/
