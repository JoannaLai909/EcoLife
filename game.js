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

let energyDepletedCount = 0;
let midGoalRewarded     = false;
let hasAdvisorCard      = false;

const maxActionsPerDay  = 4;
const maxDays           = 10;

let MAX_ENERGY          = 80;


// ─────────────────────────────────────────────
//  QUEUE STATE
// ─────────────────────────────────────────────

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
    shopOverlay.classList.add("shop-open");
});

shopCloseBtn.addEventListener("click", () => {
    shopOverlay.classList.remove("shop-open");
});


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


    for (const key in choice) {

        if (key.startsWith("goal")) {

            sdgScores[key] =
                (sdgScores[key] || 0) + choice[key];

        }

    }

    updateProgress();


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

    let ending = "";


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

}


// ─────────────────────────────────────────────
//  SAVE RESULT & REDIRECT
// ─────────────────────────────────────────────

function saveResult(type) {

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

function renderProgressBars() {

    const progressList =
        document.getElementById("progressList");

    progressList.innerHTML = "";

    activeGoals.forEach(goal => {

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