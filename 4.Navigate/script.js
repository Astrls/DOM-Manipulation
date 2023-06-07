//EX 1

const ol = document.querySelector("ol");
const li5 = ol.children[4];
const li1 = ol.children[0]

ol.insertBefore(li5,li1)

//EX 2

// Selecting elements and naming titles for clarity
const titles = document.querySelectorAll("h2");
const second = titles[2];
const third = titles[1];
const sections = document.querySelectorAll("section");
const sneakyDiv = document.querySelector("div");
const pGraphs = document.querySelectorAll("p");

// Moving titles
sneakyDiv.appendChild(third);
sneakyDiv.insertBefore(third,pGraphs[4]);

sections[1].appendChild(second);
sections[1].insertBefore(second, pGraphs[3]);


//EX 3

bye = document.querySelector("footer")
bye.remove();