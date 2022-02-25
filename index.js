var numOfButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;


        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom = new Audio("./sounds/tom-1.mp3");
            tom.play();
            this.style.color = "yellow";

            break;

        case "a":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            this.style.color = "red";

            break;

        case "s":
            var tom2 = new Audio("./sounds/tom-3.mp3");
            tom2.play();
            this.style.color = "orange";

            break;

        case "d":
            var tom3 = new Audio("./sounds/tom-4.mp3");
            tom3.play();
            this.style.color = "green";

            break;

        case "j":
            var tom4 = new Audio("./sounds/snare.mp3");
            tom4.play();
            this.style.color = "white";

            break;

        case "k":
            var tom5 = new Audio("./sounds/crash.mp3");
            tom5.play();
            this.style.color = "indigo";

            break;

        case "l":
            var tom6 = new Audio("./sounds/kick-bass.mp3");
            tom6.play();
            this.style.color = "purple";

            break;

        default:
            console.log(key);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelecotor("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {

        activeButton.classList.remove("pressed");
    }, 100);
}

// dropdown for mobile

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}