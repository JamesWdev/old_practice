//THIS IS MY VERSION OF THIS PROGRAM

/*

let correctAnswerHTML = 0;
let correctAnswerCSS = 0;
let correctAnswerJavaScript = 0;
let correctAnswerLinux = 0;
let correctAnswerNode = 0;

correctAnswerHTML = prompt('What is HyperText Markup Language abbreviation?')
correctAnswerCSS = prompt('What is the primary language for styling websites?')
correctAnswerJavaScript = prompt('What is primary langauge for website behavior?')
correctAnswerLinux = prompt('What is the most common operating system outside of Mac and Windows?')
correctAnswerNode = prompt('What is the name of the major JavaScript based platform that can run servers?')

if ( correctAnswerHTML.toUpperCase() === 'HTML' ) {
  correctAnswerHTML = 1;
} else {
  correctAnswerHTML = 0
}

if ( correctAnswerCSS.toUpperCase() === 'CSS' ) {
  correctAnswerCSS = 1;
} else {
  correctAnswerCSS = 0;
}

if ( correctAnswerJavaScript.toUpperCase() === 'JAVASCRIPT' ) {
correctAnswerJavaScript = 1;
} else {
  correctAnswerJavaScript = 0;
}

if ( correctAnswerLinux.toUpperCase() === 'LINUX' ) {
  correctAnswerLinux = 1;
} else {
  correctAnswerLinux = 0;
}

if ( correctAnswerNode.toUpperCase() === 'NODE' ) {
  correctAnswerNode = 1;
} else {
  correctAnswerNode = 0;
}


console.log(correctAnswerHTML)  
console.log(correctAnswerCSS)  
console.log(correctAnswerJavaScript)
console.log(correctAnswerLinux)
console.log(correctAnswerNode)

let totalScore = correctAnswerHTML + correctAnswerCSS + correctAnswerJavaScript + correctAnswerLinux + correctAnswerNode;

console.log(totalScore);

if ( totalScore === 5 ) {
  document.querySelector('main').innerHTML = `<h1>5/5 correct! <br> You earned a gold medal!</h1>`;
} else if ( totalScore === 4 ) {
  document.querySelector('main').innerHTML = `<h1>4/5 Correct! <br> You earned a silver medal!</h1>`;
} else if ( totalScore === 3 ) {
  document.querySelector('main').innerHTML = `<h1>3/5 Correct! <br> You earned a silver medal!</h1>`;
} else if ( totalScore === 2 ) {
  document.querySelector('main').innerHTML = `<h1>2/5 Correct! <br> You earned a bronze medal!</h1>`;
} else if ( totalScore === 1 ) {
  document.querySelector('main').innerHTML = `<h1>1/5 Correct! <br> You earned a bronze medal!</h1>`;
} else {
  document.querySelector('main').innerHTML = `<h1>Wow......interesting...</h1>`
}

*/

//THIS IS TREEHOUSES VERSION OF THE SAME PROGRAM***********************************************


/* 
  1. Store correct answers       /*Storing in this case means putting it into a variable.  Remember variables function literally like containers of data.
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player

let rank;  /*Value was not assigned yet.  It will come later.  The value of this variable will be a string so: let rank = '' is valid too.*/

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers  
*/

const answer1 = prompt("Name a programming language that's also a gem.");
if ( answer1.toUpperCase() === 'RUBY' ){
  correct += 1;
}

const answer2 = prompt("Name a programming language that's also a snake.");
if ( answer2.toUpperCase() === 'PYTHON' ) {
  correct +=1;
}
 
const answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
  correct += 1;
}

const answer4 =  prompt("What language do you use to build the structure of web pages?")
if ( answer4.toUpperCase() === 'HTML' ) {
  correct += 1;
}

const answer5 =  prompt("What language do you use to add interactivity to a web page?")
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
  correct += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correct === 5 ) {
  rank = "Gold";
} else if ( correct >= 3 ) {
  rank = "Silver";
} else if ( correct >= 1 ) {
  rank = "Bronze";
} else {
  rank = "None :(";
}


// 6. Output results to the <main> element


main.innerHTML = `
<h2>You got ${correct} out of 5 questions correct.<h2/>
<p>Crown earned: <strong>${rank}</strong></p>
`;




