const tutorialTexts = [
    "Welcome to EcoLife Simulator!",
    "In this game, your daily choices will affect money, energy, and SDG progress.",
    "Before the game starts, you can choose one SDG category or let the game choose randomly.",
    "Try to reach the target score before the game ends. Good luck!"
];

let tutorialStep = 0;

const tutorialText = document.getElementById("tutorialText");
const nextTutorialBtn = document.getElementById("nextTutorialBtn");
const tutorialDialog = document.querySelector(".speech-bubble");

nextTutorialBtn.addEventListener("click", () => {
    tutorialStep++;

    if (tutorialStep < tutorialTexts.length) {
        tutorialText.innerText = tutorialTexts[tutorialStep];

        tutorialDialog.classList.remove("pop");
        void tutorialDialog.offsetWidth;
        tutorialDialog.classList.add("pop");

        if (tutorialStep === tutorialTexts.length - 1) {
            nextTutorialBtn.innerText = "Start";
        }

    } else {
        window.location.href = "game.html";
    }
});