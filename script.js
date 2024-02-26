// Dark mode Js
const toggleModeButton = document.getElementById("toggleMode");
const bgPicture = document.getElementById("bgPicture");
toggleModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  bgPicture.classList.toggle("dark-mode-image");
});
