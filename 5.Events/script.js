const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

//My Code

// Setting global variables
const list = document.querySelector("ul");
const getRandomColor = () => ('#' + parseInt(Math.random() * 0xffffff).toString(16));


// Event Listener function that duplicates squares and log them with a timer
const duplicateSquare = document.addEventListener("click", (event) => {
  if (event.target.classList.contains("actionsquare")) { // condition to only work on the squares
    let newSquares = document.querySelector(".displayedsquare-wrapper");
    let color = event.target.className.split(" ")[1]; //getting the color of the square
    const div = document.createElement("div"); //creates a new div

    //assigns classes to the created div
    div.classList.add(color);
    div.classList.add("displayedsquare");

    //appends the div to the right container
    newSquares.appendChild(div);

    //Creates a log entry
    const itemLog = document.createTextNode(
      `[${getElapsedTime()}] Created a new ${color} square`
    );
    //Creates a list item
    const listItem = document.createElement("li");

    // append the log to the list item and the list item to the list
    listItem.appendChild(itemLog);
    list.appendChild(listItem);
  }
});


// Event listener function that changes the color of the background of the page and logs it when spacebar is hit
const changeBg = document.addEventListener("keypress", (event) => {

  // Condition for pressing the space bar
  if(event.code == "Space"){

   // Changes the bg color 
  document.body.style.backgroundColor = getRandomColor();

   //Creates a log entry
  const itemLog = document.createTextNode(
    `[${getElapsedTime()}] Pressed the space bar and changed the background color`
  );
  //Creates a list item
  const listItem = document.createElement("li");

  // append the log to the list item and the list item to the list
  listItem.appendChild(itemLog);
  list.appendChild(listItem);
  }
})


// Event listener function that clears the log when the I key is pressed
const deleteLog = document.addEventListener("keypress", (event) => {
  if(event.code == "KeyI"){
    while (document.querySelectorAll("li").length > 0) {
      document.querySelector("li").remove();
    }
  }
})

// Event listener function that clears the created squares when the S key is pressed
const deleteSquares = document.addEventListener("keypress", (event) => {
  if(event.code == "KeyS"){
    while (document.querySelectorAll(".displayedsquare-wrapper .displayedsquare").length > 0) {
      document.querySelector(".displayedsquare-wrapper .displayedsquare").remove();
    }
  }
})