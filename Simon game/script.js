// Sequence Generation:
// The game randomly lights up (and plays sound for) one button (color) as the first sequence.
// The player must click the same button.
// Next Round:
// In the next round, the game adds one new random button to the existing sequence.
// The user must repeat the entire sequence in order.
// Gameplay Loop:
// The game keeps adding one new button to the sequence after each successful round.
// The player must remember and repeat the growing pattern.
// Game Over:
// If the player clicks the wrong button, the game ends.
// Usually followed by a sound like "wrong", visual effect (like flashing red), and a restart prompt.

var gameSequence = [];
var userSequence = [];
var buttonColors = ["green", "red", "yellow", "blue"];

var level = 0;
let started = false;

document.addEventListener("keypress", function() {
    if (!started) {
        document.getElementById("level-title").textContent = `Level ${level}`;
        nextSequence();
        started = true;
    }

});

document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", function () {
        const userChosenColor = this.id;
        userSequence.push(userChosenColor);
        playSound(userChosenColor);
        animateBox(userChosenColor);
        
       checkAnswer(userSequence.length - 1);
    });
});
    

function checkAnswer(currentIndex) {
    if (userSequence[currentIndex] === gameSequence[currentIndex]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(() => {
                nextSequence(); 
            }, 1000);
        }
        
    } else {
        playSound("wrong");
        document.body.classList.add("game-over");
        document.getElementById("level-title").textContent =
           "Game Over, Press Any Key to Restart";
        setTimeout(() => {
          document.body.classList.remove("game-over");
    }, 200);
    startOver();
    }
}
function nextSequence() {
        userSequence = [];
        level++;
        document.getElementById("level-title").textContent = `Level ${level}`;

        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColor = buttonColors[randomNumber];
        gameSequence.push(randomChosenColor);
        playSound(randomChosenColor);
        animateBox(randomChosenColor);
        
}

function playSound(randomChosenColor) {
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
        audio.play();
}

function animateBox(randomChosenColor) {
        var activeButton = document.getElementById(randomChosenColor);
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
}

function startOver() {
  level = 0;
  gameSequence = [];
  started = false;
}


