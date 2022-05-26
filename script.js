'use strict';
// // selecting element or a class from html
// console.log(document.querySelector('.message').textContent);
// // changing the message of element
// document.querySelector('.message').textContent = 'corrrect';
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


//game project 1
let secret = Math.trunc(Math.random() * 20) + 1;//this is seceret number
let score = 20;
let high = 0;
//event listiner
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener
    ('click', function () {

        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess)
            //document.querySelector('.message').textContent = 'number to de be';
            displayMessage('number to de be');
        else if (guess === secret) {
            document.querySelector('.number').textContent = secret;
            document.querySelector('.message').textContent = 'Tukka BC';
            //change css using js 
            document.querySelector('body').style.backgroundColor = '#60b347'

            document.querySelector('.number').style.width = '30rem'
            if (high < score) {
                high = score;
                document.querySelector('.highscore').textContent = high;
            }
        }
        else if (guess !== secret) {
            if (score > 1) {
                //document.querySelector('.message').textContent =
                displayMessage(guess > secret ? 'bada daal dia be' : 'abe tu thoda sa fuddu h kya');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = ' haar gya saala';
                document.querySelector('body').style.backgroundColor = '#FF0000'
                document.querySelector('.score').textContent = 0;
            }

        }

        // else if (guess > secret) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Bada daal dia be';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = ' haar gya saala';
        //         document.querySelector('body').style.backgroundColor = '#FF0000'
        //         document.querySelector('.score').textContent = 0;
        //     }

        // }
        // else if (guess < secret) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'abe tu thoda sa fuddu h kya';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = 'haar gya sala';
        //         document.querySelector('body').style.backgroundColor = '#FF0000'
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'

    document.querySelector('.number').style.width = '15rem'

})