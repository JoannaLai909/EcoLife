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

    }
    const event = eventQueue.shift();
    lastEventTitle = event.title;
    return event;
}

// ─────────────────────────────────────────────
//  LOAD & DISPLAY AN EVENT
// ─────────────────────────────────────────────

function loadEvent() {
    const event = getNextEvent();

    document.getElementById("goalBox").innerText =
        `${targetGoal.replace("goal", "Goal ")} Score ≥ ${targetScore}`;
    document.getElementById("dayBox").innerText    = `DAY ${day} / ${maxDays}`;
    document.getElementById("moneyBox").innerText  = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;

    document.getElementById("scenarioTitle").innerText       = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;

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

function nextDay() {
    day++;
    actionsToday = 0;

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
refillQueue();
loadEvent();
updateProgress();