var buttonColors=["red","blue","green","yellow"];

var gameSequence=[];
var userSequence=[];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".box").click(function(){
    const userChosenColor =$(this).attr("id");
    userSequence.push(userChosenColor);

    playSound(userChosenColor);
    animateBox(userChosenColor);

    checkAnswer(userSequence.length-1);
    
})
function checkAnswer(currentIndex){
    if(gameSequence[currentIndex]===userSequence[currentIndex]){
        if(userSequence.length===gameSequence.length){
            setTimeout(()=>{
                nextSequence();
            },1000);
        }
    }else{
    playSound('wrong');
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key To Restart");
    setTimeout(()=>{
        $("body").removeClass("game-over");
        
    },200);
    startOver();
    }
}
function nextSequence(){
    userSequence=[];
    level++;
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gameSequence.push(randomChosenColor);

    $("#" + randomChosenColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
    playSound(randomChosenColor);
}
function playSound(color) {
        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
}

function animateBox(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
      $("#" + color).removeClass("pressed");
    },100);
}

function startOver() {
  level = 0;
  gameSequence = [];
  started = false;
}


