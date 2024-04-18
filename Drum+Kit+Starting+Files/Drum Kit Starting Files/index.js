// this is a comment

document.addEventListener('keyup', (e) => {

    buttonAnimation(e.key);

    if (e.code == "KeyW") {

        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if (e.code == "KeyA") {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();

    }
    else if (e.code == "KeyS") {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();

    }
    else if (e.code == "KeyD") {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();

    }
    else if (e.code == "KeyJ") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();

    }
    else if (e.code == "KeyJ") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();

    }
});


var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

       

        buttonAnimation(buttonInnerHTML)

        switch (buttonInnerHTML) {
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case 'a':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case 'k':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            default: console.log(buttonInnerHTML)



        }
    });
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100 );


}









