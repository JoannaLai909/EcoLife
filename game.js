

const menuBtn = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal");
const closeMenuBtn = document.getElementById("closeMenuBtn");

menuBtn.addEventListener("click", () => {
  menuModal.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  menuModal.classList.remove("active");
});

document.getElementById("restartBtn").addEventListener("click", () => {
  location.reload();
});

document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "entrance.html";
});
    
const tutorialTexts = [
    "Welcome to EcoLife Simulator!",
    "Your choices affect sustainability.",
    "Watch your SDG progress carefully!",
    "Try to reach the target score!"
];

let tutorialStep = 0;
const tutorialText =
document.getElementById("tutorialText");
const nextTutorialBtn =
document.getElementById("nextTutorialBtn");
nextTutorialBtn.addEventListener("click", () => {
    tutorialStep++;
    if(tutorialStep < tutorialTexts.length){
        tutorialText.innerText =
        tutorialTexts[tutorialStep];
    } else {
        document
        .getElementById("tutorialOverlay")
        .style.display = "none";
    }
});