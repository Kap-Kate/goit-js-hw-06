//   TASK 1
const list = document.querySelectorAll('.item');
console.log('Number of categories:', list.length);

const title = document.querySelectorAll('h2');
title.forEach(function (element, index) {
    console.log(`Category: ${element.innerText}
Elements: ${index}`);
})
 
//  TASK 2
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const list = document.createElement('li');
// console.log(list);
// list.textContent = 'Potatoes';
// list.className = 'item';
// const listText = ingredients.map(ingredient => `<li class='item'> ${ingredient}</li>`).join('');
// list.innerHTML = listText;


// const list = document.createElement('li');
// console.log(list);
// list.textContent = 'Potatoes';
// list.className = 'item';
// const listText = ingredients.map(ingredient => ingredient.toLowerCase()).join(' ');
// console.log(listText);
// list.appendChild(document.createTextNode(''));
// document.querySelector('#ingredients').appendChild(list);
// console.log(list);

//TASK 3
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];


// TASK 5
// const title = document.querySelector('#name-output');




