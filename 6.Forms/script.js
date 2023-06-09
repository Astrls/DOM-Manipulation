//Add a keyup listener on the first input field, so that once you type a letter in this field,
//it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

let nameField = document.getElementById("firstname");
let ageField = document.getElementById("age");
let nameSpan = document.getElementById("display-firstname");
let hardTruth = document.getElementById("a-hard-truth");
let pWord = document.getElementById("pwd");
let pWconfirm = document.getElementById("pwd-confirm");

console.log(nameField);

nameField.addEventListener("keyup", (event) => {
  if (event.code != "Backspace") {
    nameSpan.innerText = nameSpan.innerText + event.key;
  } else if (event.code == "Backspace") {
    nameSpan.innerText = String(nameSpan.innerText.slice(0, -1));
  }
});



// Pasword stuff

ageField.addEventListener("keyup", (event) => {
  if (parseInt(event.target.value) >= 18) {
    hardTruth.style.visibility = "visible";
  } else {
    hardTruth.style.visibility = "hidden";
  }
});

pWord.addEventListener("keyup", (event) => {
  if (event.target.value.length == 0) {
    pWord.style.backgroundColor = "white";
  } else if (event.target.value.length < 6) {
    pWord.style.backgroundColor = "red";
  }
  else if (event.target.value.length >= 6) {
    pWord.style.backgroundColor = "white";
  }
});

let pwContent = pWord.textContent;

pWconfirm.addEventListener("keyup", (event) => {
  if (event.target.value != pwContent) {
    pWconfirm.style.backgroundColor = "red";
  } else if (event.target.value == pwContent) {
    pWconfirm.style.backgroundColor = "white";
  }
});
