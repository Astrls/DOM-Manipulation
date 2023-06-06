/*
 */

console.log(document.querySelectorAll(".important"));

let elem = document.querySelectorAll(".important");

elem.forEach((elem) => {
  elem.title = "This is an important item";
});

let image = document.querySelectorAll("img");

// Hide images that don't match the "important" class
image.forEach((image) => {
  if (image.className != "important") {
    image.style.display = "none";
  }
});

// Same function with a for loop
for (i = 0; i < image.length; i++) {
  if (image[i].className != "important") {
    image[i].style.display = "none";
  }
}


let pGraph = document.querySelectorAll("p");

pGraph.forEach((pGraph) => {
  if (pGraph.className) {
    console.log(pGraph.className);
    console.log(pGraph.textContent);
  } else {
    console.log(pGraph.textContent);
  }
});
