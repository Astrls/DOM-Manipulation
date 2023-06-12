// List of learners in my group
const LEARNERS = [
  "Prince",
  "Alizee",
  "John",
  "Jean-louis",
  "Georgi",
  "Walid",
  "Oana",
  "Louis",
  "Glaucielle",
  "Zuzana",
  "Adam",
  "Ignace",
  "Camila",
  "Safa",
  "Raad",
  "Aziza",
  "Florentina",
  "Lucie",
  "Francesca",
  "Leila",
  "Noah",
  "Athi",
  "William",
  "Antoine",
  "Antoine"
];

// Randomizing the list
const RANDOMLEARNERS = LEARNERS.sort((a, b) => 0.5 - Math.random());

// Loop to create a new section for each learner, with a paragraph nested inside with the name of the learner
for (i = 0; i < RANDOMLEARNERS.length; i++) {
  const newP = document.createElement("p");
  const newText = document.createTextNode(String(RANDOMLEARNERS[i]));
  document
    .querySelector("article")
    .appendChild(document.createElement("section"))
    .setAttribute("id", `${i}`);
  document.getElementById(`${i}`).appendChild(newP);
  newP.appendChild(newText);
}

// Selecting all the paragraphs 
let para = document.querySelectorAll("p");

// Creating a random HSL value and applying it to the background color for each learner
para.forEach((para) => {
  const H = Math.floor(Math.random() * 360);
  const S = Math.floor(Math.random() * 100);
  const L = Math.floor(Math.random() * 100);

  colorBg = `HSL(${H},${S}%,${L}%)`;
  para.style.backgroundColor = colorBg;
  para.setAttribute("id", `${colorBg}`);

  if (L < 50) { // Condition to apply black or white text to the paragraph depending on the lightness of the HSL value
    para.style.color = "white";
  } else {
    para.style.color = "black";
  }
});

