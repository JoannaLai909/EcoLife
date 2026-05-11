/* MENU */

const menuBtn = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");
const pauseBtn = document.getElementById("pauseBtn");

menuBtn.addEventListener("click", () => {
    menuModal.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    menuModal.classList.remove("active");
});

restartBtn.addEventListener("click", () => {
    location.reload();
});

homeBtn.addEventListener("click", () => {
    window.location.href = "entrance.html";
});

pauseBtn.addEventListener("click", () => {
    menuModal.classList.remove("active");
});


/* LOAD SELECTED CATEGORY FROM TUTORIAL PAGE */

const selectedCategory = localStorage.getItem("selectedCategory");
const goalText = localStorage.getItem("goalText");
const scenarioTitle = localStorage.getItem("scenarioTitle");
const scenarioText = localStorage.getItem("scenarioText");

const goalBox = document.querySelector(".goal-box");
const scenarioTitleElement = document.querySelector(".scenario-text h2");
const scenarioTextElement = document.querySelector(".scenario-text p");

if (goalText) {
    goalBox.innerText = goalText;
}

if (scenarioTitle) {
    scenarioTitleElement.innerText = scenarioTitle;
}

if (scenarioText) {
    scenarioTextElement.innerText = scenarioText;
}


/* BASIC CHOICE CLICK EFFECT */

const choiceCards = document.querySelectorAll(".choice-card");

choiceCards.forEach((card) => {
    card.addEventListener("click", () => {

        choiceCards.forEach((item) => {
            item.classList.remove("selected-choice");
        });

        card.classList.add("selected-choice");

    });
});