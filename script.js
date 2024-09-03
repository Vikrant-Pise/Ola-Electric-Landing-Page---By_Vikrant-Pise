document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 1500);

  // Unmute button
  const muteButton = document.getElementById("mute-button");
  const video = document.getElementById("background-video");

  muteButton.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = "🔊"; 
    } else {
      video.muted = true;
      muteButton.textContent = "🔈"; 
    }
  });
});
