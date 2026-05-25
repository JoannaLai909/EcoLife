// ─────────────────────────────────────────────
//  SETUP
// ─────────────────────────────────────────────

const selectedCategory =
    localStorage.getItem("selectedCategory") || "Environment";


/* =========================
   CATEGORY GOALS
========================= */

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

allEvents = shuffle(allEvents);


// ─────────────────────────────────────────────
//  GAME STATE
// ─────────────────────────────────────────────

let day                 = 1;
let actionsToday        = 0;
let money               = 100;
let energy              = 80;
let sdgScores           = {};
let backpack            = [];
let energyDepletedCount = 0;
let midGoalRewarded     = false;
let hasAdvisorCard      = false;

const GAME_STATE_KEY = "ecolifeCurrentGameState";
let currentEventObject = null;
let shouldSaveGameOnLeave = true;

// Weekly Goal State
let currentWeeklyGoal = {
    goal: "",
    target: 0,
    week: 1,
    achieved: false
};

let targetGoal = "";
let targetScore = "";


// New Tracking Variables for Endings
let startTime           = Date.now();
let lastActionTime      = Date.now();
let maxIdleGap          = 0;
let rerollCount         = 0;
let fastChoices         = 0;
let acceptedChoiceCount = 0;

const maxActionsPerDay  = 4;
const maxDays           = 10;
let MAX_ENERGY          = 80;
const MAX_GOAL_SCORE    = 100;

const IDLE_ENDING_LIMIT = 600000; // 10 minutes
const FAST_CHOICE_LIMIT = 20;


// ── Queue state ──────────────────────────────

let eventQueue     = [];
let lastEventTitle = null;

let weeklyGoalStreak = 0;
let weeklyActionCount = 0;

const activeGoals = categoryGoals[selectedCategory];


// ─────────────────────────────────────────────
//  DOM REFERENCES
// ─────────────────────────────────────────────

const menuBtn      = document.getElementById("menuBtn");
const menuModal    = document.getElementById("menuModal");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const moneyPopup   = document.getElementById("moneyPopup");

const shopBtn      = document.getElementById("shopBtn");
const shopOverlay  = document.getElementById("shopOverlay");
const shopCloseBtn = document.getElementById("shopCloseBtn");
const shopBalance  = document.getElementById("shopBalance");
const shopGrid     = document.getElementById("shopGrid");

const buyConfirmModal   = document.getElementById("buyConfirmModal");
const buyConfirmTitle   = document.getElementById("buyConfirmTitle");
const buyConfirmMessage = document.getElementById("buyConfirmMessage");
const useNowBtn         = document.getElementById("useNowBtn");
const storeInBagBtn     = document.getElementById("storeInBagBtn");
const cancelBuyBtn      = document.getElementById("cancelBuyBtn");

const backpackBtn      = document.getElementById("backpackBtn");
const backpackOverlay  = document.getElementById("backpackOverlay");
const backpackCloseBtn = document.getElementById("backpackCloseBtn");
const backpackGrid     = document.getElementById("backpackGrid");

const rerollBtn        = document.getElementById("rerollBtn");

// ─────────────────────────────────────────────
//  GAME STATE MANAGEMENT
// ─────────────────────────────────────────────
function saveGameState() {

    if (!shouldSaveGameOnLeave) {
        return;
    }

    const gameState = {
        selectedCategory: selectedCategory,

        day: day,
        actionsToday: actionsToday,
        money: money,
        energy: energy,
        sdgScores: sdgScores,
        backpack: backpack,
        energyDepletedCount: energyDepletedCount,
        hasAdvisorCard: hasAdvisorCard,

        currentWeeklyGoal: currentWeeklyGoal,
        targetGoal: targetGoal,
        targetScore: targetScore,

        eventQueue: eventQueue,
        lastEventTitle: lastEventTitle,
        currentEventObject: currentEventObject,

        weeklyGoalStreak: weeklyGoalStreak,
        weeklyActionCount: weeklyActionCount,

        maxIdleGap: maxIdleGap,
        rerollCount: rerollCount,
        fastChoices: fastChoices,
        acceptedChoiceCount: acceptedChoiceCount,

        elapsedTime: Date.now() - startTime
    };

    sessionStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
}


function loadGameState() {

    const savedState =
        sessionStorage.getItem(GAME_STATE_KEY);

    if (!savedState) {
        return false;
    }

    const gameState =
        JSON.parse(savedState);

    day = gameState.day ?? 1;
    actionsToday = gameState.actionsToday ?? 0;
    money = gameState.money ?? 100;
    energy = gameState.energy ?? 80;

    sdgScores = gameState.sdgScores || {};
    backpack = gameState.backpack || [];
    energyDepletedCount = gameState.energyDepletedCount || 0;
    hasAdvisorCard = gameState.hasAdvisorCard || false;

    currentWeeklyGoal = gameState.currentWeeklyGoal || currentWeeklyGoal;
    targetGoal = gameState.targetGoal || "";
    targetScore = gameState.targetScore || "";

    eventQueue = gameState.eventQueue || [];
    lastEventTitle = gameState.lastEventTitle || null;
    currentEventObject = gameState.currentEventObject || null;

    weeklyGoalStreak = gameState.weeklyGoalStreak || 0;
    weeklyActionCount = gameState.weeklyActionCount || 0;

    maxIdleGap = gameState.maxIdleGap || 0;
    rerollCount = gameState.rerollCount || 0;
    fastChoices = gameState.fastChoices || 0;
    acceptedChoiceCount = gameState.acceptedChoiceCount || 0;

    startTime = Date.now() - (gameState.elapsedTime || 0);
    lastActionTime = Date.now();

    return true;
}


function clearGameState() {
    sessionStorage.removeItem(GAME_STATE_KEY);
}

// ─────────────────────────────────────────────
//  UI LISTENERS
// ─────────────────────────────────────────────

menuBtn.addEventListener("click", () => menuModal.classList.add("active"));
closeMenuBtn.addEventListener("click", () => menuModal.classList.remove("active"));

document.getElementById("restartBtn").addEventListener("click", () => {
    shouldSaveGameOnLeave = false;
    clearGameState();
    location.reload();
});

document.getElementById("homeBtn").addEventListener("click", () => {
    shouldSaveGameOnLeave = false;
    clearGameState();
    window.location.href = "entrance.html";
});

shopBtn.addEventListener("click", () => {
    shopBalance.innerText = `💰 ${money}`;
    renderShop();
    shopOverlay.classList.add("shop-open");
});

shopCloseBtn.addEventListener("click", () => {
    shopOverlay.classList.remove("shop-open");
});

backpackBtn.addEventListener("click", () => {
    renderBackpack();
    backpackOverlay.classList.add("shop-open");
});

backpackCloseBtn.addEventListener("click", () => {
    backpackOverlay.classList.remove("shop-open");
});

rerollBtn.addEventListener("click", () => {
    if (money >= 75) {
        money -= 75;
        rerollCount++;
        loadEvent();
        showToast("已更換題目 (💰 -75)");
    } else {
        moneyPopup.classList.add("active");
        setTimeout(() => moneyPopup.classList.remove("active"), 1500);
    }
});


// ─────────────────────────────────────────────
//  SHOP & BACKPACK LOGIC
// ─────────────────────────────────────────────

let pendingItem = null;

const shopItems = [
    { id: "coffee", name: "熱咖啡", price: 150, energy: 20, desc: "提升 20 體力", icon: "☕" },
    { id: "energy_drink", name: "提神飲料", price: 250, energy: 40, desc: "提升 40 體力", icon: "🥤" }
];

activeGoals.forEach(goal => {
    shopItems.push({
        id: `potion_${goal}`,
        name: `${goal.replace("goal", "SDG ")} 藥水`,
        price: 225,
        goalKey: goal,
        desc: `隨機提升 ${goal.replace("goal", "Goal ")} 分數 1~8 分`,
        icon: "🧪"
    });
});

function renderShop() {
    shopGrid.innerHTML = "";

    shopItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "shop-card";

        card.innerHTML = `
            <div style="font-size: 40px; margin-bottom: 10px;">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">💰 ${item.price}</div>
        `;

        card.addEventListener("click", () => {
            if (money >= item.price) {
                pendingItem = item;

                buyConfirmTitle.innerText = `購買 ${item.name}`;
                buyConfirmMessage.innerText = `花費 💰 ${item.price}，您想現在使用還是放入背包？`;

                buyConfirmModal.classList.add("active");
            } else {
                moneyPopup.classList.add("active");
                setTimeout(() => moneyPopup.classList.remove("active"), 1500);
            }
        });

        shopGrid.appendChild(card);
    });
}

function useItem(item) {
    let effectMsg = "";

    if (item.energy) {
        energy += item.energy;
        effectMsg = `體力提升了 ${item.energy} (目前: ${energy}⚡)`;
    }

    if (item.goalKey) {
        const gain =
            (Math.floor(Math.random() * 4) + 1) +
            (Math.floor(Math.random() * 4) + 1);

        sdgScores[item.goalKey] = Math.min(
            MAX_GOAL_SCORE,
            (sdgScores[item.goalKey] || 0) + gain
        );

        updateProgress();

        effectMsg =
            `${item.goalKey.replace("goal", "Goal ")} 進度提升了 ${gain} ` +
            `(目前: ${sdgScores[item.goalKey]})`;
    }

    document.getElementById("moneyBox").innerText  = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    showToast(`使用了 ${item.name}！\n${effectMsg}`);

    saveGameState();
}

function showToast(msg) {
    const toast = document.getElementById("shopToast");

    if (!toast) {
        alert(msg);
        return;
    }

    toast.innerText = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

useNowBtn.addEventListener("click", () => {
    if (pendingItem) {
        money -= pendingItem.price;

        useItem(pendingItem);

        buyConfirmModal.classList.remove("active");
        shopBalance.innerText = `💰 ${money}`;

        pendingItem = null;
    }
});

storeInBagBtn.addEventListener("click", () => {
    if (pendingItem) {
        money -= pendingItem.price;
        backpack.push({ ...pendingItem });

        buyConfirmModal.classList.remove("active");
        shopBalance.innerText = `💰 ${money}`;

        showToast(`已將 ${pendingItem.name} 放入背包`);

        pendingItem = null;

        saveGameState();
    }
});

cancelBuyBtn.addEventListener("click", () => {
    buyConfirmModal.classList.remove("active");
    pendingItem = null;
});

function renderBackpack() {
    backpackGrid.innerHTML = "";

    if (backpack.length === 0) {
        backpackGrid.innerHTML =
            "<p style='grid-column: 1/-1; text-align: center; font-size: 20px;'>背包是空的</p>";
        return;
    }

    backpack.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "shop-card";

        card.innerHTML = `
            <div style="font-size: 40px; margin-bottom: 10px;">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <button class="use-item-btn" style="width: 100%; padding: 8px; margin-top: 10px; background: #114bb8; color: white; border: none; border-radius: 8px; cursor: pointer;">
                使用
            </button>
        `;

        card.querySelector(".use-item-btn").addEventListener("click", () => {
            useItem(item);
            backpack.splice(index, 1);
            renderBackpack();
        });

        backpackGrid.appendChild(card);
    });
}


// ─────────────────────────────────────────────
//  UTILITY: FISHER-YATES SHUFFLE
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
// ─────────────────────────────────────────────

function refillQueue() {
    let newQueue = shuffle(allEvents);

    if (
        lastEventTitle &&
        newQueue.length > 1 &&
        newQueue[0].title === lastEventTitle
    ) {
        newQueue.push(newQueue.shift());
    }

    eventQueue = newQueue;
}

function isGoalMaxed(goalKey) {
    return (sdgScores[goalKey] || 0) >= MAX_GOAL_SCORE;
}

function getAffectedGoalsFromChoice(choice) {
    return Object.keys(choice).filter(key => key.startsWith("goal"));
}

function eventAffectsMaxedGoal(event) {
    if (!event || !event.choices || !Array.isArray(event.choices)) {
        return false;
    }

    return event.choices.some(choice => {
        const affectedGoals = getAffectedGoalsFromChoice(choice);

        return affectedGoals.some(goal => {
            return isGoalMaxed(goal);
        });
    });
}

function eventIsAvailable(event) {
    return event &&
           event.title !== lastEventTitle &&
           !eventAffectsMaxedGoal(event);
}

function eventMatchesWeeklyGoal(event) {
    if (!event || !currentWeeklyGoal.goal) {
        return false;
    }

    if (isGoalMaxed(currentWeeklyGoal.goal)) {
        return false;
    }

    if (!event.choices || !Array.isArray(event.choices)) {
        return false;
    }

    if (eventAffectsMaxedGoal(event)) {
        return false;
    }

    return event.choices.some(choice => {
        return choice[currentWeeklyGoal.goal] !== undefined;
    });
}

function pickEventFromQueue(conditionFunction) {
    const candidates = eventQueue.filter(event => {
        return conditionFunction(event) &&
               eventIsAvailable(event);
    });

    if (candidates.length === 0) {
        return null;
    }

    const selectedEvent =
        candidates[Math.floor(Math.random() * candidates.length)];

    eventQueue = eventQueue.filter(event => {
        return event.title !== selectedEvent.title;
    });

    return selectedEvent;
}

function getWeeklyGoalChance() {
    if (weeklyActionCount < 8) {
        return 0.65;
    }

    if (weeklyActionCount < 18) {
        return 0.45;
    }

    return 0.25;
}

function getNextEvent() {
    if (eventQueue.length === 0) {
        refillQueue();
    }

    if (money <= 80) {
        let moneyEvent = pickEventFromQueue(event => {
            return event.type === "money";
        });

        if (!moneyEvent) {
            const moneyEvents = allEvents.filter(event => {
                return event.type === "money" &&
                       eventIsAvailable(event);
            });

            if (moneyEvents.length > 0) {
                moneyEvent =
                    moneyEvents[Math.floor(Math.random() * moneyEvents.length)];
            }
        }

        if (moneyEvent) {
            lastEventTitle = moneyEvent.title;
            weeklyGoalStreak = 0;
            weeklyActionCount++;
            return moneyEvent;
        }
    }

    const weeklyChance = getWeeklyGoalChance();

    const shouldPreferWeeklyGoal =
        Math.random() < weeklyChance &&
        weeklyGoalStreak < 2 &&
        !isGoalMaxed(currentWeeklyGoal.goal);

    if (shouldPreferWeeklyGoal) {
        const weeklyGoalEvent = pickEventFromQueue(eventMatchesWeeklyGoal);

        if (weeklyGoalEvent) {
            lastEventTitle = weeklyGoalEvent.title;
            weeklyGoalStreak++;
            weeklyActionCount++;
            return weeklyGoalEvent;
        }
    }

    let normalEvent = pickEventFromQueue(event => {
        return !eventMatchesWeeklyGoal(event);
    });

    if (!normalEvent) {
        const availableEvents = eventQueue.filter(event => {
            return eventIsAvailable(event);
        });

        if (availableEvents.length > 0) {
            normalEvent =
                availableEvents[Math.floor(Math.random() * availableEvents.length)];

            eventQueue = eventQueue.filter(event => {
                return event.title !== normalEvent.title;
            });
        }
    }

    if (!normalEvent) {
        refillQueue();

        const availableEvents = eventQueue.filter(event => {
            return eventIsAvailable(event);
        });

        if (availableEvents.length > 0) {
            normalEvent =
                availableEvents[Math.floor(Math.random() * availableEvents.length)];

            eventQueue = eventQueue.filter(event => {
                return event.title !== normalEvent.title;
            });
        }
    }

    if (!normalEvent) {
        return null;
    }

    lastEventTitle = normalEvent.title;

    if (eventMatchesWeeklyGoal(normalEvent)) {
        weeklyGoalStreak++;
    } else {
        weeklyGoalStreak = 0;
    }

    weeklyActionCount++;

    return normalEvent;
}


// ─────────────────────────────────────────────
//  LOAD & DISPLAY AN EVENT
// ─────────────────────────────────────────────

function displayEvent(event) {

    if (!event) {
        endGameByNoMoreEvents();
        return;
    }

    currentEventObject = event;

    lastActionTime = Date.now();

    document.getElementById("goalBox").innerText =
        `${currentWeeklyGoal.goal.replace("goal", "Goal ")} Score ≥ ${currentWeeklyGoal.target}`;

    document.getElementById("dayBox").innerText =
        `Day ${day}-${actionsToday + 1}`;

    document.getElementById("moneyBox").innerText =
        `💰 ${money}`;

    document.getElementById("energyBox").innerText =
        `⚡ ${energy}`;

    document.getElementById("scenarioTitle").innerText =
        event.title;

    document.getElementById("scenarioDescription").innerText =
        event.description;

    const choicesSection =
        document.getElementById("choicesSection");

    choicesSection.innerHTML = "";

    if (hasAdvisorCard) {

        const advisorBtn =
            document.createElement("button");

        advisorBtn.id = "advisorCardBtn";
        advisorBtn.innerText = "🃏 使用顧問卡（跳過此題）";

        advisorBtn.addEventListener("click", () => {
            hasAdvisorCard = false;
            actionsToday++;

            saveGameState();

            if (actionsToday >= maxActionsPerDay) {
                nextDay();
            } else {
                loadEvent();
            }
        });

        choicesSection.appendChild(advisorBtn);
    }

    event.choices.forEach(choice => {

        const card =
            document.createElement("div");

        card.classList.add("choice-card");

        card.innerHTML = `
            <h3>${choice.text}</h3>
            <div class="effects">
                💰 ${choice.money || 0} <br>
                ⚡ ${choice.energy || 0}
            </div>
        `;

        card.addEventListener("click", () => handleChoice(choice));

        choicesSection.appendChild(card);

    });

    saveGameState();
}


function loadEvent() {

    const event =
        getNextEvent();

    displayEvent(event);

}


// ─────────────────────────────────────────────
//  HANDLE A CHOICE
// ─────────────────────────────────────────────

function handleChoice(choice) {
    const currentTime = Date.now();
    const idleGap = currentTime - lastActionTime;

    if (idleGap > maxIdleGap) {
        maxIdleGap = idleGap;
    }

    if (idleGap < 1000) {
        fastChoices++;
    }

    lastActionTime = currentTime;

    const moneyChange = choice.money ?? 0;
    const energyChange = choice.energy ?? 0;

    if (money + moneyChange < 0) {
        moneyPopup.classList.add("active");
        setTimeout(() => moneyPopup.classList.remove("active"), 1500);
        return;
    }

    acceptedChoiceCount++;

    money = Math.max(0, money + moneyChange);
    energy = Math.max(0, energy + energyChange);

    const deltas = {};

    for (const key in choice) {
        if (key.startsWith("goal")) {
            const oldScore = sdgScores[key] || 0;

            const newScore = Math.min(
                MAX_GOAL_SCORE,
                oldScore + choice[key]
            );

            sdgScores[key] = newScore;
            deltas[key] = choice[key];
        }
    }

    document.getElementById("moneyBox").innerText = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    renderProgressBars();
    updateProgress(deltas);

    if (energy <= 0) {
        energyDepletedCount++;
        energy = 0;

        saveGameState();

        nextDay();
        return;
    }

    actionsToday++;

    saveGameState();

    if (actionsToday >= maxActionsPerDay) {
        nextDay();
    } else {
        loadEvent();
    }
}


// ─────────────────────────────────────────────
//  PROGRESS BARS
// ─────────────────────────────────────────────

function updateProgress(deltas = {}) {
    activeGoals.forEach(goal => {
        const fill = document.getElementById(`${goal}Fill`);
        const text = document.getElementById(`${goal}Text`);
        const deltaSpan = document.getElementById(`${goal}Delta`);

        if (fill) {
            const score = Math.min(sdgScores[goal] || 0, MAX_GOAL_SCORE);
            const percent = (score / MAX_GOAL_SCORE) * 100;
            fill.style.width = `${percent}%`;

            if (text) {
                text.innerText = `${score} / ${MAX_GOAL_SCORE}`;
            }
        }

        if (deltaSpan && deltas[goal]) {
            const val = deltas[goal];
            const sign = val > 0 ? "+" : "";

            deltaSpan.innerText = `${sign}${val}`;
            deltaSpan.style.color = val > 0 ? "#2e7d32" : "#d32f2f";
            deltaSpan.style.opacity = "1";

            setTimeout(() => {
                deltaSpan.style.opacity = "0";
            }, 1500);
        }
    });
}


// ─────────────────────────────────────────────
//  WEEKLY GOAL LOGIC
// ─────────────────────────────────────────────

function setWeeklyGoal(week) {
    currentWeeklyGoal.week = week;

    const availableGoals = activeGoals.filter(goal => !isGoalMaxed(goal));

    if (availableGoals.length > 0) {
        const goalIndex = Math.floor(Math.random() * availableGoals.length);
        currentWeeklyGoal.goal = availableGoals[goalIndex];
    } else {
        currentWeeklyGoal.goal = activeGoals[Math.floor(Math.random() * activeGoals.length)];
    }

    if (week === 1) currentWeeklyGoal.target = 30;
    else if (week === 2) currentWeeklyGoal.target = 80;

    currentWeeklyGoal.achieved = false;

    weeklyGoalStreak = 0;
    weeklyActionCount = 0;

    targetGoal = currentWeeklyGoal.goal;
    targetScore = currentWeeklyGoal.target;

    showWeeklyGoalModal();
}

function showWeeklyGoalModal() {
    const modal = document.getElementById("dailyModal");

    if (!modal) {
        loadEvent();
        return;
    }

    const title = document.getElementById("dailyModalTitle");
    const msg = document.getElementById("dailyModalMessage");
    const details = document.getElementById("goalDetails");
    const goalTitle = document.getElementById("goalTitle");
    const goalDesc = document.getElementById("goalDescription");
    const rewardSection = document.getElementById("rewardSection");

    title.innerText = `第 ${currentWeeklyGoal.week === 1 ? '一' : '二'} 階段目標`;
    msg.innerText = "本階段你的努力方向是（達標會有小驚喜喔！）：";
    details.style.display = "block";
    goalTitle.innerText = `${currentWeeklyGoal.goal.replace("goal", "Goal ")}`;
    goalDesc.innerText = `階段結束前，請將此項進度提升至 ${currentWeeklyGoal.target}。`;
    rewardSection.style.display = "none";

    modal.classList.add("active");

    const closeBtn = document.getElementById("closeDailyBtn");

    const nextStep = () => {
        modal.classList.remove("active");
        closeBtn.removeEventListener("click", nextStep);
        loadEvent();
    };

    closeBtn.addEventListener("click", nextStep);
}

function checkWeeklyGoal(week) {
    const goalScore = sdgScores[currentWeeklyGoal.goal] || 0;
    const success = goalScore >= currentWeeklyGoal.target;

    let rewardMsg = "";

    if (success) {
        const rewardType = Math.random() > 0.5 ? "money" : "stat";

        if (rewardType === "money") {
            const amount = 30 + Math.floor(Math.random() * 21);
            money += amount;
            rewardMsg = `💰 獲得獎勵金：${amount}`;
        } else {
            const availableGoals = activeGoals.filter(goal => !isGoalMaxed(goal));

            if (availableGoals.length > 0) {
                const randomGoal =
                    availableGoals[Math.floor(Math.random() * availableGoals.length)];

                const amount = 10 + Math.floor(Math.random() * 6);

                sdgScores[randomGoal] = Math.min(
                    MAX_GOAL_SCORE,
                    (sdgScores[randomGoal] || 0) + amount
                );

                updateProgress();

                rewardMsg =
                    `📈 ${randomGoal.replace("goal", "Goal ")} 進度提升了 ${amount}`;
            } else {
                rewardMsg = "📈 所有 Goal 都已達滿分！";
            }
        }
    }

    const modal = document.getElementById("dailyModal");
    const title = document.getElementById("dailyModalTitle");
    const msg = document.getElementById("dailyModalMessage");
    const details = document.getElementById("goalDetails");
    const rewardSection = document.getElementById("rewardSection");
    const rewardText = document.getElementById("rewardMessage");

    title.innerText = `第 ${week === 1 ? '一' : '二'} 階段結算`;

    if (success) {
        msg.innerText = "🎉 恭喜！你達成了階段目標！";
        rewardSection.style.display = "block";
        rewardText.innerText = rewardMsg;
    } else {
        msg.innerText = "❌ 很遺憾，你未能達成階段目標。";
        rewardSection.style.display = "none";
    }

    details.style.display = "none";

    document.getElementById("moneyBox").innerText  = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    modal.classList.add("active");

    const closeBtn = document.getElementById("closeDailyBtn");

    const nextStep = () => {
        modal.classList.remove("active");
        closeBtn.removeEventListener("click", nextStep);

        if (day === 6 && week === 1) {
            setWeeklyGoal(2);
        } else if (day > maxDays && week === 2) {
            determineEnding();
        } else {
            loadEvent();
        }
    };

    closeBtn.addEventListener("click", nextStep);
}


// ─────────────────────────────────────────────
//  NEXT DAY
// ─────────────────────────────────────────────

function nextDay() {
    day++;
    actionsToday = 0;
    energy = MAX_ENERGY;

    saveGameState();

    if (day === 6) {
        checkWeeklyGoal(1);
        return;
    }

    if (day > maxDays) {
        checkWeeklyGoal(2);
        return;
    }

    loadEvent();
}


// ─────────────────────────────────────────────
//  ENDING SYSTEM
// ─────────────────────────────────────────────

function determineEnding() {
    const totalTime = Date.now() - startTime;

    const goalScoresArray = activeGoals.map(goal => {
        return Math.min(sdgScores[goal] || 0, MAX_GOAL_SCORE);
    });

    const totalScore = goalScoresArray.reduce((a, b) => a + b, 0);

    const avgScore = totalScore / activeGoals.length;

    const completedGoalCount = activeGoals.filter(goal => {
        return (sdgScores[goal] || 0) >= MAX_GOAL_SCORE;
    }).length;

    const allActiveGoalsMaxed = activeGoals.every(goal => {
        return (sdgScores[goal] || 0) >= MAX_GOAL_SCORE;
    });

    const veryLowGoalCount = activeGoals.filter(goal => {
        return (sdgScores[goal] || 0) < 20;
    }).length;

    let endingType = "";
    let endingTitle = "";
    let endingText = "";

    /*
       1. 成就型結局優先
       避免玩家明明高分，卻被後面的失敗條件蓋掉
    */
    if (allActiveGoalsMaxed || avgScore >= 90) {
        endingType = "perfect";
        endingTitle = "🏆 永續發展領袖";
        endingText = "所有 SDG 指標都達到高度發展，你成功打造出兼顧環境、社會與資源管理的永續生活模式。";
    }
    else if (completedGoalCount >= 2 || avgScore >= 75) {
        endingType = "win";
        endingTitle = "🌟 雙目標達成者";
        endingText = "你成功讓多個 SDG 目標達到滿分，展現出穩定且有效的永續行動力。";
    }

    /*
       2. 特殊行為結局
       這些只在玩家沒有達到高分成就時觸發
    */
    else if (acceptedChoiceCount <= 2 && totalTime > IDLE_ENDING_LIMIT) {
        endingType = "normal";
        endingTitle = "🛋️ 什麼都沒做";
        endingText = "系統偵測到你幾乎沒有進行任何選擇，判定你進入了冥想狀態，頒給你最佳靜態環保行動獎。";
    }
    else if (fastChoices >= FAST_CHOICE_LIMIT || rerollCount > 15) {
        endingType = "normal";
        endingTitle = "🎰 蝴蝶效應受害者";
        endingText = "你幾乎每題都快速決定。系統偵測到你的混亂能量，判定你是蝴蝶效應的起點。";
    }

    /*
       3. 類別專屬好結局
       只檢查 activeGoals 裡真的有的 goal
    */
    else if (activeGoals.includes("goal15") && (sdgScores["goal15"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🌲 樹木感謝你";
        endingText = "你成功守護陸域生態，全球樹木集體選你當樹界代言人。";
    }
    else if (activeGoals.includes("goal7") && (sdgScores["goal7"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "⚡ 人體行動電源";
        endingText = "你推動潔淨能源成果卓著，現在連你的生活方式都開始發光。";
    }
    else if (activeGoals.includes("goal2") && (sdgScores["goal2"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🍚 剩食餐廳主廚";
        endingText = "你成功改善糧食與飢餓問題，最後開了一家剩食餐廳，意外大受歡迎。";
    }
    else if (activeGoals.includes("goal10") && (sdgScores["goal10"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🤝 平等推進者";
        endingText = "你努力減少不平等，讓更多人獲得公平的機會與資源。";
    }
    else if (activeGoals.includes("goal14") && (sdgScores["goal14"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🔱 海洋守護者";
        endingText = "你對海洋保育貢獻卓著，珊瑚礁恢復色彩，海洋生態逐漸復原。";
    }
    else if (activeGoals.includes("goal4") && (sdgScores["goal4"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "📚 教育之光";
        endingText = "你讓更多人獲得學習機會，也讓教育成為改變生活的重要力量。";
    }

    /*
       4. 失敗結局
       只根據 activeGoals 判斷，不要拿未出現的 goal 來扣玩家
    */
    else if (veryLowGoalCount >= 2 || avgScore < 30) {
        endingType = "lose";
        endingTitle = "🛸 外星人再教育";
        endingText = "你的永續指標明顯偏低，外星人決定帶你去參加地球責任補習班。";
    }
    else if (activeGoals.includes("goal13") && (sdgScores["goal13"] || 0) < 10) {
        endingType = "lose";
        endingTitle = "🐧 南極移民";
        endingText = "你忽略氣候行動，地球變得太熱，只好搬去南極和企鵝合租。";
    }
    else if (activeGoals.includes("goal14") && (sdgScores["goal14"] || 0) < 10) {
        endingType = "lose";
        endingTitle = "🐟 變成魚";
        endingText = "你忽略海洋生態，最後被宇宙安排親自體驗海洋危機。";
    }

    /*
       5. 普通結局
    */
    else {
        endingType = "normal";
        endingTitle = "🌱 穩定前進";
        endingText = "你的永續生活有明顯進展，但仍有幾個目標需要更多努力。";
    }

    saveResult(endingType, endingTitle, endingText);
}

async function saveScoreToCloud(resultType) {

    if (!window.updateCloudLeaderboard) {
        console.log("Firebase leaderboard function not loaded.");
        return;
    }

    const currentUserName =
        localStorage.getItem("currentUserName") || "Unknown Player";

    const currentUserId =
        localStorage.getItem("currentUserId") || "Unknown ID";

    const category =
        localStorage.getItem("selectedCategory") || selectedCategory;

    const scores =
        activeGoals.map(goal =>
            Math.max(0, sdgScores[goal] || 0)
        );

    const totalScore =
        scores.reduce((sum, score) => sum + score, 0);

    const averageScore =
        Math.round(totalScore / activeGoals.length);

    const playerData = {
        name: currentUserName,
        id: currentUserId,
        category: category,
        score: averageScore,
        result: resultType,
        date: new Date().toLocaleDateString()
    };

    await window.updateCloudLeaderboard(playerData);
}


async function saveResult(type, endingTitle, endingText) {

    await saveScoreToCloud(type);

    localStorage.setItem("resultType", type);
    localStorage.setItem("endingTitle", endingTitle);
    localStorage.setItem("endingText", endingText);

    localStorage.setItem("money", money);
    localStorage.setItem("energy", energy);
    localStorage.setItem("energyDepletedCount", energyDepletedCount);
    localStorage.setItem("targetGoal", targetGoal);
    localStorage.setItem("targetScore", targetScore);
    localStorage.setItem("sdgScores", JSON.stringify(sdgScores));

    shouldSaveGameOnLeave = false;
    clearGameState();

    menuModal.classList.remove("active");

    window.location.href = "result.html";
}


// ─────────────────────────────────────────────
//  RENDER PROGRESS BARS
// ─────────────────────────────────────────────

function endGameByNoMoreEvents() {
    determineEnding();
}

function renderProgressBars() {
    const progressList = document.getElementById("progressList");

    progressList.innerHTML = "";

    activeGoals.forEach(goal => {
        const score = Math.min(sdgScores[goal] || 0, MAX_GOAL_SCORE);
        const percent = (score / MAX_GOAL_SCORE) * 100;
        const goalNumber = goal.replace("goal", "");

        progressList.innerHTML += `
            <div class="progress-item clickable-progress-goal" data-goal="${goalNumber}" style="position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${goal.replace("goal", "Goal ")}</span>

                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span id="${goal}Delta" style="font-weight: bold; font-size: 14px; opacity: 0; transition: opacity 0.3s, transform 0.3s; transform: translateY(5px);"></span>
                        <span id="${goal}Text" style="font-weight: bold; color: #114bb8;">${score} / ${MAX_GOAL_SCORE}</span>
                    </div>
                </div>

                <div class="bar">
                    <div class="fill" id="${goal}Fill" style="background:${goalColors[goal]}; width: ${percent}%;"></div>
                </div>
            </div>
        `;
    });

    bindProgressGoalClickEvents();
}


// ─────────────────────────────────────────────
//  GOAL INFO POPUP
// ─────────────────────────────────────────────

const gameSdgData = [
    {
        id: 1,
        title: "No Poverty",
        description: "End poverty in all its forms everywhere. Ensure equal rights to economic resources, basic services, and social protection.",
        color: "#E5243B"
    },
    {
        id: 2,
        title: "Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture for all.",
        color: "#DDA63A"
    },
    {
        id: 3,
        title: "Good Health and Well-Being",
        description: "Ensure healthy lives and promote well-being for all at all ages, reducing mortality and ending epidemics.",
        color: "#4C9F38"
    },
    {
        id: 4,
        title: "Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        color: "#C5192D"
    },
    {
        id: 5,
        title: "Gender Equality",
        description: "Achieve gender equality and empower all women and girls by eliminating discrimination and violence.",
        color: "#FF3A21"
    },
    {
        id: 6,
        title: "Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all people worldwide.",
        color: "#26BDE2"
    },
    {
        id: 7,
        title: "Affordable and Clean Energy",
        description: "Ensure access to affordable, reliable, sustainable, and modern energy for all globally.",
        color: "#FCC30B"
    },
    {
        id: 8,
        title: "Decent Work and Economic Growth",
        description: "Promote sustained, inclusive, and sustainable economic growth, full employment, and decent work for all.",
        color: "#A21942"
    },
    {
        id: 9,
        title: "Industry, Innovation and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        color: "#FD6925"
    },
    {
        id: 10,
        title: "Reduced Inequalities",
        description: "Reduce inequality within and among countries by promoting social, economic, and political inclusion.",
        color: "#DD1367"
    },
    {
        id: 11,
        title: "Sustainable Cities and Communities",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable for all inhabitants.",
        color: "#FD9D24"
    },
    {
        id: 12,
        title: "Responsible Consumption and Production",
        description: "Ensure sustainable consumption and production patterns through efficient resource use and waste reduction.",
        color: "#BF8B2E"
    },
    {
        id: 13,
        title: "Climate Action",
        description: "Take urgent action to combat climate change and its impacts by strengthening resilience and awareness.",
        color: "#3F7E44"
    },
    {
        id: 14,
        title: "Life Below Water",
        description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
        color: "#0A97D9"
    },
    {
        id: 15,
        title: "Life on Land",
        description: "Protect, restore, and promote sustainable use of terrestrial ecosystems and halt biodiversity loss.",
        color: "#56C02B"
    },
    {
        id: 16,
        title: "Peace, Justice and Strong Institutions",
        description: "Promote peaceful and inclusive societies, provide access to justice, and build effective institutions.",
        color: "#00689D"
    },
    {
        id: 17,
        title: "Partnerships for the Goals",
        description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        color: "#19486A"
    }
];

function getCurrentGoalNumber() {
    const goalBox = document.getElementById("goalBox");

    if (!goalBox) {
        return null;
    }

    const goalText = goalBox.innerText;
    const match = goalText.match(/Goal\s*(\d+)/);

    if (match) {
        return Number(match[1]);
    }

    return null;
}

function showGoalPopupByNumber(goalNumber) {
    const goal = gameSdgData.find(item => item.id === Number(goalNumber));

    if (!goal) {
        return;
    }

    const goalPopup = document.getElementById("goalPopup");
    const goalPopupNumber = document.getElementById("goalPopupNumber");
    const goalPopupTitle = document.getElementById("goalPopupTitle");
    const goalPopupSub = document.getElementById("goalPopupSub");
    const goalPopupDesc = document.getElementById("goalPopupDesc");

    if (
        !goalPopup ||
        !goalPopupNumber ||
        !goalPopupTitle ||
        !goalPopupSub ||
        !goalPopupDesc
    ) {
        return;
    }

    goalPopupNumber.innerText = goal.id;
    goalPopupTitle.innerText = `Goal ${goal.id}`;
    goalPopupSub.innerText = goal.title;
    goalPopupDesc.innerText = goal.description;

    goalPopupNumber.style.background = goal.color;

    goalPopup.classList.add("active");
}

function showCurrentWeeklyGoalPopup() {
    const currentGoalNumber = getCurrentGoalNumber();

    if (!currentGoalNumber) {
        return;
    }

    showGoalPopupByNumber(currentGoalNumber);
}

function closeGoalPopup() {
    const goalPopup = document.getElementById("goalPopup");

    if (goalPopup) {
        goalPopup.classList.remove("active");
    }
}

function bindProgressGoalClickEvents() {
    const progressGoalItems = document.querySelectorAll(".clickable-progress-goal");

    progressGoalItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.stopPropagation();

            const goalNumber = item.dataset.goal;

            showGoalPopupByNumber(goalNumber);
        });
    });
}

const goalBoxElement = document.getElementById("goalBox");
const goalPopupElement = document.getElementById("goalPopup");
const closeGoalPopupButton = document.getElementById("closeGoalPopupBtn");

if (goalBoxElement) {
    goalBoxElement.addEventListener("click", function (event) {
        event.stopPropagation();
        showCurrentWeeklyGoalPopup();
    });
}

if (closeGoalPopupButton) {
    closeGoalPopupButton.addEventListener("click", function (event) {
        event.stopPropagation();
        closeGoalPopup();
    });
}

if (goalPopupElement) {
    goalPopupElement.addEventListener("click", function (event) {
        if (event.target === goalPopupElement) {
            closeGoalPopup();
        }
    });
}

window.addEventListener("beforeunload", function () {
    saveGameState();
});

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

const hasSavedGame =
    loadGameState();

renderProgressBars();
updateProgress();

if (hasSavedGame && currentEventObject) {

    displayEvent(currentEventObject);

} else {

    refillQueue();
    setWeeklyGoal(1);

}