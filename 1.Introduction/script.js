/*
*/

console.log(document.title);

document.title = "Modifying the DOM";

console.log(document.title);

document.body.style.backgroundColor = "#FF69B4";

document.body.style.backgroundColor = "rgb(123,211,13)"

for (children of document.body.children) {
    console.log(children);
}