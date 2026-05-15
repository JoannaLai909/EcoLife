/* USER DATA */

const currentUserName = localStorage.getItem("currentUserName");
const currentUserId = localStorage.getItem("currentUserId");

if (!currentUserName || !currentUserId) {
    window.location.href = "login.html";
}


/* TUTORIAL */

const tutorialTexts = [
    "Welcome to EcoLife Simulator!",
    "In this game, your daily choices will affect money, energy, and SDG progress.",
    "Before the game starts, you can choose one SDG category or let the game choose randomly.",
    "Try to reach the target score before the game ends. Good luck!"
];

let tutorialStep = 0;

const tutorialText = document.getElementById("tutorialText");
const nextTutorialBtn = document.getElementById("nextTutorialBtn");
const tutorialDialog = document.getElementById("tutorialDialog");

const tutorialCard = document.getElementById("tutorialCard");
const categoryContainer = document.getElementById("categoryContainer");
const categorySubtitle = document.getElementById("categorySubtitle");

const tutorialFinishedKey = "tutorialFinished_" + currentUserId;


/* PAGE INITIAL STATE */

window.addEventListener("load", function () {
    const tutorialFinished = localStorage.getItem(tutorialFinishedKey);

    if (tutorialFinished === "true") {
        showCategorySection();
    } else {
        showTutorialSection();
    }
});


function showTutorialSection() {
    tutorialCard.style.display = "flex";
    categoryContainer.style.display = "none";

    tutorialStep = 0;
    tutorialText.innerText = tutorialTexts[tutorialStep];
    nextTutorialBtn.innerText = "Next";
}


function showCategorySection() {
    tutorialCard.style.display = "none";
    categoryContainer.style.display = "block";

    categorySubtitle.innerText = 
        "Welcome, " + currentUserName + "! Choose your SDG journey.";
}


/* NEXT TUTORIAL BUTTON */

nextTutorialBtn.addEventListener("click", function () {
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
        localStorage.setItem(tutorialFinishedKey, "true");
        showCategorySection();
    }
});


/* CATEGORY DATA */

const categoryCards = document.querySelectorAll(".category-card");

const categories = {
    Environment: {
        icon: "🌱",
        title: "Environment",
        description: "Climate, nature, and sustainability.",
        goalText: "Goal 13 Score ≥ 100",
        scenarioTitle: "Weekend Activity",
        scenarioText: "Your friend invites you to join a beach cleanup activity. What will you do?"
    },

    Society: {
        icon: "🏙",
        title: "Society",
        description: "Equality, education, and well-being.",
        goalText: "Goal 3 Score ≥ 100",
        scenarioTitle: "Community Activity",
        scenarioText: "Your school is organizing a community support event. What will you do?"
    },

    Development: {
        icon: "💡",
        title: "Development",
        description: "Innovation, energy, and cities.",
        goalText: "Goal 9 Score ≥ 100",
        scenarioTitle: "Innovation Challenge",
        scenarioText: "Your city wants to improve sustainable technology. What will you do?"
    },

    Global: {
        icon: "🤝",
        title: "Global",
        description: "Peace and partnerships.",
        goalText: "Goal 17 Score ≥ 100",
        scenarioTitle: "Global Cooperation",
        scenarioText: "Your team joins an international sustainability project. What will you do?"
    }
};


/* SELECT NORMAL CATEGORY */

function selectCategory(categoryName) {
    const selectedCategory = categories[categoryName];

    if (!selectedCategory) {
        return;
    }

    localStorage.setItem("selectedCategory", categoryName);
    localStorage.setItem("goalText", selectedCategory.goalText);
    localStorage.setItem("scenarioTitle", selectedCategory.scenarioTitle);
    localStorage.setItem("scenarioText", selectedCategory.scenarioText);

    localStorage.setItem("currentUserName", currentUserName);
    localStorage.setItem("currentUserId", currentUserId);

    window.location.href = "game.html";
}


/* SELECT RANDOM CATEGORY */

function selectRandomCategory() {
    const categoryNames = Object.keys(categories);
    const randomIndex = Math.floor(Math.random() * categoryNames.length);

    const randomCategoryName = categoryNames[randomIndex];
    const randomCategory = categories[randomCategoryName];

    const randomCard = document.querySelector(".random-card");

    randomCard.classList.add("random-picked");

    randomCard.innerHTML = `
        <div class="category-icon">
            ${randomCategory.icon}
        </div>

        <h3>
            ${randomCategory.title}
        </h3>

        <p>
            ${randomCategory.description}
        </p>
    `;

    categoryCards.forEach(function (card) {
        card.classList.remove("selected-card");

        if (card.dataset.category === randomCategoryName) {
            card.classList.add("selected-card");
        }
    });

    setTimeout(function () {
        selectCategory(randomCategoryName);
    }, 2500);
}


/* CLICK CATEGORY CARD */

categoryCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const categoryName = card.dataset.category;

        if (categoryName === "Random") {
            selectRandomCategory();
        } else {
            selectCategory(categoryName);
        }
    });
});