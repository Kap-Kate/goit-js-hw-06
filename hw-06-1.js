//   TASK 1
const list = document.querySelectorAll('.item');
console.log('Number of categories:', list.length);

const title = document.querySelectorAll('h2');
title.forEach(function (element, number) {
    console.log(`Category: ${element.innerText}
Elements: ${number}`);
})
 
//  TASK 2




