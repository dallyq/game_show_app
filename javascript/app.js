// ADD NEEDED VARIABLES
// get the element with the id of qwerty and save it to a variable FOR LETTER BUTTONS
const qwerty = document.getElementById("qwerty");
// get the element with the id of phrase and save it to a variable FOR UNORDERED LIST (EMPTY)
const phrase = document.getElementById("phrase");
// get the element with the class of btn__reset and save it to a variable START GAME TEXT
const btnReset = document.getElementsByClassName("btn__reset");
// create a missed variable, initialized to 0, that you'll use later to
// keep track of the no of guesses the player has missed - 5 wrongs &
// they lose GUESSES COUNTER
let missed = 0;


// CREATE AN ARRAY NAMED PHRASES
// store at least 5 strings that contain only letters & spaces, with
// no punctuation THIS IS WHAT PEOPLE WILL BE GUESSING
const phrases = [
    "Joey Tribbiani",
    "Pheobe Buffay",
    "Chandler Bing",
    "Monica Geller",
    "Rachel Green",
    "Ross Geller"
];


// ATTACH AN EVENT LISTENER TO THE "START GAME" BUTTON TO HIDE THE START
// SCREEN OVERLAY (THIS STARTS GAME)
const startButton = document.querySelector(".btn__reset");
// add the event listener to the variable you created for the btn__reset HAPPENS WHEN CLICKED
startButton.addEventListener("click", (e) => {
// hide the overlay by changing its display property THIS REMOVES OVERLAY
  document.querySelector("#overlay").style.display = "none";
});


// CREATE A GETRANDOMPHRASEASARRAY FUNCTION
// create a function "stub", declare function & parameters, leave function
// blank. Add code comment to describe the purpose of function THIS MAKES THE SELECTED LETTERS RANDOM
function getRandomPhraseAsArray (phrases) {
  // This takes a random element from the phrases array create a variable 
  // to store a random number based on the length of the array RANDOMIZES
  const randomNum = Math.floor(Math.random() * phrases.length); 
  // use the variable to select an index inside of the array
  // return the array element at that index RETURNS RESULT OF FUNCTION
  return phrases[randomNum];  
}
  // after you create getRandomPhraseAsArray, you will need to 'call' it, 
  // & pass the phrases array to it THIS CREATES ARGUMENTS STORED INSIDE A VARIABLE
const randomPhrase = getRandomPhraseAsArray(phrases);


// CREATE AN ADDPHRASETODISPLAY FUNCTION
// get it to loop through an array of characters. You'll need to write it so 
// that it can take any array of letters and add it to the display THIS JUMBLES UP WHAT IS DISPLAYED ON PAGE
function addPhraseToDisplay (arr) {
    // inside the loop, for each character in the array: THIS LOOPS THROUGH THE ARRAY
    for ( let i = 0; i < arr.length; i++ ) {
    // create a list li item THIS CREATES A LIST ITEM
    const listItem = document.createElement("li"); 
    // put the character inside of the list item PUTS THE NAME OF CHARACTER IN LI
    listItem.textContent = `${arr[i]}`;
    // append that list item to the #phrase ul in your HTML THIS PUTS THE ARRAY INTO THE PHRASE ID
    document.getElementById("phrase").appendChild(listItem); 
    // if the character in the array is a letter and not a space, the function 
    // should add the class "letter" to the list item. if not, add "space" class
    if (arr[i] !== " ") {
      listItem.className = "letter"; // GETS STYLED AS A BLANK TILE
    } else {
      listItem.className = "space"; // GETS STYLED AS AN INVISIBLE/EMPTY GAP
    }
  }
};
// to use the function, you'll get the value returned by the getRandomPhraseAsArray,
// save it to a variable, and pass it to addPhraseToDisplay as an argument THIS GIVES
// THE ARRAY OF CHARACTERS TO LOOP THROUGH
addPhraseToDisplay(randomPhrase);


// CREATE A CHECKLETTER FUNCTION
// create a "stub" for the checkLetter function A STUB IS AN EMPTY FUNCTION TO START WITH
  // include a parameter in the function head for the button that gets clicked 
function checkLetter (e) {
// store all of the li elements in a variable inside checkLetter
  const liElements = document.querySelectorAll("li");
// create a variable to store if a match is found & give it an initial value 
// of null
  let matchFound = null;
// loop through all of the li elements
  for ( let i = 0; i < liElements.length; i++ ) {
    // create a conditional that compares the text of the button parameter to 
    // the text of the li at the current index of the loop
    if ( e.target.textContent === liElements[i].textContent )  {
      // - if they match, add the "show" class to the li
      liElements[i].className = "show";
      // - if they match, store the button to text in the match variable
      
    }
  }
  // once the loop completes, return the match variable
    return matchFound;
};


// ADD AN EVENT LISTENER TO THE KEYBOARD
// start by creating an event listener for the qwerty element that listens
// for the 'click' event
qwerty.addEventListener("click", function(e) {
// use a conditional to filter out clicks that don't happen on the buttons
// or if the button already has the "chosen" class
  if ( e.target.tagName === "BUTTON" && e.target.className !== "chosen" ) {
  // add the "chosen" class to the button that was pressed
    e.target.className = "chosen";
  // call the checkLetter function & store the results in a variable
    let resultss = checkLetter(e);
  // if the checkLetter function doesn't find a letter, remove one of the
  // heart images and increment the missed counter
    if ( resultss === null ) {
      document.querySelector('img').remove();
      missed +=1;
    }
  }
});


// CREATE A CHECKWIN FUNCTION
function checkWin () {
// create a variable to store the li elements that have the class name "letter"
  const liLetters = document.getElementsByClassName('letter');
// create a variable to store the li elements that have the class name "show"
  const liShow = document.getElementsByClassName('show');
// check if the length of the 2 variables are the same, if they are, display the
// win overlay
  if ( liLetters.length === liShow.length ) {
    // create the win overlay by adding the "win" class to the start overlay
    document.getElementById("overlay").className = "win";
    // change the headline text of the start overlay to show a person won
    document.getElementsByClassName("btn__reset")[0].textContent = "You won!";
    // change the display property of the overlay to "flex"
    document.getElementById("overlay").style.display = "flex";
// check if the missed counter is greater than 4. if they are, display the lose 
// overlay
  }
  if ( missed > 4 ) {
    // create the lose overlay by adding the "lose" class to the start overlay
    document.getElementsByClassName("start")[0].className = "lose";
    // change the headline text of the start overlay to show a person lost
    document.getElementsByClassName("btn__reset")[0].textContent = "You lost!";
    // change the display property of the overlay to "flex"
    document.getElementById("overlay").style.display = "flex";
  }
};


// EXTRA CREDIT
// Add a button to the "success" & "failure" screens that resets the game



