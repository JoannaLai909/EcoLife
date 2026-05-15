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

<<<<<<< HEAD
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
let energyDepletedCount = 0;   // 體力歸零次數（用於精疲力竭結局）
let midGoalRewarded     = false;
let hasAdvisorCard      = false; // 顧問卡：可跳過一次選項

const maxActionsPerDay  = 4;
const maxDays           = 10;   // 總共 10 天
let MAX_ENERGY          = 80;   // 可被獎勵永久提升

// ── Queue state ──────────────────────────────
let eventQueue     = [];
let lastEventTitle = null;

// ─────────────────────────────────────────────
//  GOAL TARGET
// ─────────────────────────────────────────────

const activeGoals    = categoryGoals[selectedCategory];
const targetGoal     = activeGoals[Math.floor(Math.random() * activeGoals.length)];
const possibleScores = [30, 40, 50, 60];
const targetScore    = possibleScores[Math.floor(Math.random() * possibleScores.length)];

// ─────────────────────────────────────────────
//  DOM REFERENCES
// ─────────────────────────────────────────────

const menuBtn      = document.getElementById("menuBtn");
const menuModal    = document.getElementById("menuModal");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const moneyPopup   = document.getElementById("moneyPopup");
const shopBtn      = document.getElementById("shopBtn");
const shopOverlay  = document.getElementById("shopOverlay");
=======

const allEventPools = {
    Environment: environmentEvents,
    Society: societyEvents,
    Development: developmentEvents,
    Global: globalEvents
};


const activeGoals =
    categoryGoals[selectedCategory] || categoryGoals.Environment;


let allEvents =
    allEventPools[selectedCategory] || environmentEvents;


/* =========================
   GAME STATE
========================= */

let day = 1;
let actionsToday = 0;

const maxActionsPerDay = 4;
const maxDays = 21;

let money = 100;
let energy = 80;

let sdgScores = {};

let usedEventKeys = [];

let targetEvents = [];
let fallbackEvents = [];


/* =========================
   ELEMENTS
========================= */

const menuBtn = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

const moneyPopup = document.getElementById("moneyPopup");

const shopBtn = document.getElementById("shopBtn");
const shopOverlay = document.getElementById("shopOverlay");
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e
const shopCloseBtn = document.getElementById("shopCloseBtn");
const shopBalance  = document.getElementById("shopBalance");

// ─────────────────────────────────────────────
//  UI LISTENERS
// ─────────────────────────────────────────────

menuBtn.addEventListener("click", () => menuModal.classList.add("active"));
closeMenuBtn.addEventListener("click", () => menuModal.classList.remove("active"));

document.getElementById("restartBtn").addEventListener("click", () => location.reload());
document.getElementById("homeBtn").addEventListener("click", () => {
    window.location.href = "entrance.html";
});

<<<<<<< HEAD
shopBtn.addEventListener("click", () => {
    shopBalance.innerText = `💰 ${money}`;
    shopOverlay.classList.add("shop-open");
});
shopCloseBtn.addEventListener("click", () => shopOverlay.classList.remove("shop-open"));

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
    if (lastEventTitle && newQueue.length > 1 && newQueue[0].title === lastEventTitle) {
        newQueue.push(newQueue.shift());
    }
    eventQueue = newQueue;
}
=======
const goalBox = document.getElementById("goalBox");

const goalPopup = document.getElementById("goalPopup");
const closeGoalPopupBtn = document.getElementById("closeGoalPopupBtn");

const goalPopupNumber = document.getElementById("goalPopupNumber");
const goalPopupTitle = document.getElementById("goalPopupTitle");
const goalPopupSub = document.getElementById("goalPopupSub");
const goalPopupDesc = document.getElementById("goalPopupDesc");


/* =========================
   MENU
========================= */

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menuModal.classList.add("active");
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", () => {
        menuModal.classList.remove("active");
    });
}

if (restartBtn) {
    restartBtn.addEventListener("click", () => {
        location.reload();
    });
}

if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "entrance.html";
    });
}


/* =========================
   SHOP
========================= */

if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        shopBalance.innerText = `💰 ${money}`;
        shopOverlay.classList.add("shop-open");
    });
}

if (shopCloseBtn) {
    shopCloseBtn.addEventListener("click", () => {
        shopOverlay.classList.remove("shop-open");
    });
}


/* =========================
   SDG COLORS
========================= */

const goalColors = {
    goal1: "#E5243B",
    goal2: "#DDA63A",
    goal3: "#4C9F38",
    goal4: "#C5192D",
    goal5: "#FF3A21",
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e

function getNextEvent() {
    if (eventQueue.length === 0) {
        refillQueue();
    }
    // 錢太少時，優先從整個題庫找 money 題
    if (money <= 80) {
        let moneyEvents = eventQueue.filter(
            e => e.type === "money" &&
            e.title !== lastEventTitle
        );
        // 如果目前 queue 沒有 money 題，就從 allEvents 重新找
        if (moneyEvents.length === 0) {
            moneyEvents = allEvents.filter(
                e => e.type === "money" &&
                e.title !== lastEventTitle
            );
        }
        if (moneyEvents.length > 0) {
            const randomMoneyEvent =
                moneyEvents[
                    Math.floor(Math.random() * moneyEvents.length)
                ];
            eventQueue =
                eventQueue.filter(
                    e => e.title !== randomMoneyEvent.title
                );
            lastEventTitle = randomMoneyEvent.title;
            return randomMoneyEvent;

        }

<<<<<<< HEAD
    }
    const event = eventQueue.shift();
    lastEventTitle = event.title;
    return event;
}
=======
    goal16: "#00689D",
    goal17: "#19486A"
};


/* =========================
   EVENT CHECK FUNCTIONS
========================= */

function getEventKey(event) {
    return event.title + "::" + event.description;
}


function eventHasPositiveGoal(event, goalKey) {
    return event.choices.some(choice => {
        return typeof choice[goalKey] === "number" && choice[goalKey] > 0;
    });
}


function eventHasAnyActiveGoal(event) {
    return activeGoals.some(goal => {
        return eventHasPositiveGoal(event, goal);
    });
}


function eventHasMoneyGain(event) {
    return event.choices.some(choice => {
        return typeof choice.money === "number" && choice.money > 0;
    });
}


function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* =========================
   PICK TARGET GOAL
========================= */

function countEventsForGoal(goalKey) {
    return allEvents.filter(event => {
        return eventHasPositiveGoal(event, goalKey);
    }).length;
}


function pickTargetGoal() {
    const goalsWithEvents = activeGoals
        .map(goal => {
            return {
                goal: goal,
                count: countEventsForGoal(goal)
            };
        })
        .filter(item => {
            return item.count > 0;
        });

    if (goalsWithEvents.length === 0) {
        return activeGoals[0];
    }

    const goodGoals = goalsWithEvents.filter(item => {
        return item.count >= 4;
    });

    const candidates =
        goodGoals.length > 0 ? goodGoals : goalsWithEvents;

    const randomIndex =
        Math.floor(Math.random() * candidates.length);

    return candidates[randomIndex].goal;
}


const targetGoal = pickTargetGoal();

const possibleScores = [30, 40, 50, 60];

const targetScore =
    possibleScores[
        Math.floor(Math.random() * possibleScores.length)
    ];
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e

// ─────────────────────────────────────────────
//  LOAD & DISPLAY AN EVENT
// ─────────────────────────────────────────────

<<<<<<< HEAD
function loadEvent() {
    const event = getNextEvent();

    document.getElementById("goalBox").innerText =
        `${targetGoal.replace("goal", "Goal ")} Score ≥ ${targetScore}`;
    document.getElementById("dayBox").innerText    = `DAY ${day} / ${maxDays}`;
    document.getElementById("moneyBox").innerText  = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    document.getElementById("scenarioTitle").innerText       = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;
=======
/* =========================
   BUILD EVENT POOLS
========================= */

function buildEventPools() {
    targetEvents = shuffleArray(
        allEvents.filter(event => {
            return eventHasPositiveGoal(event, targetGoal);
        })
    );

    fallbackEvents = shuffleArray(
        allEvents.filter(event => {
            return !eventHasPositiveGoal(event, targetGoal) &&
                   eventHasAnyActiveGoal(event);
        })
    );
}


buildEventPools();


/* =========================
   UPDATE GOAL BOX
========================= */

function updateGoalBox() {
    goalBox.innerText =
        `${targetGoal.replace("goal", "Goal ")} Score ≥ ${targetScore}`;
}


/* =========================
   GET NEXT EVENT WITHOUT REPEAT
========================= */

function getUnusedEvents(eventList) {
    return eventList.filter(event => {
        return !usedEventKeys.includes(getEventKey(event));
    });
}


function getNextEvent() {
    let availableEvents = getUnusedEvents(targetEvents);

    if (money <= 50) {
        const moneyEvents = availableEvents.filter(event => {
            return event.type === "money" || eventHasMoneyGain(event);
        });

        if (moneyEvents.length > 0) {
            availableEvents = moneyEvents;
        }
    }

    if (availableEvents.length === 0) {
        availableEvents = getUnusedEvents(fallbackEvents);
    }

    if (availableEvents.length === 0) {
        return null;
    }

    const randomIndex =
        Math.floor(Math.random() * availableEvents.length);

    const selectedEvent = availableEvents[randomIndex];

    usedEventKeys.push(getEventKey(selectedEvent));

    return selectedEvent;
}


/* =========================
   LOAD EVENT
========================= */

function loadEvent() {
    updateGoalBox();

    const event = getNextEvent();

    if (!event) {
        endGameByNoMoreEvents();
        return;
    }

    document.getElementById("scenarioTitle").innerText = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;

    document.getElementById("dayBox").innerText = `DAY ${day}`;
    document.getElementById("moneyBox").innerText = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    const choicesSection =
        document.getElementById("choicesSection");
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e

    const choicesSection = document.getElementById("choicesSection");
    choicesSection.innerHTML = "";

    // 顧問卡按鈕（如果持有的話顯示）
    if (hasAdvisorCard) {
        const advisorBtn = document.createElement("button");
        advisorBtn.id = "advisorCardBtn";
        advisorBtn.innerText = "🃏 使用顧問卡（跳過此題）";
        advisorBtn.addEventListener("click", () => {
            hasAdvisorCard = false;
            actionsToday++;
            if (actionsToday >= maxActionsPerDay) {
                nextDay();
            } else {
                loadEvent();
            }
        });
        choicesSection.appendChild(advisorBtn);
    }

    event.choices.forEach(choice => {
        const card = document.createElement("div");
<<<<<<< HEAD
=======

>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e
        card.classList.add("choice-card");
        card.innerHTML = `
            <h3>${choice.text}</h3>
            <div class="effects">
                💰 ${choice.money || 0} <br>
                ⚡ ${choice.energy || 0}
            </div>
        `;
<<<<<<< HEAD
        card.addEventListener("click", () => handleChoice(choice));
=======

        card.addEventListener("click", () => {
            handleChoice(choice);
        });

>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e
        choicesSection.appendChild(card);
    });
}

<<<<<<< HEAD
// ─────────────────────────────────────────────
//  HANDLE A CHOICE
// ─────────────────────────────────────────────

function handleChoice(choice) {
    if (money + choice.money < 0) {
        moneyPopup.classList.add("active");
        setTimeout(() => moneyPopup.classList.remove("active"), 1500);
        return;
    }

    money  = Math.max(0, money  + choice.money);
    energy = Math.max(0, energy + choice.energy);

    for (const key in choice) {
        if (key.startsWith("goal")) {
            sdgScores[key] = (sdgScores[key] || 0) + choice[key];
        }
    }

    updateProgress();

    // 體力歸零 → 記錄次數，強制進入下一天
    if (energy <= 0) {
        energyDepletedCount++;
        energy = 0;
        nextDay();
=======

/* =========================
   HANDLE CHOICE
========================= */

function handleChoice(choice) {
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
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e
        return;
    }

    actionsToday++;

    if (actionsToday >= maxActionsPerDay) {
        nextDay();
    } else {
        loadEvent();
    }
}

<<<<<<< HEAD
// ─────────────────────────────────────────────
//  PROGRESS BARS
// ─────────────────────────────────────────────

function updateProgress() {
    activeGoals.forEach(goal => {
        const fill = document.getElementById(`${goal}Fill`);
        if (fill) {
            fill.style.width = `${Math.min(sdgScores[goal] || 0, 100)}%`;
        }
    });
}

// ─────────────────────────────────────────────
//  DAY 5 MID-GAME REWARD
//  在第 5 天結束後（進入第 6 天時）觸發
// ─────────────────────────────────────────────

function checkMidGameReward() {
    const currentScore = sdgScores[targetGoal] || 0;
    const ratio        = currentScore / targetScore;

    let rewardMessage = "";

    if (ratio >= 1.0) {
        // 完美達成：+50 金錢 + 體力上限 +20 + 顧問卡
        money         += 50;
        MAX_ENERGY    += 20;
        hasAdvisorCard = true;
        rewardMessage =
            `🎉 第五天中途目標完美達成！\n\n` +
            `獎勵：\n` +
            `💰 +50 金錢\n` +
            `⚡ 體力上限永久提升至 ${MAX_ENERGY}\n` +
            `🃏 獲得顧問卡一張（可跳過一次選項）`;

    } else if (ratio >= 0.8) {
        // 達成 80%：+30 金錢 + 顧問卡
        money         += 30;
        hasAdvisorCard = true;
        rewardMessage =
            `✅ 第五天中途進展良好！\n\n` +
            `獎勵：\n` +
            `💰 +30 金錢\n` +
            `🃏 獲得顧問卡一張（可跳過一次選項）`;

    } else if (ratio >= 0.5) {
        // 達成 50%：+30 金錢
        money += 30;
        rewardMessage =
            `👍 第五天中途目標達到一半！\n\n` +
            `獎勵：\n` +
            `💰 +30 金錢\n\n` +
            `繼續加油，還有 5 天！`;

    } else {
        // 未達 50%：純提示
        rewardMessage =
            `📋 第五天中途回顧\n\n` +
            `目標進度還不夠，後半段要加把勁！\n` +
            `剩下 5 天，還有機會逆轉！`;
    }

    // 更新 UI 再彈出提示
    document.getElementById("moneyBox").innerText  = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    // ⚠️ 可以之後把 alert 換成自訂 modal，效果更好
    alert(rewardMessage);
}

// ─────────────────────────────────────────────
//  NEXT DAY
// ─────────────────────────────────────────────
=======

/* =========================
   UPDATE PROGRESS
========================= */

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


/* =========================
   NEXT DAY
========================= */
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e

function nextDay() {
    day++;
    actionsToday = 0;
<<<<<<< HEAD

    // 每天重置體力至當前上限
    energy = MAX_ENERGY;

    // 第 5 天結束後觸發中途獎勵
    if (day === 6 && !midGoalRewarded) {
        midGoalRewarded = true;
        checkMidGameReward();
    }

    // 10 天結束 → 判定結局
    if (day > maxDays) {
        determineEnding();
=======
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
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e
        return;
    }

    loadEvent();
}

// ─────────────────────────────────────────────
//  ENDING SYSTEM（6 種結局）
// ─────────────────────────────────────────────

function determineEnding() {
    const goalScore = sdgScores[targetGoal] || 0;
    const goalRatio = goalScore / targetScore;

    // 非目標 SDG 的總分
    const otherGoalsTotal = activeGoals
        .filter(g => g !== targetGoal)
        .reduce((sum, g) => sum + (sdgScores[g] || 0), 0);

    let ending = "";

    if (goalRatio >= 1.0 && money >= 80 && energyDepletedCount === 0) {
        ending = "perfect";      // 🏆 地球守護者

    } else if (goalRatio >= 1.0) {
        ending = "win";          // ✅ 任務完成

    } else if (goalRatio < 1.0 && otherGoalsTotal >= goalScore * 2) {
        ending = "butterfly";    // 🌍 蝴蝶效應（隱藏）

    } else if (energyDepletedCount >= 3) {
        ending = "exhausted";    // 😮‍💨 燃燒殆盡

    } else if (money <= 10) {
        ending = "broke";        // 💸 理想很美好，現實很骨感

    } else if (goalRatio >= 0.7) {
        ending = "almost";       // 🌱 未竟之志

    } else {
        ending = "lose";         // 一般失敗
    }

    saveResult(ending);
}

// ─────────────────────────────────────────────
//  SAVE RESULT & REDIRECT
// ─────────────────────────────────────────────

function saveResult(type) {
    localStorage.setItem("resultType",           type);
    localStorage.setItem("money",                money);
    localStorage.setItem("energy",               energy);
    localStorage.setItem("energyDepletedCount",  energyDepletedCount);
    localStorage.setItem("targetGoal",           targetGoal);
    localStorage.setItem("targetScore",          targetScore);
    localStorage.setItem("sdgScores",            JSON.stringify(sdgScores));
    menuModal.classList.remove("active");
    window.location.href = "result.html";
}

// ─────────────────────────────────────────────
//  RENDER PROGRESS BARS
// ─────────────────────────────────────────────

/* =========================
   END WHEN NO UNIQUE EVENTS
========================= */

function endGameByNoMoreEvents() {
    if ((sdgScores[targetGoal] || 0) >= targetScore) {
        localStorage.setItem("resultType", "win");
    } else {
        localStorage.setItem("resultType", "lose");
    }

    localStorage.setItem("money", money);
    localStorage.setItem("energy", energy);

    window.location.href = "result.html";
}


/* =========================
   RENDER PROGRESS BARS
========================= */

function renderProgressBars() {
    const progressList = document.getElementById("progressList");
    progressList.innerHTML = "";

    activeGoals.forEach(goal => {
        progressList.innerHTML += `
            <div class="progress-item">
                <span>${goal.replace("goal", "Goal ")}</span>
                <div class="bar">
<<<<<<< HEAD
                    <div class="fill" id="${goal}Fill"
                         style="background:${goalColors[goal]}"></div>
=======
                    <div class="fill" id="${goal}Fill" style="background:${goalColors[goal]}"></div>
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e
                </div>
            </div>
        `;
    });
}

<<<<<<< HEAD
// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
=======

/* =========================
   GOAL INFO CLICK POPUP
========================= */

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


if (goalBox) {
    goalBox.addEventListener("click", openGoalPopup);
}


if (closeGoalPopupBtn) {
    closeGoalPopupBtn.addEventListener("click", closeGoalPopup);
}


if (goalPopup) {
    goalPopup.addEventListener("click", function (event) {
        if (event.target === goalPopup) {
            closeGoalPopup();
        }
    });
}


/* =========================
   DEBUG
========================= */

console.log("Selected Category:", selectedCategory);
console.log("Target Goal:", targetGoal);
console.log("Target Events:", targetEvents.map(event => event.title));
console.log("Fallback Events:", fallbackEvents.map(event => event.title));


/* =========================
   START GAME
========================= */
>>>>>>> 232b27236a797b059b8b03c434eb4e1d6fa2803e

renderProgressBars();
refillQueue();
loadEvent();
updateProgress();