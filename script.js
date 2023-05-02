function generate() {
  var name = document.getElementById("nameInput").value;
  var outputParagraph = document.getElementById("outputParagraph");
  outputParagraph.innerHTML = "Hi " + name + ", would you mind sharing your <span class='pink-text'>racial preference</span> with us?";

  var inputBox = document.getElementById("inputBox");
  var outputBox = document.getElementById("outputBox");
  inputBox.style.display = "none";
  outputBox.style.display = "block";

  var myVideo = document.getElementById("myVideo");
  var secondVideo = document.getElementById("secondVideo");
  myVideo.pause();
  myVideo.style.display = "none";
  secondVideo.style.display = "block";
  secondVideo.play();
  greetings.style.display = "none";
  greetings2.style.display = "none";
  text.style.display = "none";

  var ethnicityDiv = document.querySelector(".ethnicity");
  ethnicityDiv.style.display = "block";
}

function questionButton() {
  var ethnicityDiv = document.querySelector(".ethnicity");
  ethnicityDiv.style.display = "none";
  outputParagraph.style.display = "none";
  var questionDiv = document.querySelector(".question");
  questionDiv.style.display = "block";
  var racismDiv = document.querySelector(".racism");
  racismDiv.style.display = "block";
  var waitDiv = document.querySelector(".wait");
  waitDiv.style.display = "block";
}