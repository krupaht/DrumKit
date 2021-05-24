for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alph(this.innerHTML);
    anime(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  alph(event.key);
  anime(event.key);
});

function alph(c) {
  var myMusic;
  switch (c) {
    case "w":
      myMusic = "sounds/tom-1.mp3";
      break;
    case "a":
      myMusic = "sounds/tom-2.mp3";
      break;
    case "s":
      myMusic = "sounds/tom-3.mp3";
      break;
    case "d":
      myMusic = "sounds/tom-4.mp3";
      break;
    case "j":
      myMusic = "sounds/snare.mp3";
      break;
    case "k":
      myMusic = "sounds/crash.mp3";
      break;
    case "l":
      myMusic = "sounds/kick-bass.mp3";
      break;
    default:
      console.log(c);
      break;
  }
  var tom1 = new Audio(myMusic);
  tom1.play();
}

function anime(alpha) {
  var keypressed = document.querySelector("." + alpha);
  keypressed.classList.toggle("pressed");
  keypressed.classList.toggle("red");
  setTimeout(function () {
    keypressed.classList.toggle("pressed");
    keypressed.classList.toggle("red");
  }, 1000);
}
