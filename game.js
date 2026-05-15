const selectedCategory =
    localStorage.getItem("selectedCategory") || "Environment";

const categoryGoals = {
    Environment: ["goal6", "goal12", "goal13", "goal14", "goal15"],
    Society: ["goal1", "goal2", "goal3", "goal4", "goal5", "goal10"],
    Development: ["goal7", "goal8", "goal9", "goal11"],
    Global: ["goal16", "goal17"]
};

const allEventPools = {
    Environment: environmentEvents,
    Society: societyEvents,
    Development: developmentEvents,
    Global: globalEvents
};

let allEvents = allEventPools[selectedCategory] || environmentEvents;

let day = 1;
let usedEventTitles = [];
let actionsToday = 0;

const maxActionsPerDay = 4;
const maxDays = 21;

let money = 100;
let energy = 80;
let sdgScores = {};


/* ELEMENTS */

const menuBtn = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const moneyPopup = document.getElementById("moneyPopup");

const shopBtn = document.getElementById("shopBtn");
const shopOverlay = document.getElementById("shopOverlay");
const shopCloseBtn = document.getElementById("shopCloseBtn");
const shopBalance = document.getElementById("shopBalance");

const goalBox = document.getElementById("goalBox");
const goalPopup = document.getElementById("goalPopup");
const closeGoalPopupBtn = document.getElementById("closeGoalPopupBtn");

const goalPopupNumber = document.getElementById("goalPopupNumber");
const goalPopupTitle = document.getElementById("goalPopupTitle");
const goalPopupSub = document.getElementById("goalPopupSub");
const goalPopupDesc = document.getElementById("goalPopupDesc");


/* MENU */

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


/* SHOP */

shopBtn.addEventListener("click", () => {
    shopBalance.innerText = `💰 ${money}`;
    shopOverlay.classList.add("shop-open");
});

shopCloseBtn.addEventListener("click", () => {
    shopOverlay.classList.remove("shop-open");
});


/* SDG COLORS */

const goalColors = {
    goal1: "#E5243B",
    goal2: "#DDA63A",
    goal3: "#4C9F38",
    goal4: "#C5192D",
    goal5: "#FF3A21",

    goal6: "#26BDE2",
    goal7: "#FCC30B",
    goal8: "#A21942",
    goal9: "#FD6925",
    goal10: "#DD1367",

    goal11: "#FD9D24",
    goal12: "#BF8B2E",
    goal13: "#3F7E44",
    goal14: "#0A97D9",
    goal15: "#56C02B",

    goal16: "#00689D",
    goal17: "#19486A"
};

const activeGoals = categoryGoals[selectedCategory] || categoryGoals.Environment;


/* CHECK WHETHER AN EVENT MATCHES A GOAL */

function eventHasPositiveGoal(event, goalKey) {
    return event.choices.some(choice => {
        return typeof choice[goalKey] === "number" && choice[goalKey] > 0;
    });
}

function eventHasMoneyGain(event) {
    return event.choices.some(choice => {
        return typeof choice.money === "number" && choice.money > 0;
    });
}


/* PICK TARGET GOAL BASED ON ACTUAL EVENTS */

const availableTargetGoals = activeGoals.filter(goal => {
    return allEvents.some(event => eventHasPositiveGoal(event, goal));
});

let targetGoal;

if (availableTargetGoals.length > 0) {
    targetGoal =
        availableTargetGoals[
            Math.floor(Math.random() * availableTargetGoals.length)
        ];
} else {
    targetGoal = activeGoals[0];
}

const possibleScores = [30, 40, 50, 60];

const targetScore =
    possibleScores[
        Math.floor(Math.random() * possibleScores.length)
    ];

let targetEvents = allEvents.filter(event => {
    return eventHasPositiveGoal(event, targetGoal);
});

if (targetEvents.length === 0) {
    targetEvents = [...allEvents];
}


/* UPDATE GOAL BOX */

function updateGoalBox() {
    goalBox.innerText =
        `${targetGoal.replace("goal", "Goal ")} Score ≥ ${targetScore}`;
}


/* GET EVENT WITHOUT REPEAT */

function getNextEvent() {
    let availableEvents = [...targetEvents];

    if (money <= 50) {
        const moneyEvents = targetEvents.filter(event => {
            return event.type === "money" || eventHasMoneyGain(event);
        });

        if (moneyEvents.length > 0) {
            availableEvents = moneyEvents;
        }
    }

    availableEvents = availableEvents.filter(event => {
        return !usedEventTitles.includes(event.title);
    });

    if (availableEvents.length === 0) {
        usedEventTitles = [];

        availableEvents = [...targetEvents];

        if (money <= 50) {
            const moneyEvents = targetEvents.filter(event => {
                return event.type === "money" || eventHasMoneyGain(event);
            });

            if (moneyEvents.length > 0) {
                availableEvents = moneyEvents;
            }
        }
    }

    const randomIndex =
        Math.floor(Math.random() * availableEvents.length);

    const selectedEvent = availableEvents[randomIndex];

    usedEventTitles.push(selectedEvent.title);

    return selectedEvent;
}


/* LOAD EVENT */

function loadEvent() {
    updateGoalBox();

    const event = getNextEvent();

    document.getElementById("scenarioTitle").innerText = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;

    document.getElementById("dayBox").innerText = `DAY ${day}`;
    document.getElementById("moneyBox").innerText = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    const choicesSection =
        document.getElementById("choicesSection");

    choicesSection.innerHTML = "";

    event.choices.forEach(choice => {
        const card = document.createElement("div");

        card.classList.add("choice-card");

        card.innerHTML = `
            <h3>${choice.text}</h3>

            <div class="effects">
                💰 ${choice.money || 0} <br>
                ⚡ ${choice.energy || 0}
            </div>
        `;

        card.addEventListener("click", () => {
            if (money + (choice.money || 0) < 0) {
                moneyPopup.classList.add("active");

                setTimeout(() => {
                    moneyPopup.classList.remove("active");
                }, 1500);

                return;
            }

            money += choice.money || 0;
            energy += choice.energy || 0;

            money = Math.max(0, money);
            energy = Math.max(0, energy);

            if (energy <= 0) {
                localStorage.setItem("resultType", "lose");
                localStorage.setItem("money", money);
                localStorage.setItem("energy", energy);
                window.location.href = "result.html";
                return;
            }

            for (let key in choice) {
                if (key.startsWith("goal")) {
                    if (!sdgScores[key]) {
                        sdgScores[key] = 0;
                    }

                    sdgScores[key] += choice[key];
                }
            }

            const isWin = updateProgress();

            if (isWin) {
                return;
            }

            actionsToday++;

            if (actionsToday >= maxActionsPerDay || energy <= 0) {
                nextDay();
            } else {
                loadEvent();
            }
        });

        choicesSection.appendChild(card);
    });
}


/* UPDATE PROGRESS */

function updateProgress() {
    activeGoals.forEach(goal => {
        const fill =
            document.getElementById(`${goal}Fill`);

        if (fill) {
            fill.style.width =
                `${Math.min(sdgScores[goal] || 0, 100)}%`;
        }
    });

    if ((sdgScores[targetGoal] || 0) >= targetScore) {
        localStorage.setItem("resultType", "win");
        localStorage.setItem("money", money);
        localStorage.setItem("energy", energy);
        window.location.href = "result.html";
        return true;
    }

    return false;
}


/* NEXT DAY */

function nextDay() {
    day++;
    actionsToday = 0;
    energy = 80;

    if (day > maxDays) {
        if ((sdgScores[targetGoal] || 0) >= targetScore) {
            localStorage.setItem("resultType", "win");
        } else {
            localStorage.setItem("resultType", "lose");
        }

        localStorage.setItem("money", money);
        localStorage.setItem("energy", energy);
        window.location.href = "result.html";
        return;
    }

    loadEvent();
}


/* RENDER PROGRESS BARS */

function renderProgressBars() {
    const progressList = document.getElementById("progressList");

    progressList.innerHTML = "";

    activeGoals.forEach(goal => {
        progressList.innerHTML += `
            <div class="progress-item">
                <span>${goal.replace("goal", "Goal ")}</span>

                <div class="bar">
                    <div class="fill" id="${goal}Fill" style="background:${goalColors[goal]}"></div>
                </div>
            </div>
        `;
    });
}


/* GOAL INFO CLICK POPUP */

const goalInfoData = {
    1: {
        title: "No Poverty",
        desc: "This goal focuses on reducing poverty and helping people access basic resources and support."
    },

    2: {
        title: "Zero Hunger",
        desc: "This goal focuses on reducing hunger, improving food access, and supporting better nutrition."
    },

    3: {
        title: "Good Health and Well-being",
        desc: "This goal focuses on health, mental well-being, safety, and better daily life choices."
    },

    4: {
        title: "Quality Education",
        desc: "This goal focuses on learning opportunities, fair education, and helping others grow through knowledge."
    },

    5: {
        title: "Gender Equality",
        desc: "This goal focuses on fairness, respect, and equal opportunities for everyone."
    },

    6: {
        title: "Clean Water and Sanitation",
        desc: "This goal focuses on saving water, protecting water resources, and improving sanitation."
    },

    7: {
        title: "Affordable and Clean Energy",
        desc: "This goal focuses on clean energy, saving electricity, and using energy more wisely."
    },

    8: {
        title: "Decent Work and Economic Growth",
        desc: "This goal focuses on responsible work, fair income, and sustainable economic choices."
    },

    9: {
        title: "Industry, Innovation and Infrastructure",
        desc: "This goal focuses on innovation, technology, infrastructure, and creative problem-solving."
    },

    10: {
        title: "Reduced Inequalities",
        desc: "This goal focuses on fairness, inclusion, and reducing unequal treatment."
    },

    11: {
        title: "Sustainable Cities and Communities",
        desc: "This goal focuses on safer, smarter, and more sustainable communities."
    },

    12: {
        title: "Responsible Consumption and Production",
        desc: "This goal focuses on reducing waste, reusing resources, and making responsible daily choices."
    },

    13: {
        title: "Climate Action",
        desc: "This goal focuses on reducing carbon emissions and taking action against climate change."
    },

    14: {
        title: "Life Below Water",
        desc: "This goal focuses on protecting oceans, rivers, marine life, and water ecosystems."
    },

    15: {
        title: "Life on Land",
        desc: "This goal focuses on protecting forests, animals, plants, and land ecosystems."
    },

    16: {
        title: "Peace, Justice and Strong Institutions",
        desc: "This goal focuses on fairness, justice, peace, trust, and responsible decision-making."
    },

    17: {
        title: "Partnerships for the Goals",
        desc: "This goal focuses on teamwork, cooperation, and working with others to solve global problems."
    }
};

function getGoalNumberFromBox() {
    const goalText = goalBox.innerText;
    const match = goalText.match(/Goal\s*(\d+)/i);

    if (match) {
        return Number(match[1]);
    }

    return 13;
}

function openGoalPopup() {
    const goalNumber = getGoalNumberFromBox();
    const goalData = goalInfoData[goalNumber];

    if (!goalData) {
        return;
    }

    goalPopupNumber.innerText = goalNumber;
    goalPopupTitle.innerText = "Goal " + goalNumber;
    goalPopupSub.innerText = goalData.title;
    goalPopupDesc.innerText = goalData.desc;

    goalPopup.classList.add("active");
}

function closeGoalPopup() {
    goalPopup.classList.remove("active");
}

goalBox.addEventListener("click", openGoalPopup);

closeGoalPopupBtn.addEventListener("click", closeGoalPopup);

goalPopup.addEventListener("click", function (event) {
    if (event.target === goalPopup) {
        closeGoalPopup();
    }
});


/* START GAME */

renderProgressBars();
loadEvent();
updateProgress();