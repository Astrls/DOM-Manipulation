/*
*/

const LEARNERS = ['Prince', 'Alizee', 'John', 'Jean-louis', 'Georgi', 'Walid', 'Oana', 'Louis'];
// addSection = document.createElement('section');

// learnerArr.forEach((learnerArr) => {
//     addSection;
//     document.createElement('p');
// });



  
// for (i = 0; i < LEARNERS.length; i++) {
//     let addElement = document.createElement("section")
//     let addContent = document.createTextNode(String(LEARNERS[i]));
//     addElement.appendChild(addContent);
//     let CURRENT_DIV = document.querySelector("article");
//     document.body.insertBefore(addElement,CURRENT_DIV);
// };

// let addElement = document.createElement("section")
// let addContent = document.createTextNode(String(LEARNERS[0]));
// addElement.appendChild(addContent);
// let CURRENT_DIV = document.querySelector("article");
// document.body.insertBefore(addElement,CURRENT_DIV);

// document.createElement("section").appendChild("test");
// document.insertBefore('section', document.querySelector("article"))


const section = document.querySelector("article").appendChild(document.createElement("section"));

