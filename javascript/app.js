// Add needed variables
// get the element with the id of qwerty and save it to a variable
const qwerty = document.getElementById("qwerty");
// get the element with the id of phrase and save it to a variable
const phrase = document.getElementById("phrase");
// get the element with the class of btn__reset and save it to a variable
const btnReset = document.getElementsByClassName("btn__reset");
// Double check that 'missed' is correct
const missed = 0;

// Create an array named 'phrases'
const phrases = [
    'Joey Tribbiani',
    'Pheobe Buffay',
    'Chandler Bing',
    'Monica Geller',
    'Rachel Green'
];

// Attach an Event Listener to the "Start Game" button to hide
// the start overlay

const startButton = document.getElementsByClassName("btn__reset")[0];

startButton.addEventListener("click", function() {
  document.querySelector(".btn__reset").style.display = "none";
});

// Create a getRandomPhraseAsArray function
function getRandomPhraseAsArray (lengthArray, indexArray) {
  // still trying to figure out what this is for ? I need to add a comment here.
}

const randomNum = getRandomPhraseAsArray.length;

getRandomPhraseAsArray(phrases);

// Create an addPhraseToDisplay function
//function addPhraseToDisplay (let i = 0; i < arr.length; i++) {

//}

// Create a checkLetter function
function checkLetter (clickedButton) {

}

// Add an event listener to the keyboard
eventListener(goesHere);

// Create a checkWin function
function checkWin () {

}

// * Extra Credit *
// Add a button to the "success" & "failure" screens
// that resets the game

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {

}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {

});

// listen for the onscreen keyboard to be clicked 
qwerty.addEventListener('click', e => {

});