// DOM is Document Object Model. A structured representation of html documents. We can use javascript to select and edit these objects.
'use strict';

/*
// select html elements with document.querySelector('.classname').textContent
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!');
        // when the guess is correct
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;

        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
    }

    // // When guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         displayMessage('📈 Too high!');
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         displayMessage('💥 You lost the game!');
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     // when guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         displayMessage('📉 Too low!');
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         displayMessage('💥 You lost the game!');
    //         document.querySelector('.score').textContent = score;
    //     }
    // }
    
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});