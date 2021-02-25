//number guessing game
flag = 0;
var num = Number(Math.floor(Math.random() * 100));

var guesses = Number(10);
function guessNumber() {

    var a = Number(document.querySelector('input').value);

    if (a === num) {
        //number matched;
        document.querySelector('#message').textContent = "Number Matched!!!";
    }
    else {
        //number didn't match
        if (a > num) {
            document.querySelector('#message').textContent = "Number is smaller than " + `${a}`;
        }
        else {
            document.querySelector('#message').textContent = "Number is greater than " + `${a}`;
        }
    }
    guesses = guesses - 1;
    document.querySelector('#guessMessage').textContent = `${guesses}` + " Guesses Allowed";

    console.log(guesses)
    if (guesses === 0) {
        //guess are over now
        document.querySelector('#guessMessage').textContent = "Your chances are over, play again.";
        alert("Try again, chances are over");
        location.reload();
    }
    flag = 1;

}

//reset the text
function resetText() {
    document.querySelector('input').value = '';
}

//reload the page
function playAgain() {
    location.reload();
}
