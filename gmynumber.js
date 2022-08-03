var test = Math.trunc(Math.random() * 20 + 1); // this is a function that produces a random number for the player to find
let highScore = 0;
function myFunction() {
  var x = Number(document.getElementById('input-box').value); // this variable x takes whatever value input prints
  document.getElementById('question-square').innerHTML = x; // result from the input will be placed in html element
  var y = document.querySelector('#score').textContent; // this allows the score to decrease on mistake
  //it publishes the result/ high score

  if (test == x) {
    //set up the conditions// 1st if test== x means if the number I input matches the randomly generated number, I will win
    document.querySelector('#title').textContent = 'YOU WIN!';
    document.querySelector('#result-check').textContent = 'Correct Number!';
    document.querySelector('#top-part').style.backgroundColor = 'green';
    document.querySelector('#bottom-part').style.backgroundColor = 'purple';
    if (highScore <= y) {
      highScore = y;
      document.querySelector('#highscore').textContent = highScore;
    }
  } else if (test > x) {
    document.querySelector('#result-check').textContent = 'Too low!';
    document.querySelector('#score').textContent = y - 1;
  } else if (test < x) {
    document.querySelector('#result-check').textContent = 'Too high!';
    document.querySelector('#score').textContent = y - 1;
  }
  if (y <= 1) {
    document.querySelector('#top-part').style.backgroundColor = 'red';
    document.querySelector('#result-check').textContent = 'You Lose!';
    document.querySelector('#title').textContent = 'Try Again!';
  }

  if (x > 20) {
    // if input number is higher than required, triger: error
    document.getElementById('result-check').innerHTML = 'invalid number';
  }
  // if (x == 13) {
  //   document.querySelector('#result-check').textContent = 'Correct Number!';
  // }
}

function resetFunction() {
  document.querySelector('#top-part').style.backgroundColor = 'black';
  document.querySelector('#bottom-part').style.backgroundColor = 'black';
  document.querySelector('#title').textContent = 'Guess my number!';
  document.querySelector('#input-box').value = '';
  document.querySelector('#question-square').textContent = '?';
  document.querySelector('#result-check').textContent = 'Start Guessing...';
  test = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('#score').textContent = '20';
}

//this will print the paragraph content to the console.
//console.log(document.querySelector('#result-check').textContent);
//document.querySelector('#result-check').textContent = 'Correct Number!';

// document.querySelector('#result-check').textContent;
// document.querySelector('#score').textContent = 10;
// document.querySelector('#input-box').value = 23;
// console.log(document.querySelector('#input-box').value);