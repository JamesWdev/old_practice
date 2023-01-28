/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pet = [
  { name: 'Dave', type: 'dog', breed: 'aussie', age: 'Age: 3', photo: 'aussie.jpg' },
  { name: 'Billy', type: 'dog', breed: 'dachshund', age: 'Age: 2', photo: 'dachshund.jpg' },
  { name: 'Jim', type: 'dog', breed: 'golden', age: 'Age: 5', photo: 'golden.jpg' },
  { name: 'Peter', type: 'cat', breed: 'persian', age: 'Age: 1', photo: 'persian.jpg' },
  { name: 'Bob', type: 'dog', breed: 'pug', age: 'Age: 7', photo: 'pug.jpg' },
  { name: 'Sasha', type: 'cat', breed: 'tabby', age: 'Age: 4', photo: 'tabby.jpg' }

];

let html = ''

for ( let i = 0; i < pet.length; i++) {    //you could of just put these vaules in the template literals rather than creating variables.
  let name = pet[i].name;
  let type = pet[i].type;  
  let breed = pet[i].breed;
  let age = pet[i].age;
  let photo = pet[i].photo;    

  html += `
    <h2>${name}</h2>
    <h3>${type} | ${breed}</h3>
    <p>${age}</p>
    <img src="../img/${photo}" alt="Picture of ${breed} ${type} named ${name}">
  `
}

document.querySelector('main').innerHTML = html;

//document.querySelector('main').insertAdjacentHTML('beforeend', html);

//////////////////////////////////////////////////////////////////////////The code above^ is my solution.  

