var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
        });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
            switch (key) {
            case "w":
                var audio =new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio =new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":    
                var audio =new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio =new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio =new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio =new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;                    
            default:
                console.log(btnInnerHTML);
                break;
        }
}
function buttonAnimation(currentKey){
    var activeButton = document.getElementById(currentKey);  
    activeButton.classList.add("pressed");
    setTimeout(function(){  
        activeButton.classList.remove("pressed");
    }, 100);
}   
// Uncomment the following lines if you want to use the click event on buttons
// for (var i = 0; i < numberOfDrumButtons; i++)                




// document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         var buttonInnerHTML = this.innerHTML;
//         makeSound(buttonInnerHTML);
//         buttonAnimation(buttonInnerHTML);
//     });