const menuBtn = document.getElementById("menuBtn");

const menuPanel = document.getElementById("menuPanel");

menuBtn.addEventListener("click", () => {

    menuPanel.classList.toggle("active");

});

document.getElementById("pauseBtn")
.addEventListener("click", () => {

    alert("Game paused");

});

document.getElementById("restartBtn")
.addEventListener("click", () => {

    location.reload();

});

document.getElementById("homeBtn")
.addEventListener("click", () => {

    window.location.href = "entrance.html";

});
