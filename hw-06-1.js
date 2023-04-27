//   TASK 1
// const list = document.querySelectorAll('.item');
// console.log('Number of categories:', list.length);

// const title = document.querySelectorAll('h2');

// title.forEach(function (element, index) {
//     console.log(`Category: ${element.innerText}
// Elements: ${index}`);
// })

 
//  TASK 2
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const listEl = document.createElement('li');
// const list = document.querySelector('#ingredients');
// console.log(list);
// list.appendChild(listEl);
// const listText = ingredients.map(ingredient => `<li class = 'item'> ${ingredient}</li>`).join('');
// list.innerHTML = listText;


//TASK 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('.gallery');

// images.forEach(({ url, alt }) => {
//   const li = document.createElement('li');
//   const image = document.createElement('img');
//   // image.classList.add('item-3');
//   image.style.width = '400px';
//   image.src = url;
//   image.alt = alt;
//   li.append(image);
//   console.log(li);
//   gallery.append(li);
// })

// const markup = images.map(({ url, alt }) => {
//   const li = document.createElement('li');
//   const image = document.createElement('img');
//   // image.classList.add('item-3');
//   image.style.width = '400px';
//   image.src = url;
//   image.alt = alt;
//   li.append(image);
//   // console.log(li);
//   // gallery.append(li);
//   return li;
// });
// gallery.append(...markup);
// console.log(markup);

const markup = images.map(
  ({ url, alt }) =>
    `<li><img src="${url}" alt="${alt}" class = 'item-3'></li>
    `).join('');
console.log(markup);
gallery.insertAdjacentHTML('beforeend', markup)

// TASK 4

// TASK 5
// const title = document.querySelector('#name-output');


//TASK 6
//TASK 7
//TASK 8
//TASK 9
//TASK 10



