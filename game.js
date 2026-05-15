// ─────────────────────────────────────────────
//  SETUP
// ─────────────────────────────────────────────

const selectedCategory =
    localStorage.getItem("selectedCategory") || "Environment";

const categoryGoals = {
    Environment: ["goal6", "goal12", "goal13", "goal14", "goal15"],
    Society:     ["goal1", "goal2", "goal3", "goal4", "goal5", "goal10"],
    Development: ["goal7", "goal8", "goal9", "goal11"],
    Global:      ["goal16", "goal17"]
};

const goalColors = {
    goal1:  "#E5243B", goal2:  "#DDA63A", goal3:  "#4C9F38",
    goal4:  "#C5192D", goal5:  "#FF3A21", goal6:  "#26BDE2",
    goal7:  "#FCC30B", goal8:  "#A21942", goal9:  "#FD6925",
    goal10: "#DD1367", goal11: "#FD9D24", goal12: "#BF8B2E",
    goal13: "#3F7E44", goal14: "#0A97D9", goal15: "#56C02B",
    goal16: "#00689D", goal17: "#19486A"
};

// ─────────────────────────────────────────────
//  LOAD EVENTS BY CATEGORY
// ─────────────────────────────────────────────

let allEvents = [];

if      (selectedCategory === "Environment")  allEvents = [...environmentEvents];
else if (selectedCategory === "Society")      allEvents = [...societyEvents];
else if (selectedCategory === "Development")  allEvents = [...developmentEvents];
else if (selectedCategory === "Global")       allEvents = [...globalEvents];

// Shuffle once, then take up to 15 unique events for this session
allEvents = shuffle(allEvents).slice(0, 15);

// ─────────────────────────────────────────────
//  GAME STATE
// ─────────────────────────────────────────────

let day            = 1;
let actionsToday   = 0;
let money          = 100;
let energy         = 80;
let sdgScores      = {};

const maxActionsPerDay = 4;
const maxDays          = 21;
const MAX_ENERGY       = 80;   // baseline max; tweak if shop raises it

// ── Queue state ──────────────────────────────
let eventQueue       = [];   // remaining events to draw from this cycle
let lastEventTitle   = null; // title of most-recently shown event (prevents back-to-back repeat)

// ─────────────────────────────────────────────
//  GOAL TARGET
// ─────────────────────────────────────────────

const activeGoals  = categoryGoals[selectedCategory];
const targetGoal   = activeGoals[Math.floor(Math.random() * activeGoals.length)];
const possibleScores = [30, 40, 50, 60];
const targetScore  = possibleScores[Math.floor(Math.random() * possibleScores.length)];

// ─────────────────────────────────────────────
//  DOM REFERENCES
// ─────────────────────────────────────────────

const menuBtn     = document.getElementById("menuBtn");
const menuModal   = document.getElementById("menuModal");
const closeMenuBtn= document.getElementById("closeMenuBtn");
const moneyPopup  = document.getElementById("moneyPopup");
const shopBtn     = document.getElementById("shopBtn");
const shopOverlay = document.getElementById("shopOverlay");
const shopCloseBtn= document.getElementById("shopCloseBtn");
const shopBalance = document.getElementById("shopBalance");

// ─────────────────────────────────────────────
//  UI LISTENERS
// ─────────────────────────────────────────────

menuBtn.addEventListener("click", () => menuModal.classList.add("active"));
closeMenuBtn.addEventListener("click", () => menuModal.classList.remove("active"));

document.getElementById("restartBtn").addEventListener("click", () => location.reload());
document.getElementById("homeBtn").addEventListener("click", () => {
    window.location.href = "entrance.html";
});

shopBtn.addEventListener("click", () => {
    shopBalance.innerText = `💰 ${money}`;
    shopOverlay.classList.add("shop-open");
});
shopCloseBtn.addEventListener("click", () => shopOverlay.classList.remove("shop-open"));

// ─────────────────────────────────────────────
//  UTILITY: FISHER-YATES SHUFFLE (returns new array)
// ─────────────────────────────────────────────

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ─────────────────────────────────────────────
//  QUEUE-BASED EVENT PICKER
//  Guarantees:
//    1. Every event is shown once before any repeats
//    2. The same event never appears back-to-back
//    3. Low-money situation prioritises "money" type events
// ─────────────────────────────────────────────

function refillQueue() {
    // Shuffle a fresh copy of allEvents
    let newQueue = shuffle(allEvents);

    // If the first card in the new cycle matches the last shown, rotate it to the end
    if (lastEventTitle && newQueue.length > 1 && newQueue[0].title === lastEventTitle) {
        newQueue.push(newQueue.shift());
    }

    eventQueue = newQueue;
}

function getNextEvent() {
    if (eventQueue.length === 0) refillQueue();

    // Low-money priority: try to surface a "money" type event that isn't the last shown
    if (money <= 50) {
        const moneyIdx = eventQueue.findIndex(
            e => e.type === "money" && e.title !== lastEventTitle
        );
        if (moneyIdx !== -1) {
            const [event] = eventQueue.splice(moneyIdx, 1);
            lastEventTitle = event.title;
            return event;
        }
    }

    // Normal draw: take from the front (queue is already shuffled)
    const event = eventQueue.shift();
    lastEventTitle = event.title;
    return event;
}

// ─────────────────────────────────────────────
//  LOAD & DISPLAY AN EVENT
// ─────────────────────────────────────────────

function loadEvent() {
    const event = getNextEvent();

    // ── Header ───────────────────────────────
    document.getElementById("goalBox").innerText =
        `${targetGoal.replace("goal", "Goal ")} Score ≥ ${targetScore}`;
    document.getElementById("dayBox").innerText   = `DAY ${day}`;
    document.getElementById("moneyBox").innerText = `💰 ${money}`;
    document.getElementById("energyBox").innerText= `⚡ ${energy}`;

    // ── Scenario ─────────────────────────────
    document.getElementById("scenarioTitle").innerText       = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;

    // ── Choices ──────────────────────────────
    const choicesSection = document.getElementById("choicesSection");
    choicesSection.innerHTML = "";

    event.choices.forEach(choice => {
        const card = document.createElement("div");
        card.classList.add("choice-card");
        card.innerHTML = `
            <h3>${choice.text}</h3>
            <div class="effects">
                💰 ${choice.money} <br>
                ⚡ ${choice.energy}
            </div>
        `;

        card.addEventListener("click", () => handleChoice(choice));
        choicesSection.appendChild(card);
    });
}

// ─────────────────────────────────────────────
//  HANDLE A CHOICE
// ─────────────────────────────────────────────

function handleChoice(choice) {
    // Block if player can't afford it
    if (money + choice.money < 0) {
        moneyPopup.classList.add("active");
        setTimeout(() => moneyPopup.classList.remove("active"), 1500);
        return;
    }

    // Apply resource changes
    money  = Math.max(0, money  + choice.money);
    energy = Math.max(0, energy + choice.energy);

    // Apply SDG score changes
    for (const key in choice) {
        if (key.startsWith("goal")) {
            sdgScores[key] = (sdgScores[key] || 0) + choice[key];
        }
    }

    // Check energy-out lose condition
    if (energy <= 0) {
        saveResult("lose");
        return;
    }

    // Update UI bars; check win condition
    if (updateProgress()) return;   // win → redirect handled inside

    // Advance action counter
    actionsToday++;

    // End of day?
    if (actionsToday >= maxActionsPerDay) {
        nextDay();
    } else {
        loadEvent();
    }
}

// ─────────────────────────────────────────────
//  PROGRESS BARS + WIN CHECK
// ─────────────────────────────────────────────

function updateProgress() {
    activeGoals.forEach(goal => {
        const fill = document.getElementById(`${goal}Fill`);
        if (fill) {
            fill.style.width = `${Math.min(sdgScores[goal] || 0, 100)}%`;
        }
    });

    if ((sdgScores[targetGoal] || 0) >= targetScore) {
        saveResult("win");
        return true;
    }
    return false;
}

// ─────────────────────────────────────────────
//  NEXT DAY
// ─────────────────────────────────────────────

function nextDay() {
    day++;
    actionsToday = 0;

    // Restore energy each new day (capped at MAX_ENERGY)
    energy = Math.min(energy + MAX_ENERGY, MAX_ENERGY);

    if (day > maxDays) {
        const resultType = (sdgScores[targetGoal] || 0) >= targetScore ? "win" : "lose";
        saveResult(resultType);
        return;
    }

    loadEvent();
}

// ─────────────────────────────────────────────
//  SAVE RESULT & REDIRECT
// ─────────────────────────────────────────────

function saveResult(type) {
    localStorage.setItem("resultType", type);
    localStorage.setItem("money", money);
    localStorage.setItem("energy", energy);
    menuModal.classList.remove("active");
    window.location.href = "result.html";
}

// ─────────────────────────────────────────────
//  RENDER PROGRESS BARS
// ─────────────────────────────────────────────

function renderProgressBars() {
    const progressList = document.getElementById("progressList");
    progressList.innerHTML = "";

    activeGoals.forEach(goal => {
        progressList.innerHTML += `
            <div class="progress-item">
                <span>${goal.replace("goal", "Goal ")}</span>
                <div class="bar">
                    <div class="fill" id="${goal}Fill"
                         style="background:${goalColors[goal]}"></div>
                </div>
            </div>
        `;
    });
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

renderProgressBars();
refillQueue();   // pre-fill queue before first loadEvent
loadEvent();
updateProgress();