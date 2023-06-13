const list = document.querySelector("ul");
let indexNodes = document.querySelector("ul").childNodes;

indexNodes.forEach((child) => {
  if (child.nodeType === 1) {
    if (child.textContent == "Fast and Furious") {
      list.insertBefore(child, list.firstChild);
      child.classList.add("important");
    }
  }
});

indexNodes.forEach((child) => {
    if (child.nodeType === 1 && child.textContent) {
      if (child.textContent == "Fast and Furious") {
        list.insertBefore(child, list.firstChild);
        child.classList.add("important");
      }
    }
  });

for (i = 0; i < indexNodes.length; i++) {
  for (j = 0; j < indexNodes.length; j++)
    if (indexNodes[i].nodeType === 1 && i !== j) {
      if (indexNodes[i].isEqualNode(indexNodes[j])) {
        list.removeChild(indexNodes[j]);
      }
    }
}

list.addEventListener("click", (e) => {
  if (e.target.className == "important") {
    alert(
      "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
    );
  } else {
    alert(e.target.textContent);
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.code == "KeyR") {
    for (i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[(Math.random() * i) | 0]);
      indexNodes.forEach((child) => {
        if (child.nodeType === 1) {
          if (child.textContent == "Fast and Furious") {
            list.insertBefore(child, list.firstChild);
          }
        }
      });
    }
  } else if (e.code == "KeyD") {
    let newFf = list.firstChild.cloneNode(true);
    list.appendChild(newFf);
  }
});

let newDiv = document.createElement("div");
document.body.insertBefore(newDiv, list);

let newSelect = document.createElement("select");
newDiv.appendChild(newSelect);

newSelect
  .appendChild(document.createElement("option"))
  .appendChild(document.createTextNode("normal franchises"));
newSelect
  .appendChild(document.createElement("option"))
  .appendChild(document.createTextNode("important franchises"));

const select = document.querySelector("select");


select.addEventListener("change", (e) => {
  if (e.target.value == "important franchises") {
    for (i = 0; i < document.querySelectorAll("ul").length; i++) {
      document.querySelectorAll("ul")[i].style.visibility = "hidden";
      document.querySelectorAll(".important")[i].style.visibility = "visible";
    }
  } else {
    for (i = 0; i < document.querySelectorAll("ul").length; i++) {
      document.querySelectorAll("ul")[i].style.visibility = "visible";
    }
  }
});
