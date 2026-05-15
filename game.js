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
    goal1:  "#E5243B",
    goal2:  "#DDA63A",
    goal3:  "#4C9F38",
    goal4:  "#C5192D",
    goal5:  "#FF3A21",

    goal6:  "#26BDE2",
    goal7:  "#FCC30B",
    goal8:  "#A21942",
    goal9:  "#FD6925",
    goal10: "#DD1367",

    goal11: "#FD9D24",
    goal12: "#BF8B2E",
    goal13: "#3F7E44",
    goal14: "#0A97D9",
    goal15: "#56C02B",

    goal16: "#00689D",
    goal17: "#19486A"
};


// ─────────────────────────────────────────────
//  LOAD EVENTS BY CATEGORY
// ─────────────────────────────────────────────

let allEvents = [];

if (selectedCategory === "Environment") {
    allEvents = [...environmentEvents];
}

else if (selectedCategory === "Society") {
    allEvents = [...societyEvents];
}

else if (selectedCategory === "Development") {
    allEvents = [...developmentEvents];
}

else if (selectedCategory === "Global") {
    allEvents = [...globalEvents];
}

allEvents = shuffle(allEvents);


// ─────────────────────────────────────────────
//  GAME STATE
// ─────────────────────────────────────────────

let day                 = 1;
let actionsToday        = 0;

let money               = 100;
let energy              = 80;

let sdgScores           = {};
<<<<<<< HEAD

let energyDepletedCount = 0;
=======
let backpack            = [];
let energyDepletedCount = 0;   // 體力歸零次數（用於精疲力竭結局）
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
let midGoalRewarded     = false;
let hasAdvisorCard      = false;

// New Tracking Variables for Endings
let startTime           = Date.now();
let lastActionTime      = Date.now();
let maxIdleGap          = 0;
let rerollCount         = 0;
let fastChoices         = 0;

const maxActionsPerDay  = 4;
<<<<<<< HEAD
const maxDays           = 10;

let MAX_ENERGY          = 80;


// ─────────────────────────────────────────────
//  QUEUE STATE
// ─────────────────────────────────────────────
=======
const maxDays           = 21;   // 總共 21 天
let MAX_ENERGY          = 80;   // 可被獎勵永久提升
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755

let eventQueue     = [];
let lastEventTitle = null;


// ─────────────────────────────────────────────
//  GOAL TARGET
// ─────────────────────────────────────────────

const activeGoals =
    categoryGoals[selectedCategory];

const targetGoal =
    activeGoals[
        Math.floor(Math.random() * activeGoals.length)
    ];

const possibleScores =
    [30, 40, 50, 60];

const targetScore =
    possibleScores[
        Math.floor(Math.random() * possibleScores.length)
    ];


// ─────────────────────────────────────────────
//  DOM REFERENCES
// ─────────────────────────────────────────────

<<<<<<< HEAD
const menuBtn =
    document.getElementById("menuBtn");

const menuModal =
    document.getElementById("menuModal");

const closeMenuBtn =
    document.getElementById("closeMenuBtn");

const moneyPopup =
    document.getElementById("moneyPopup");

const shopBtn =
    document.getElementById("shopBtn");

const shopOverlay =
    document.getElementById("shopOverlay");

const shopCloseBtn =
    document.getElementById("shopCloseBtn");

const shopBalance =
    document.getElementById("shopBalance");

=======
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
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755

// ─────────────────────────────────────────────
//  UI LISTENERS
// ─────────────────────────────────────────────

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
backpackCloseBtn.addEventListener("click", () => backpackOverlay.classList.remove("shop-open"));

rerollBtn.addEventListener("click", () => {
    if (money >= 15) {
        money -= 15;
        rerollCount++;
        loadEvent();
        showToast("已更換題目 (💰 -15)");
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
    { id: "coffee", name: "熱咖啡", price: 30, energy: 20, desc: "提升 20 體力", icon: "☕" },
    { id: "energy_drink", name: "提神飲料", price: 50, energy: 40, desc: "提升 40 體力", icon: "🥤" }
];

// Add SDG potions based on category
activeGoals.forEach(goal => {
    shopItems.push({
        id: `potion_${goal}`,
        name: `${goal.replace("goal", "SDG ")} 藥水`,
        price: 45,
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
        const oldEnergy = energy;
        energy = Math.min(MAX_ENERGY, energy + item.energy);
        effectMsg = `體力提升了 ${energy - oldEnergy} (目前: ${energy}⚡)`;
    }
    if (item.goalKey) {
        const gain = (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1);
        sdgScores[item.goalKey] = (sdgScores[item.goalKey] || 0) + gain;
        updateProgress();
        effectMsg = `${item.goalKey.replace("goal", "Goal ")} 進度提升了 ${gain} (目前: ${sdgScores[item.goalKey]})`;
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
    toast.classList.add("active");
    setTimeout(() => toast.classList.remove("active"), 3000);
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
        backpackGrid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; font-size: 20px;'>背包是空的</p>";
        return;
    }
    backpack.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "shop-card";
        card.innerHTML = `
            <div style="font-size: 40px; margin-bottom: 10px;">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <button class="use-item-btn" style="width: 100%; padding: 8px; margin-top: 10px; background: #114bb8; color: white; border: none; border-radius: 8px; cursor: pointer;">使用</button>
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

        const j =
            Math.floor(Math.random() * (i + 1));

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


function getNextEvent() {

    if (eventQueue.length === 0) {
        refillQueue();
    }

    /*
       錢太少時，優先出 money 題。
       這樣玩家快沒錢時比較不會卡死。
    */

    if (money <= 80) {

        let moneyEvents =
            eventQueue.filter(event =>
                event.type === "money" &&
                event.title !== lastEventTitle
            );

        /*
           如果目前 queue 裡沒有 money 題，
           就從整個 allEvents 裡再找一次。
        */

        if (moneyEvents.length === 0) {

            moneyEvents =
                allEvents.filter(event =>
                    event.type === "money" &&
                    event.title !== lastEventTitle
                );

        }

        if (moneyEvents.length > 0) {

            const randomMoneyEvent =
                moneyEvents[
                    Math.floor(Math.random() * moneyEvents.length)
                ];

            eventQueue =
                eventQueue.filter(event =>
                    event.title !== randomMoneyEvent.title
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

    document.getElementById("dayBox").innerText =
        `DAY ${day} / ${maxDays}`;

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


    /*
       顧問卡：
       第五天中途獎勵可能取得。
       可以跳過一次題目。
    */

    if (hasAdvisorCard) {

        const advisorBtn =
            document.createElement("button");

        advisorBtn.id =
            "advisorCardBtn";

        advisorBtn.innerText =
            "🃏 使用顧問卡（跳過此題）";

        advisorBtn.addEventListener("click", () => {

            hasAdvisorCard = false;

            actionsToday++;

            if (actionsToday >= maxActionsPerDay) {
                nextDay();
            }

            else {
                loadEvent();
            }

        });

        choicesSection.appendChild(advisorBtn);

    }


    event.choices.forEach(choice => {

        const moneyChange =
            choice.money ?? 0;

        const energyChange =
            choice.energy ?? 0;

        const card =
            document.createElement("div");

        card.classList.add("choice-card");

        card.innerHTML = `
            <h3>${choice.text}</h3>

            <div class="effects">
                💰 ${moneyChange} <br>
                ⚡ ${energyChange}
            </div>
        `;

        card.addEventListener("click", () => {
            handleChoice(choice);
        });

        choicesSection.appendChild(card);

    });

}


// ─────────────────────────────────────────────
//  HANDLE A CHOICE
// ─────────────────────────────────────────────

function handleChoice(choice) {
    // Tracking for endings
    const currentTime = Date.now();
    const idleGap = currentTime - lastActionTime;
    if (idleGap > maxIdleGap) maxIdleGap = idleGap;

    if (currentTime - lastActionTime < 1000) {
        fastChoices++;
    }
    lastActionTime = currentTime;

    const moneyChange =
        choice.money ?? 0;

    const energyChange =
        choice.energy ?? 0;

    if (money + moneyChange < 0) {

        moneyPopup.classList.add("active");

        setTimeout(() => {
            moneyPopup.classList.remove("active");
        }, 1500);

        return;

    }

    money =
        Math.max(0, money + moneyChange);

    energy =
        Math.max(0, energy + energyChange);


    const deltas = {};
    for (const key in choice) {

        if (key.startsWith("goal")) {
<<<<<<< HEAD

            sdgScores[key] =
                (sdgScores[key] || 0) + choice[key];

=======
            sdgScores[key] = (sdgScores[key] || 0) + choice[key];
            deltas[key] = choice[key];
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
        }

    }

    updateProgress(deltas);


    /*
       體力歸零：
       不直接 Game Over，
       而是進入下一天。
    */

    if (energy <= 0) {

        energyDepletedCount++;

        energy = 0;

        nextDay();

        return;

    }

    actionsToday++;

    if (actionsToday >= maxActionsPerDay) {
        nextDay();
    }

    else {
        loadEvent();
    }

}


// ─────────────────────────────────────────────
//  PROGRESS BARS
// ─────────────────────────────────────────────

<<<<<<< HEAD
function updateProgress() {

    activeGoals.forEach(goal => {

        const fill =
            document.getElementById(`${goal}Fill`);

        if (fill) {

            const score =
                Math.max(0, sdgScores[goal] || 0);

            const percent =
                Math.min((score / targetScore) * 100, 100);

            fill.style.width =
                `${percent}%`;

=======
function updateProgress(deltas = {}) {
    activeGoals.forEach(goal => {
        const fill = document.getElementById(`${goal}Fill`);
        const text = document.getElementById(`${goal}Text`);
        const deltaSpan = document.getElementById(`${goal}Delta`);

        if (fill) {
            const score = Math.min(sdgScores[goal] || 0, 250);
            const percent = (score / 250) * 100;
            fill.style.width = `${percent}%`;
            if (text) {
                text.innerText = `${score} / 250`;
            }
        }

        if (deltaSpan && deltas[goal]) {
            const val = deltas[goal];
            const sign = val > 0 ? "+" : "";
            deltaSpan.innerText = `${sign}${val}`;
            deltaSpan.style.color = val > 0 ? "#2e7d32" : "#d32f2f";
            deltaSpan.style.opacity = "1";
            
            // Fade out after a moment
            setTimeout(() => {
                deltaSpan.style.opacity = "0";
            }, 1500);
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
        }

    });

}


// ─────────────────────────────────────────────
//  DAY 5 MID-GAME REWARD
//  第 5 天結束後，進入第 6 天時觸發
// ─────────────────────────────────────────────

function checkMidGameReward() {

    const currentScore =
        sdgScores[targetGoal] || 0;

    const ratio =
        currentScore / targetScore;

    let rewardMessage = "";


    if (ratio >= 1.0) {

        money += 50;

        MAX_ENERGY += 20;

        energy = MAX_ENERGY;

        hasAdvisorCard = true;

        rewardMessage =
            `🎉 第五天中途目標完美達成！\n\n` +
            `獎勵：\n` +
            `💰 +50 金錢\n` +
            `⚡ 體力上限永久提升至 ${MAX_ENERGY}\n` +
            `🃏 獲得顧問卡一張（可跳過一次選項）`;

    }

    else if (ratio >= 0.8) {

        money += 30;

        hasAdvisorCard = true;

        rewardMessage =
            `✅ 第五天中途進展良好！\n\n` +
            `獎勵：\n` +
            `💰 +30 金錢\n` +
            `🃏 獲得顧問卡一張（可跳過一次選項）`;

    }

    else if (ratio >= 0.5) {

        money += 30;

        rewardMessage =
            `👍 第五天中途目標達到一半！\n\n` +
            `獎勵：\n` +
            `💰 +30 金錢\n\n` +
            `繼續加油，還有 5 天！`;

    }

    else {

        rewardMessage =
            `📋 第五天中途回顧\n\n` +
            `目標進度還不夠，後半段要加把勁！\n` +
            `剩下 5 天，還有機會逆轉！`;

    }

    document.getElementById("moneyBox").innerText =
        `💰 ${money}`;

    document.getElementById("energyBox").innerText =
        `⚡ ${energy}`;

    alert(rewardMessage);

}


// ─────────────────────────────────────────────
//  NEXT DAY
// ─────────────────────────────────────────────

function nextDay() {

    day++;

    actionsToday = 0;

    energy = MAX_ENERGY;


    /*
       第 5 天結束後，進入第 6 天時觸發中途獎勵。
    */

    if (day === 6 && !midGoalRewarded) {

        midGoalRewarded = true;

        checkMidGameReward();

    }


    /*
       第 10 天結束後，day 會變成 11，
       此時進入結算。
    */

    if (day > maxDays) {

        determineEnding();

        return;

    }

    loadEvent();

}


// ─────────────────────────────────────────────
//  ENDING SYSTEM
// ─────────────────────────────────────────────

function determineEnding() {
<<<<<<< HEAD

    const goalScore =
        sdgScores[targetGoal] || 0;

    const goalRatio =
        goalScore / targetScore;

    const otherGoalsTotal =
        activeGoals
            .filter(goal => goal !== targetGoal)
            .reduce((sum, goal) => {
                return sum + (sdgScores[goal] || 0);
            }, 0);
=======
    const totalTime = Date.now() - startTime;
    const goalScore = sdgScores[targetGoal] || 0;
    const goalRatio = goalScore / targetScore;

    let endingType = "";
    let endingTitle = "";
    let endingText = "";
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755

    // 1. Did Nothing Ending (High Idle Gap)
    if (maxIdleGap > 180000) {
        endingType = "normal";
        endingTitle = "🛋️ 什麼都沒做";
        endingText = "系統偵測到你在發呆，判定你已經進入「冥想狀態」，頒給你「最佳靜態環保行動獎」，因為你沒有消耗任何能源。";
    }
    // 2. Speedrun Ending (Very Fast Completion)
    else if (totalTime < 60000) {
        endingType = "win";
        endingTitle = "🕰️ 速通傳說";
        endingText = "你跑得太快，SDGs 還沒反應過來，聯合國決定讓你去當下一屆奧運火炬手，項目是「永續跑步」。";
    }
    // 3. Butterfly Effect Victim (Chaos/Randomness)
    else if (fastChoices > 50 || rerollCount > 15) {
        endingType = "normal";
        endingTitle = "🎰 蝴蝶效應受害者";
        endingText = "每題都亂選。系統偵測到你的混亂能量，判定你是蝴蝶效應的起點，巴西某隻蝴蝶正在為你負責。";
    }
    // 4. Watched by a Cow (Low Goal 2 and 15)
    else if ((sdgScores["goal2"] || 0) < 50 && (sdgScores["goal15"] || 0) < 50) {
        endingType = "lose";
        endingTitle = "🐄 被牛盯上";
        endingText = "農業崩潰、生態瓦解，全球僅存的最後一頭牛找到了你，牠只是靜靜地看著你，什麼都沒說，但你感到深深的羞恥。";
    }
    // 5. Antarctic Immigrant (Low Goal 13)
    else if ((sdgScores["goal13"] || 0) < 25) {
        endingType = "lose";
        endingTitle = "🐧 南極移民";
        endingText = "地球太熱了，你被迫搬去南極，和企鵝合租，牠不分攤水電費。";
    }
    // 6. Become a Fish (Low Goal 14)
    else if ((sdgScores["goal14"] || 0) < 25) {
        endingType = "lose";
        endingTitle = "🐟 變成魚";
        endingText = "海洋生態崩潰，宇宙決定讓你親身體驗，你現在是一條吳郭魚，在台中某個魚塭裡。";
    }
    // 7. Tree's Mom Thanks You (High Goal 15)
    else if ((sdgScores["goal15"] || 0) >= 225) {
        endingType = "win";
        endingTitle = "🌲 樹木他媽的感謝你";
        endingText = "全球樹木集體開口說話，選你當樹界代言人，年薪是一百萬顆橡實。";
    }
    // 8. Human Power Bank (High Goal 7)
    else if ((sdgScores["goal7"] || 0) >= 225) {
        endingType = "win";
        endingTitle = "⚡ 人體充電寶";
        endingText = "潔淨能源過剩，政府把多餘的電直接存進你體內，你現在會發光。";
    }
    // 9. Michelin Zero-Star Chef (High Goal 2)
    else if ((sdgScores["goal2"] || 0) >= 225) {
        endingType = "win";
        endingTitle = "🍚 米其林零星主廚";
        endingText = "消除飢餓成功，但你太執著於食物，最後開了一家「剩食餐廳」，評審給了零顆星，卻大排長龍。";
    }
    // 10. Weirdly Equal (High Goal 10)
    else if ((sdgScores["goal10"] || 0) >= 225) {
        endingType = "win";
        endingTitle = "🤝 平等到怪";
        endingText = "你把所有不平等都消除了，包括左右腳的長度差，全人類現在走路都一樣奇怪。";
    }
    // Original Main Endings
    else {
        const otherGoalsTotal = activeGoals
            .filter(g => g !== targetGoal)
            .reduce((sum, g) => sum + (sdgScores[g] || 0), 0);

<<<<<<< HEAD

    if (
        goalRatio >= 1.0 &&
        money >= 80 &&
        energyDepletedCount === 0
    ) {

        ending = "perfect";

    }

    else if (goalRatio >= 1.0) {

        ending = "win";

    }

    else if (
        goalRatio < 1.0 &&
        goalScore > 0 &&
        otherGoalsTotal >= goalScore * 2 &&
        otherGoalsTotal >= targetScore
    ) {

        ending = "butterfly";

    }

    else if (energyDepletedCount >= 3) {

        ending = "exhausted";

    }

    else if (money <= 10) {

        ending = "broke";

    }

    else if (goalRatio >= 0.7) {

        ending = "almost";

    }

    else {

        ending = "lose";

    }

    saveResult(ending);

=======
        if (goalRatio >= 1.0 && money >= 80 && energyDepletedCount === 0) {
            endingType = "perfect";
        } else if (goalRatio >= 1.0) {
            endingType = "win";
        } else if (
            goalRatio < 1.0 &&
            goalScore > 0 &&
            otherGoalsTotal >= goalScore * 2 &&
            otherGoalsTotal >= targetScore
        ) {
            endingType = "butterfly";
        } else if (energyDepletedCount >= 3) {
            endingType = "exhausted";
        } else if (money <= 10) {
            endingType = "broke";
        } else if (goalRatio >= 0.7) {
            endingType = "almost";
        } else {
            endingType = "lose";
        }
    }

    saveResult(endingType, endingTitle, endingText);
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
}


// ─────────────────────────────────────────────
//  SAVE RESULT & REDIRECT
// ─────────────────────────────────────────────

<<<<<<< HEAD
function saveResult(type) {

    localStorage.setItem("resultType", type);

    localStorage.setItem("money", money);

    localStorage.setItem("energy", energy);

    localStorage.setItem("energyDepletedCount", energyDepletedCount);

    localStorage.setItem("targetGoal", targetGoal);

    localStorage.setItem("targetScore", targetScore);

    localStorage.setItem("sdgScores", JSON.stringify(sdgScores));

=======
function saveResult(type, title = "", text = "") {
    localStorage.setItem("resultType",           type);
    localStorage.setItem("endingTitle",          title);
    localStorage.setItem("endingText",           text);
    localStorage.setItem("money",                money);
    localStorage.setItem("energy",               energy);
    localStorage.setItem("energyDepletedCount",  energyDepletedCount);
    localStorage.setItem("targetGoal",           targetGoal);
    localStorage.setItem("targetScore",          targetScore);
    localStorage.setItem("sdgScores",            JSON.stringify(sdgScores));
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
    menuModal.classList.remove("active");

    window.location.href = "result.html";

}


// ─────────────────────────────────────────────
//  RENDER PROGRESS BARS
// ─────────────────────────────────────────────

<<<<<<< HEAD
=======
/* =========================
   END WHEN NO UNIQUE EVENTS
========================= */

function endGameByNoMoreEvents() {
    determineEnding();
}


/* =========================
   RENDER PROGRESS BARS
========================= */

>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
function renderProgressBars() {

    const progressList =
        document.getElementById("progressList");

    progressList.innerHTML = "";

    activeGoals.forEach(goal => {
<<<<<<< HEAD

        progressList.innerHTML += `
            <div class="progress-item">

                <span>
                    ${goal.replace("goal", "Goal ")}
                </span>

                <div class="bar">
                    <div
                        class="fill"
                        id="${goal}Fill"
                        style="background:${goalColors[goal]}"
                    ></div>
=======
        const score = Math.min(sdgScores[goal] || 0, 250);
        const percent = (score / 250) * 100;
        progressList.innerHTML += `
            <div class="progress-item" style="position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${goal.replace("goal", "Goal ")}</span>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span id="${goal}Delta" style="font-weight: bold; font-size: 14px; opacity: 0; transition: opacity 0.3s, transform 0.3s; transform: translateY(5px);"></span>
                        <span id="${goal}Text" style="font-weight: bold; color: #114bb8;">${score} / 250</span>
                    </div>
                </div>

                <div class="bar">
                    <div class="fill" id="${goal}Fill" style="background:${goalColors[goal]}; width: ${percent}%;"></div>
>>>>>>> 1e6dfe5c979868cc1c51bbc02b0018d5b1c93755
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