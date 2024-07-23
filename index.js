/*
    #1 FORMA NORMAL 
    document.querySelector("button").addEventListener("click", handleClick)

    function handleClick () {
        alert("I have click")
    }
*/

// DETECTING CLICK PRESS ...

let numOfDrumButtons = document.querySelectorAll(".drum")

for (let i = 0; i < numOfDrumButtons.length; i++) {
    // #2 FORMA CON FUNCIÓN ANÓNIMA
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            let buttonInnerHTML = this.innerHTML // Bringing the element that created an event.
            makeSound(buttonInnerHTML)

            // adding animation
            buttonAnimation(buttonInnerHTML)
        }
    )
}

// DETECTING KEYBOARD PRESS ...

// #3 FORMA CON ARROW FUNCTION
document.addEventListener("keydown", (event) => {
    makeSound(event.key)

    // adding animation
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            let audioTom1 = new Audio("./sounds/tom-1.mp3")
            audioTom1.play()
            break;
        case "a":
            let audioTom2 = new Audio("./sounds/tom-2.mp3")
            audioTom2.play()
            break;
        case "s":
            let audioTom3 = new Audio("./sounds/tom-3.mp3")
            audioTom3.play()
            break;
        case "d":
            let audioTom4 = new Audio("./sounds/tom-4.mp3")
            audioTom4.play()
            break;
        case "j":
            let audioSnare = new Audio("./sounds/snare.mp3")
            audioSnare.play()
            break;
        case "k":
            let audioCrash = new Audio("./sounds/crash.mp3")
            audioCrash.play()
            break;
        case "l":
            let audioKick = new Audio("./sounds/kick-bass.mp3")
            audioKick.play()
            break;

        default: console.log(buttonInnerHTML)
    }

}

// ADDING ANIMATION ...

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}