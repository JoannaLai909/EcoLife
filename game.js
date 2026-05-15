const selectedCategory =
    localStorage.getItem("selectedCategory") || "Environment";


/* =========================
   CATEGORY GOALS
========================= */

const categoryGoals = {
    Environment: ["goal6", "goal12", "goal13", "goal14", "goal15"],
    Society: ["goal1", "goal2", "goal3", "goal4", "goal5", "goal10"],
    Development: ["goal7", "goal8", "goal9", "goal11"],
    Global: ["goal16", "goal17"]
};


const allEventPools = {
    Environment: typeof environmentEvents !== 'undefined' ? environmentEvents : [],
    Society: typeof societyEvents !== 'undefined' ? societyEvents : [],
    Development: typeof developmentEvents !== 'undefined' ? developmentEvents : [],
    Global: typeof globalEvents !== 'undefined' ? globalEvents : []
};


const activeGoals =
    categoryGoals[selectedCategory] || categoryGoals.Environment;


let allEvents =
    allEventPools[selectedCategory] && allEventPools[selectedCategory].length > 0 
    ? allEventPools[selectedCategory] 
    : (allEventPools.Environment.length > 0 ? allEventPools.Environment : []);


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
let backpack = [];

let usedEventKeys = [];

let targetEvents = [];
let fallbackEvents = [];

let activeWeeklyGoal = null;

// New Tracking Variables for Endings
let startTime = Date.now();
let lastActionTime = Date.now();
let maxIdleGap = 0;
let rerollCount = 0;
let fastChoices = 0;


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
const shopCloseBtn = document.getElementById("shopCloseBtn");
const shopBalance = document.getElementById("shopBalance");
const shopGrid = document.getElementById("shopGrid");

const buyConfirmModal = document.getElementById("buyConfirmModal");
const buyConfirmTitle = document.getElementById("buyConfirmTitle");
const buyConfirmMessage = document.getElementById("buyConfirmMessage");
const useNowBtn = document.getElementById("useNowBtn");
const storeInBagBtn = document.getElementById("storeInBagBtn");
const cancelBuyBtn = document.getElementById("cancelBuyBtn");

const backpackBtn = document.getElementById("backpackBtn");
const backpackOverlay = document.getElementById("backpackOverlay");
const backpackCloseBtn = document.getElementById("backpackCloseBtn");
const backpackGrid = document.getElementById("backpackGrid");

const goalBox = document.getElementById("goalBox");

const goalPopup = document.getElementById("goalPopup");
const closeGoalPopupBtn = document.getElementById("closeGoalPopupBtn");

const goalPopupNumber = document.getElementById("goalPopupNumber");
const goalPopupTitle = document.getElementById("goalPopupTitle");
const goalPopupSub = document.getElementById("goalPopupSub");
const goalPopupDesc = document.getElementById("goalPopupDesc");

const dailyModal = document.getElementById("dailyModal");
const closeDailyBtn = document.getElementById("closeDailyBtn");


/* =========================
   MENU & MODALS
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

if (closeDailyBtn) {
    closeDailyBtn.addEventListener("click", () => {
        dailyModal.classList.remove("active");
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
   SHOP & BACKPACK
========================= */

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
        energy = Math.min(100, energy + item.energy);
        effectMsg = `體力提升了 ${energy - oldEnergy} (目前: ${energy}⚡)`;
    }
    if (item.goalKey) {
        // Normal distribution approximation: sum of two 1-4 random numbers
        const gain = (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1);
        const oldScore = sdgScores[item.goalKey] || 0;
        sdgScores[item.goalKey] = oldScore + gain;
        updateProgress();
        effectMsg = `${item.goalKey.replace("goal", "Goal ")} 進度提升了 ${gain}% (目前: ${sdgScores[item.goalKey]}%)`;
    }
    updateStatusBars();
    showToast(`使用了 ${item.name}！\n${effectMsg}`);
}

function showToast(msg) {
    const toast = document.getElementById("shopToast");
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

if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        shopBalance.innerText = `💰 ${money}`;
        renderShop();
        shopOverlay.classList.add("shop-open");
    });
}

if (shopCloseBtn) {
    shopCloseBtn.addEventListener("click", () => {
        shopOverlay.classList.remove("shop-open");
    });
}

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

if (backpackBtn) {
    backpackBtn.addEventListener("click", () => {
        renderBackpack();
        backpackOverlay.classList.add("shop-open");
    });
}

if (backpackCloseBtn) {
    backpackCloseBtn.addEventListener("click", () => {
        backpackOverlay.classList.remove("shop-open");
    });
}


/* =========================
   UPDATE STATUS BARS
========================= */

function updateStatusBars() {
    document.getElementById("moneyBox").innerText = `💰 ${money}`;
    document.getElementById("energyBox").innerText = `⚡ ${energy}`;
    document.getElementById("dayBox").innerText = `DAY ${day}-${actionsToday + 1}`;
}

const rerollBtn = document.getElementById("rerollBtn");
if (rerollBtn) {
    rerollBtn.addEventListener("click", () => {
        if (money >= 15) {
            money -= 15;
            rerollCount++;
            updateStatusBars();
            loadEvent();
            showToast("已更換題目 (💰 -15)");
        } else {
            moneyPopup.classList.add("active");
            setTimeout(() => moneyPopup.classList.remove("active"), 1500);
        }
    });
}


/* =========================
   PICK TARGET GOAL
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
    if (activeWeeklyGoal) {
        const daysLeft = 7 - ((day - activeWeeklyGoal.daySet));
        goalBox.innerText =
            `${activeWeeklyGoal.goalKey.replace("goal", "Goal ")} ≥ ${activeWeeklyGoal.targetValue} (${daysLeft} Days Left)`;
    } else {
        goalBox.innerText = "No Active Goal";
    }
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

    if (energy <= 0) {
        // Skip remaining choices for today if energy is 0
        showToast("體力耗盡，今天無法再進行活動...");
        setTimeout(() => nextDay(), 1500);
        return;
    }

    const event = getNextEvent();

    if (!event) {
        endGameByNoMoreEvents();
        return;
    }

    document.getElementById("scenarioTitle").innerText = event.title;
    document.getElementById("scenarioDescription").innerText = event.description;

    updateStatusBars();

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
            handleChoice(choice);
        });

        choicesSection.appendChild(card);
    });
}


/* =========================
   HANDLE CHOICE
========================= */

function handleChoice(choice) {
    // Tracking for endings
    const currentTime = Date.now();
    const idleGap = currentTime - lastActionTime;
    if (idleGap > maxIdleGap) maxIdleGap = idleGap;

    if (currentTime - lastActionTime < 1000) {
        fastChoices++;
    }
    lastActionTime = currentTime;

    if (money + (choice.money || 0) < 0) {
        moneyPopup.classList.add("active");

        setTimeout(() => {
            moneyPopup.classList.remove("active");
        }, 1500);

        return;
    }

    money += choice.money || 0;
    
    // Increase stamina consumption (multiply by 1.8 to make energy management important)
    let staminaCost = choice.energy || 0;
    if (staminaCost < 0) {
        staminaCost = Math.floor(staminaCost * 1.8); 
    }
    
    energy += staminaCost;
    money = Math.max(0, money);
    energy = Math.max(0, energy);

    // Track deltas for display
    const deltas = {};

    for (let key in choice) {
        if (key.startsWith("goal")) {
            if (!sdgScores[key]) {
                sdgScores[key] = 0;
            }
            deltas[key] = choice[key];
            sdgScores[key] += choice[key];
        }
    }

    updateProgress(deltas);

    actionsToday++;

    if (actionsToday >= maxActionsPerDay || energy <= 0) {
        nextDay();
    } else {
        loadEvent();
    }
}


/* =========================
   UPDATE PROGRESS
========================= */

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
        }
    });
}


/* =========================
   NEXT DAY
========================= */

function showDailyPopup() {
    const dailyModalTitle = document.getElementById("dailyModalTitle");
    const dailyModalMessage = document.getElementById("dailyModalMessage");
    const rewardSection = document.getElementById("rewardSection");
    const rewardMessage = document.getElementById("rewardMessage");
    const goalSection = document.getElementById("goalSection");
    const goalDetails = document.getElementById("goalDetails");
    const goalTitle = document.getElementById("goalTitle");
    const goalDescription = document.getElementById("goalDescription");

    if (!dailyModalTitle || !dailyModal) return;

    dailyModalTitle.innerText = `DAY ${day}`;
    dailyModalMessage.innerText = "新的一天開始了！加油！";
    rewardSection.style.display = "none";
    goalDetails.style.display = "none";

    // 1. Check if previous goal was completed (on Day 8 and 15)
    if ((day === 8 || day === 15) && activeWeeklyGoal) {
        if ((sdgScores[activeWeeklyGoal.goalKey] || 0) >= activeWeeklyGoal.targetValue) {
            // Apply the PRE-DETERMINED reward from the previous week
            let rewardTxt = "恭喜達成上週目標！獲得獎勵：";
            if (activeWeeklyGoal.rewardType === "money") {
                money += 50;
                rewardTxt += "💰 +50";
            } else {
                const randomGoal = activeGoals[Math.floor(Math.random() * activeGoals.length)];
                sdgScores[randomGoal] = (sdgScores[randomGoal] || 0) + 25;
                rewardTxt += `${randomGoal.replace("goal", "Goal ")} 分數 +25`;
                updateProgress();
            }
            rewardMessage.innerText = rewardTxt;
            rewardMessage.style.color = "#2e7d32";
            rewardSection.style.display = "block";
            rewardSection.style.background = "#e8f5e9";
        } else {
            rewardMessage.innerText = "很可惜，未達成上週目標，繼續努力！";
            rewardMessage.style.color = "#d32f2f";
            rewardSection.style.display = "block";
            rewardSection.style.background = "#ffebee";
        }
    }

    // 2. Set new goal and PRE-DETERMINE its reward on Day 1, 8, 15
    if (day === 1 || day === 8 || day === 15) {
        let targetValue = 62;
        if (day === 8) targetValue = 162;
        if (day === 15) targetValue = 237;

        const randomGoal = activeGoals[Math.floor(Math.random() * activeGoals.length)];
        
        // Pre-determine reward type for this new goal
        const rewardType = Math.random() > 0.5 ? "money" : "sdg";
        const rewardPreview = rewardType === "money" ? "💰 +50" : "隨機一項 SDG 分數 +25";

        activeWeeklyGoal = {
            goalKey: randomGoal,
            targetValue: targetValue,
            daySet: day,
            rewardType: rewardType,
            rewardPreview: rewardPreview
        };

        goalTitle.innerText = "本週小目標";
        goalDescription.innerHTML = `在接下來的 7 天內，讓 <b>${randomGoal.replace("goal", "Goal ")}</b> 的分數達到 <b>${targetValue}</b> 以上！<br><br><span style="color: #2e7d32; font-weight: bold;">達成獎勵：${rewardPreview}</span>`;
        goalDetails.style.display = "block";
    }

    updateGoalBox();
    dailyModal.classList.add("active");
}

function nextDay() {
    day++;
    actionsToday = 0;
    energy = 80;

    if (day > maxDays) {
        finishGame();
        return;
    }

    showDailyPopup();
    loadEvent();
}

function finishGame() {
    // Calculate final outcome
    let resultType = "normal";
    let endingTitle = "冒險結束";
    let endingText = "您的 EcoLife 冒險圓滿落幕。";

    const totalTime = Date.now() - startTime;
    const avgScore = activeGoals.reduce((sum, goal) => sum + (sdgScores[goal] || 0), 0) / activeGoals.length;

    // 1. Did Nothing Ending (High Idle Gap)
    if (maxIdleGap > 180000) {
        resultType = "normal";
        endingTitle = "🛋️ 什麼都沒做";
        endingText = "系統偵測到你在發呆，判定你已經進入「冥想狀態」，頒給你「最佳靜態環保行動獎」，因為你沒有消耗任何能源。";
    }
    // 2. Speedrun Ending (Very Fast Completion)
    else if (totalTime < 60000) {
        resultType = "win";
        endingTitle = "🕰️ 速通傳說";
        endingText = "你跑得太快，SDGs 還沒反應過來，聯合國決定讓你去當下一屆奧運火炬手，項目是「永續跑步」。";
    }
    // 3. Butterfly Effect Victim (Chaos/Randomness)
    else if (fastChoices > 50 || rerollCount > 15) {
        resultType = "normal";
        endingTitle = "🎰 蝴蝶效應受害者";
        endingText = "每題都亂選。系統偵測到你的混亂能量，判定你是蝴蝶效應的起點，巴西某隻蝴蝶正在為你負責。";
    }
    // 4. Watched by a Cow (Low Goal 2 and 15)
    else if ((sdgScores["goal2"] || 0) < 20 && (sdgScores["goal15"] || 0) < 20) {
        resultType = "lose";
        endingTitle = "🐄 被牛盯上";
        endingText = "農業崩潰、生態瓦解，全球僅存的最後一頭牛找到了你，牠只是靜靜地看著你，什麼都沒說，但你感到深深的羞恥。";
    }
    // 5. Antarctic Immigrant (Low Goal 13)
    else if ((sdgScores["goal13"] || 0) < 10) {
        resultType = "lose";
        endingTitle = "🐧 南極移民";
        endingText = "地球太熱了，你被迫搬去南極，和企鵝合租，牠不分攤水電費。";
    }
    // 6. Become a Fish (Low Goal 14)
    else if ((sdgScores["goal14"] || 0) < 10) {
        resultType = "lose";
        endingTitle = "🐟 變成魚";
        endingText = "海洋生態崩潰，宇宙決定讓你親身體驗，你現在是一條吳郭魚，在台中某個魚塭裡。";
    }
    // 7. Tree's Mom Thanks You (High Goal 15)
    else if ((sdgScores["goal15"] || 0) >= 90) {
        resultType = "win";
        endingTitle = "🌲 樹木他媽的感謝你";
        endingText = "全球樹木集體開口說話，選你當樹界代言人，年薪是一百萬顆橡實。";
    }
    // 8. Human Power Bank (High Goal 7)
    else if ((sdgScores["goal7"] || 0) >= 90) {
        resultType = "win";
        endingTitle = "⚡ 人體充電寶";
        endingText = "潔淨能源過剩，政府把多餘的電直接存進你體內，你現在會發光。";
    }
    // 9. Michelin Zero-Star Chef (High Goal 2)
    else if ((sdgScores["goal2"] || 0) >= 90) {
        resultType = "win";
        endingTitle = "🍚 米其林零星主廚";
        endingText = "消除飢餓成功，但你太執著於食物，最後開了一家「剩食餐廳」，評審給了零顆星，卻大排長龍。";
    }
    // 10. Weirdly Equal (High Goal 10)
    else if ((sdgScores["goal10"] || 0) >= 90) {
        resultType = "win";
        endingTitle = "🤝 平等到怪";
        endingText = "你把所有不平等都消除了，包括左右腳的長度差，全人類現在走路都一樣奇怪。";
    }
    // Existing Logic
    else if (avgScore < 30) { 
        resultType = "lose";
        endingTitle = "外星人綁架！";
        endingText = "由於您對地球環境與社會問題採取消極態度，外星人決定將您帶走進行『環境意識再教育』。地球的未來堪憂...";
    } else if (sdgScores["goal14"] >= 90) { 
        resultType = "win";
        endingTitle = "海洋最強守護者";
        endingText = "您對海洋環境的保護貢獻卓著！珊瑚礁重新綻放色彩，鯨魚也回來了。您被封為『海洋最強守護者』！";
    } else if (sdgScores["goal4"] >= 90) { 
        resultType = "win";
        endingTitle = "偏鄉教育之光";
        endingText = "偏鄉的孩子們非常感謝您的付出，因為您的努力，他們獲得了更好的學習資源。但也要記得：助人的同時，自己的課業也要好好加油喔！";
    } else if (avgScore >= 85) { 
        resultType = "win";
        endingTitle = "永續發展領袖";
        endingText = "您在各個面向都取得了平衡且傑出的進展。您不僅改變了自己的生活，也帶領社區邁向更美好的未來！";
    }

    localStorage.setItem("resultType", resultType);
    localStorage.setItem("endingTitle", endingTitle);
    localStorage.setItem("endingText", endingText);
    localStorage.setItem("money", money);
    localStorage.setItem("energy", energy);
    localStorage.setItem("sdgScores", JSON.stringify(sdgScores));

    window.location.href = "result.html";
}


/* =========================
   END WHEN NO UNIQUE EVENTS
========================= */

function endGameByNoMoreEvents() {
    finishGame();
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


/* =========================
   RENDER PROGRESS BARS
========================= */

function renderProgressBars() {
    const progressList = document.getElementById("progressList");

    progressList.innerHTML = "";

    activeGoals.forEach(goal => {
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
                </div>
            </div>
        `;
    });
}


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
    if (activeWeeklyGoal) {
        return Number(activeWeeklyGoal.goalKey.replace("goal", ""));
    }
    return 13;
}


function openGoalPopup() {
    const goalNumber = getGoalNumberFromBox();
    const goalData = goalInfoData[goalNumber];

    if (!goalData) {
        return;
    }

    const daysLeft = activeWeeklyGoal ? (7 - (day - activeWeeklyGoal.daySet)) : 0;

    goalPopupNumber.innerText = goalNumber;
    goalPopupTitle.innerText = "Goal " + goalNumber;
    goalPopupSub.innerText = goalData.title;
    goalPopupDesc.innerText = `${goalData.desc}\n\n[剩餘時間：${daysLeft} 天]`;

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


/* =========================
   START GAME
========================= */

renderProgressBars();
showDailyPopup();
loadEvent();
updateProgress();