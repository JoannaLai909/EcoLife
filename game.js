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

const maxActionsPerDay  = 4;
const maxDays           = 10;
let MAX_ENERGY          = 80;
const MAX_GOAL_SCORE    = 100;


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

    // 如果錢太少，優先出補錢題，但仍然跳過已滿分 Goal 的題目
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

    // 一般題目：優先選不是 Weekly Goal 的題目，而且不能影響已滿分 Goal
    let normalEvent = pickEventFromQueue(event => {
        return !eventMatchesWeeklyGoal(event);
    });

    // 如果找不到一般題，就從目前 queue 裡找任何可用題
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

    // 如果 queue 裡真的沒有可用題，重新洗牌後再找一次
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

    // 如果所有剩下題目都會碰到已滿分 Goal，則結束遊戲
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

function loadEvent() {
    const event = getNextEvent();

    if (!event) {
        endGameByNoMoreEvents();
        return;
    }

    document.getElementById("goalBox").innerText =
        `${currentWeeklyGoal.goal.replace("goal", "Goal ")} Score ≥ ${currentWeeklyGoal.target}`;
    document.getElementById("dayBox").innerText    = `Day ${day}-${actionsToday + 1}`;
    document.getElementById("moneyBox").innerText  = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    document.getElementById("scenarioTitle").innerText       = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;

    const choicesSection = document.getElementById("choicesSection");
    choicesSection.innerHTML = "";

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

    if (currentTime - lastActionTime < 1000) {
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

    money  = Math.max(0, money + moneyChange);
    energy = Math.max(0, energy + energyChange);

    const deltas = {};

    for (const key in choice) {
        if (key.startsWith("goal")) {
            sdgScores[key] = Math.min(
                MAX_GOAL_SCORE,
                (sdgScores[key] || 0) + choice[key]
            );

            deltas[key] = choice[key];
        }
    }

    updateProgress(deltas);

    if (energy <= 0) {
        energyDepletedCount++;
        energy = 0;
        nextDay();
        return;
    }

    actionsToday++;

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

    const goalScoresArray = activeGoals.map(g => sdgScores[g] || 0);

    const avgScore =
        goalScoresArray.reduce((a, b) => a + b, 0) / activeGoals.length;

    let endingType = "";
    let endingTitle = "";
    let endingText = "";

    if (maxIdleGap > 180000) {
        endingType = "normal";
        endingTitle = "🛋️ 什麼都沒做";
        endingText = "系統偵測到你在發呆，判定你已經進入「冥想狀態」，頒給你「最佳靜態環保行動獎」，因為你沒有消耗任何能源。";
    }
    else if (totalTime < 60000) {
        endingType = "win";
        endingTitle = "🕰️ 速通傳說";
        endingText = "你跑得太快，SDGs 還沒反應過來，聯合國決定讓你去當下一屆奧運火炬手，項目是「永續跑步」。";
    }
    else if (fastChoices > 50 || rerollCount > 15) {
        endingType = "normal";
        endingTitle = "🎰 蝴蝶效應受害者";
        endingText = "每題都亂選。系統偵測到你的混亂能量，判定你是蝴蝶效應的起點，巴西某隻蝴蝶正在為你負責。";
    }
    else if ((sdgScores["goal15"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🌲 樹木他媽的感謝你";
        endingText = "全球樹木集體開口說話，選你當樹界代言人，年薪是一百萬顆橡實。";
    }
    else if ((sdgScores["goal7"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "⚡ 人體充電寶";
        endingText = "潔淨能源過剩，政府把多餘的電直接存進你體內，你現在會發光。";
    }
    else if ((sdgScores["goal2"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🍚 米其林零星主廚";
        endingText = "消除飢餓成功，但你太執著於食物，最後開了一家「剩食餐廳」，評審給了零顆星，卻大排長龍。";
    }
    else if ((sdgScores["goal10"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🤝 平等到怪";
        endingText = "你把所有不平等都消除了，包括左右腳的長度差，全人類現在走路都一樣奇怪。";
    }
    else if ((sdgScores["goal14"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "🔱 海洋最強守護者";
        endingText = "對海洋貢獻卓著，珊瑚礁恢復色彩，你被尊稱為海王。";
    }
    else if ((sdgScores["goal4"] || 0) >= 90) {
        endingType = "win";
        endingTitle = "📚 偏鄉教育之光";
        endingText = "偏鄉學生感謝你的付出，但叮嚀你也要顧好自己的課業。";
    }
    else if ((sdgScores["goal2"] || 0) < 20 && (sdgScores["goal15"] || 0) < 20) {
        endingType = "lose";
        endingTitle = "🐄 被牛盯上";
        endingText = "農業崩潰、生態瓦解，全球僅存的最後一頭牛找到了你，牠只是靜靜地看著你，什麼都沒說。";
    }
    else if ((sdgScores["goal13"] || 0) < 10) {
        endingType = "lose";
        endingTitle = "🐧 南極移民";
        endingText = "地球太熱了，你被迫搬去南極，和企鵝合租，牠不分攤水電費。";
    }
    else if ((sdgScores["goal14"] || 0) < 10) {
        endingType = "lose";
        endingTitle = "🐟 變成魚";
        endingText = "海洋生態崩潰，宇宙決定讓你親身體驗，你現在是一條吳郭魚。";
    }
    else if (avgScore < 30) {
        endingType = "lose";
        endingTitle = "🛸 外星人綁架結局";
        endingText = "因為對地球問題太消極，平均分數低於 30 分，你被外星人抓走進行再教育。";
    }
    else if (avgScore > 80) {
        endingType = "perfect";
        endingTitle = "🏆 永續發展領袖";
        endingText = "平均分數高於 80 分！各面向平衡發展，你成為了社區的領袖。";
    }
    else {
        endingType = "normal";
        endingTitle = "🌟 冒險結束";
        endingText = "一段平凡但圓滿的旅程（平均分在 30～80 之間）。";
    }

    saveResult(endingType, endingTitle, endingText);
}

function updateLeaderboard(resultType) {
    const currentUserName =
        localStorage.getItem("currentUserName") || "Unknown Player";

    const currentUserId =
        localStorage.getItem("currentUserId") || "Unknown ID";

    const selectedCategory =
        localStorage.getItem("selectedCategory") || "Environment";

    const scores =
        activeGoals.map(goal => sdgScores[goal] || 0);

    const totalScore =
        scores.reduce((sum, score) => sum + score, 0);

    const averageScore =
        Math.round(totalScore / activeGoals.length);

    let leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    const existingPlayerIndex =
        leaderboard.findIndex(player => player.id === currentUserId);

    const newRecord = {
        name: currentUserName,
        id: currentUserId,
        category: selectedCategory,
        score: averageScore,
        result: resultType,
        date: new Date().toLocaleDateString()
    };

    if (existingPlayerIndex === -1) {
        leaderboard.push(newRecord);
    } else {
        if (averageScore > leaderboard[existingPlayerIndex].score) {
            leaderboard[existingPlayerIndex] = newRecord;
        }
    }

    leaderboard.sort((a, b) => b.score - a.score);

    leaderboard = leaderboard.slice(0, 10);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}


// ─────────────────────────────────────────────
//  SAVE RESULT & REDIRECT
// ─────────────────────────────────────────────

function saveResult(type) {
    updateLeaderboard(type);
    localStorage.setItem("resultType", type);
    localStorage.setItem("money", money);
    localStorage.setItem("energy", energy);
    localStorage.setItem("energyDepletedCount", energyDepletedCount);
    localStorage.setItem("targetGoal", targetGoal);
    localStorage.setItem("targetScore", targetScore);
    localStorage.setItem("sdgScores", JSON.stringify(sdgScores));
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


// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

renderProgressBars();
refillQueue();
updateProgress();
setWeeklyGoal(1);