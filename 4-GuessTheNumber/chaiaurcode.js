const guessField = document.getElementById('guessField');
const submitButton = document.getElementById('subt');
const previousGuesses = document.querySelector('.guesses');
const guessesRemaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const reset = document.querySelector('.reset');
// console.log(submitButton)
// console.log(guessField)

let playGame = true;
let initialGuessNumber = 10;
let previousGuessArray = [];
let form = document.querySelector('.form');
// console.log(previousGuesses);

let randomNumber = function () {
  parseInt(Math.random() * 100 + 1);
};
console.log(`randomNumber is ${randomNumber}`);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  userGuess = parseInt(guessField.value);
  validateGuess();
  console.log(`userGuess is ${userGuess}`);

  function validateGuess() {
    if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
      lowOrHigh.innerHTML = `Please enter a number between 1-100`;
    } else {
      checkGuess();
    }
  }

  function checkGuess() {
    if (userGuess > randomNumber && playGame === true) {
      lowOrHigh.innerHTML = `Too High`;
      previousGuessArray.push(userGuess);
      previousGuesses.innerHTML = previousGuessArray.join(', ');
      initialGuessNumber--;
      guessesRemaining.innerHTML = initialGuessNumber;
      guessField.value = '';
      updateNumber();
    } else if (userGuess < randomNumber && playGame === true) {
      lowOrHigh.innerHTML = `Too Low`;
      previousGuessArray.push(userGuess);
      previousGuesses.innerHTML = previousGuessArray.join(', ');
      initialGuessNumber--;
      guessesRemaining.innerHTML = initialGuessNumber;
      guessField.value = '';
      updateNumber();
    } else if (playGame === true) {
      lowOrHigh.innerHTML = `Congratulations ${randomNumber} is correct answer.`;
      guessField.value = '';
      updateNumber();
      resetGame();
      randomNumber();
    } else {
      endGame();
    }
  }

  function updateNumber() {
    if (initialGuessNumber === 0) {
      playGame = false;
    }
  }

  function endGame() {
    form.setAttribute('disabled', 'true');
    reset.innerHTML = `Game Over: Restart`;
  }

  function resetGame() {
    form.removeAttribute('disabled');
    playGame = true;
    previousGuessArray = [];
    previousGuesses.innerHTML = '';
    reset.innerHTML = '';
    initialGuessNumber = 10;
    guessesRemaining.innerHTML = initialGuessNumber;
  }
  reset.addEventListener('click', resetGame);
});
