// Declaring variables 
let nameField = document.getElementById("firstname");
let ageField = document.getElementById("age");
let nameSpan = document.getElementById("display-firstname");
let hardTruth = document.getElementById("a-hard-truth");
let pWord = document.getElementById("pwd");
let pWconfirm = document.getElementById("pwd-confirm");
let darkToggle = document.getElementById("toggle-darkmode");
let dark = darkToggle.firstChild;
let light = darkToggle.lastChild;

// When a key is released, check the key input and display the name typed in (remove a letter when using backspace)
nameField.addEventListener("keyup", (event) => {
  if (event.code != "Backspace") {
    nameSpan.innerText = nameSpan.innerText + event.key;
  } else if (event.code == "Backspace") {
    nameSpan.innerText = String(nameSpan.innerText.slice(0, -1));
  }
});



// Verifying age to display a message
ageField.addEventListener("keyup", (event) => {
  if (parseInt(event.target.value) >= 18) {
    hardTruth.style.visibility = "visible";
  } else {
    hardTruth.style.visibility = "hidden";
  }
});


// Verifying if the password is equal or longer than 6 letters
pWord.addEventListener("keyup", (event) => {
    //if no password -> box is white
  if (event.target.value.length == 0) {
    pWord.style.backgroundColor = "white";
    //if shorter than 6 letters -> box is red
  } else if (event.target.value.length < 6) {
    pWord.style.backgroundColor = "red";
  }//if equal or lonfer than 6 letters -> box is white again
  else if (event.target.value.length >= 6) {
    pWord.style.backgroundColor = "white";
  }//logging the text content to use for check with the verify password box
  pWord.textContent = pWord.textContent + event.key;
});

// Turning verify password box red when the password doesn't match
pWconfirm.addEventListener("keyup", (event) => {
    let pwContent = pWord.value; //declaring variable for the content of the first pw box
    //if not equal to password -> box is red
  if (event.target.value != pwContent) {
    pWconfirm.style.backgroundColor = "red";
    //if equal to password -> box is white
  } else if (event.target.value == pwContent) {
    pWconfirm.style.backgroundColor = "white";
  }
});

darkToggle.addEventListener("change", (event) => {
    if (event.target.value == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else if(event.target.value == "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})