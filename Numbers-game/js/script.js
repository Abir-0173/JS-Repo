var min = 10;
var max = 20;
//quariselector

let userInput = document.querySelector('#userInput');

// console.log(userInput.value);

document.querySelector('.submit').addEventListener("click", submit);
var form = document.querySelector('.playAgain').addEventListener("click", reset);

// console.log(x);

//function
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

var y = getRandomInt(min, max);
console.log(y);
let c = 0;

function submit() {
    var x = userInput.value;
    c++;
    console.log(c);



    if (x == y) {
        alert('🎉🎉 Hurra ! You Win The game 🎉🎉');
        // break;
        y = getRandomInt(min, max);
        c = 0;

    } else if (x < y) {
        alert(`Opps you are close 😱 It's Greter then ${x} \n ${3 - c} Attempt Left`);
        userInput.value.innerhtml = '';

    } else if (x > y) {
        alert(`Opps you are close to the number it's Less then ${x} \n ${3 - c} Attempt Left`);
        userInput.value.innerhtml = '';
    }

    // Check if the player has made 3 attempts
    if (c >= 3) {
        alert('☠️☠️ You Lose The GAME ☠️☠️ \n Try again');
        y = getRandomInt(min, max);
        console.log(y);
        c = 0;
    }

}


function reset() {
    document.querySelector('#userInput').value = '';
    // console.log(userInput);
    // console.log(userInput.value);
    // var y = getRandomInt(min, max);
    c = 0;
    y = getRandomInt(min, max);
    console.log(y);
    // form.reset();
    // userInput.innerHTML = "hi sdferfe fs";

}