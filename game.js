const events = [
    {
        title: "Beach Cleanup",
        description:
        "Your friend invites you to join a beach cleanup activity.",
        choices: [
            {
                text: "Join the cleanup",
                energy: -15,
                money: 0,
                goal14: +10
            },
            {
                text: "Stay home",
                energy: +10,
                money: 0,
                goal14: -5
            }
        ]
    },
    {
        title: "Reusable Cup",
        description:
        "A cafe offers a discount if you bring your own cup.",
        choices: [
            {
                text: "Bring reusable cup",
                energy: 0,
                money: +5,
                goal12: +10
            },
            {
                text: "Use disposable cup",
                energy: 0,
                money: 0,
                goal12: -5
            }
        ]
    }
];

let currentEvent = 0;
let day = 1;
let money = 100;
let energy = 80;
let goal12 = 0;
let goal14 = 0;

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

/* TUTORIAL */

const tutorialTexts = [
    "Welcome to EcoLife Simulator!",
    "Your choices affect sustainability.",
    "Watch your SDG progress carefully!",
    "Try to reach the target score!"
];

let tutorialStep = 0;

const tutorialText = document.getElementById("tutorialText");
const nextTutorialBtn = document.getElementById("nextTutorialBtn");

nextTutorialBtn.addEventListener("click", () => {
    tutorialStep++;

    if(tutorialStep < tutorialTexts.length){
        tutorialText.innerText = tutorialTexts[tutorialStep];

        const dialog = document.querySelector(".tutorial-dialog");

        dialog.classList.remove("pop");
        void dialog.offsetWidth;
        dialog.classList.add("pop");

    } else {
        document
        .getElementById("tutorialOverlay")
        .style.display = "none";

        document
        .getElementById("categoryOverlay")
        .style.display = "flex";
    }
});

/* CATEGORY RANDOM FUNCTION */

const categoryOverlay = document.getElementById("categoryOverlay");
const categoryCards = document.querySelectorAll(".category-card");
const goalBox = document.querySelector(".goal-box");

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

    goalBox.innerText = selectedCategory.goalText;

    document.querySelector(".scenario-text h2").innerText =
        selectedCategory.scenarioTitle;

    document.querySelector(".scenario-text p").innerText =
        selectedCategory.scenarioText;

    localStorage.setItem("selectedCategory", categoryName);

    categoryOverlay.style.display = "none";
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

        <h3>${randomCategory.title}</h3>

        <p>
            ${randomCategory.description}
        </p>
    `;

    categoryCards.forEach((card) => {
        card.classList.remove("selected-card");

        if (card.dataset.category === randomCategoryName) {
            card.classList.add("selected-card");
        }
    });

    setTimeout(() => {
        selectCategory(randomCategoryName);
    }, 3000);
}

/* CLICK CATEGORY CARD */

categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
        const categoryName = card.dataset.category;

        if (categoryName === "Random") {
            selectRandomCategory();
        } else {
            selectCategory(categoryName);
        }
    });
});
