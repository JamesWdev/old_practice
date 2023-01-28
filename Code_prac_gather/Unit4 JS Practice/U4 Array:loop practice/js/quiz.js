//// 1. Create a multidimensional array to hold quiz questions and answers
//
//const completeQuiz = [
//  ['Does Linux Mint cost money?', 'no'],
//  ['What programming langauge contains the content of a webpage?', 'html'],
//  ['What programming langauge by default coordinates with HTML to style web pages?', 'css' ],
//  ['What company makes the most powerful tablet', 'apple']  
//];
//
//const correctQuestions = ['These are the questions you got right:', ],
//
//const wrongQuestions = ['These are the questions you got wrong:', ],
//
//
//// 2. Store the number of questions answered correctly
//let score = 0;
//
///* 
//  3. Use a loop to cycle through each question
//      - Present each question to the user
//      - Compare the user's response to answer in the array
//      - If the response matches the answer, the number of correctly
//        answered questions increments by 1
//*/
//
//function quizProcess(arr) {
//  for ( let i = 0; i < arr.length; i++ ){
//    let question = prompt(arr[i][0]);    
//    if  ( question.toLowerCase() === (arr[i][1]) ) {
//      score += 1;
//    }
//  }  
//  return score;
//}
//
//quizProcess(completeQuiz);
//
//
//// 4. Display the number of correct answers to the user
//
//document.querySelector('main').innerHTML = `<h1>You answered ${score}/${completeQuiz.length} questions correctly!</h1>`
//
////you could also do this for this last part^
////let html = `<h1>You answered ${score}/3 Correct!</h1>`
////document.querySelector('main').innerHTML = html;
//***********************************************************PART 2*******************

const completeQuiz = [
  ['Does Linux Mint cost money?', 'no'],
  ['What programming langauge contains the content of a webpage?', 'html'],
  ['What programming langauge by default coordinates with HTML to style web pages?', 'css' ],
  ['What company makes the most powerful tablet?', 'apple']  
];

let score = 0;
const correctQuestions = [ ];
const wrongQuestions = [ ];      

function quizProcess(arr) {
  for ( let i = 0; i < arr.length; i++ ){
    let question = prompt(arr[i][0]);    
    if  ( question.toLowerCase() === (arr[i][1]) ) {
      score += 1;
      correctQuestions.push(`<li>${arr[i][0]}</li>`);    
    }else{ wrongQuestions.push(`<li>${arr[i][0]}</li>`)}
  }  
  return score;
}
quizProcess(completeQuiz);
document.querySelector('main').innerHTML = `<h1>You answered ${score}/${completeQuiz.length} questions correctly!</h1><br>
                                            <h2>You got these questions right:</h2><br>  
                                            <ul> ${correctQuestions.join(' ')} </ul><br>
                                            <h2>You got these questions wrong:</h2><br>  
                                            <ul> ${wrongQuestions.join(' ')} </ul>`





