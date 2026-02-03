
function playSound(key) {
  
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "p":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Invalid key:", key);
  }
}


function addAnimation(key) {
  var activeButton = document.querySelector("." + key);

  if (activeButton) {
    activeButton.classList.add("pressed");


    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}


var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonKey = this.innerText.toLowerCase();
    playSound(buttonKey);
    addAnimation(buttonKey);
  });
}


document.addEventListener("keydown", function (event) {
  var keyPressed = event.key.toLowerCase();
  playSound(keyPressed);
  addAnimation(keyPressed);
});
