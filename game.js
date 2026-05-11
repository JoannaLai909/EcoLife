const events = [

    {
        category: "Environment",

        title: "顏萱的淨灘邀約",

        description:
        "顏萱揪你週末一起去淨灘。",

        choices: [

            {
                text: "跟她一起去",
                money: 0,
                energy: -20,
                goal14: 10
            },

            {
                text: "昨天熬夜太累，想休息",
                money: 0,
                energy: 8,
                goal14: -5
            },

            {
                text: "不行我要去打工",
                money: 13,
                energy: -9,
                goal8: 5
            }

        ]
    },

    {
        category: "Environment",

        title: "凱咪的環保杯",

        description:
        "凱咪發現你買飲料沒帶杯子。",

        choices: [

            {
                text: "回宿舍拿",
                money: 5,
                energy: -12,
                goal12: 8
            },

            {
                text: "直接買",
                money: 0,
                energy: 2,
                goal12: -3
            },

            {
                text: "算了不喝了",
                money: 50,
                energy: -5,
                goal12: 5
            }

        ]
    }

];

let currentEvent = 0;
let day = 1;
let money = 100;
let energy = 80;
let sdgScores = {

    goal7: 0,
    goal8: 0,
    goal12: 0,
    goal13: 0,
    goal14: 0

};

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


const selectedCategory =
    localStorage.getItem("selectedCategory") || "Environment";

const categoryGoals = {
    Environment: ["goal6", "goal12", "goal13", "goal14", "goal15"],
    Society: ["goal1", "goal2", "goal3", "goal4", "goal5", "goal10"],
    Development: ["goal7", "goal8", "goal9", "goal11"],
    Global: ["goal16", "goal17"]
};

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

const activeGoals = categoryGoals[selectedCategory];

const filteredEvents = events.filter(event => {
    return event.category === selectedCategory;
});


function loadEvent() {

    const event = filteredEvents[currentEvent];

    document.getElementById("scenarioTitle")
    .innerText = event.title;

    document.getElementById("scenarioDescription")
    .innerText = event.description;

    document.getElementById("dayBox")
    .innerText = `DAY ${day}`;

    document.getElementById("moneyBox")
    .innerText = `💰 ${money}`;

    document.getElementById("energyBox")
    .innerText = `⚡ ${energy}`;

    const choicesSection =
    document.getElementById("choicesSection");

    choicesSection.innerHTML = "";

    event.choices.forEach(choice => {

        const card =
        document.createElement("div");

        card.classList.add("choice-card");

        card.innerHTML = `
            <h3>${choice.text}</h3>

            <div class="effects">
                💰 ${choice.money} <br>
                ⚡ ${choice.energy}
            </div>
        `;

        card.addEventListener("click", () => {

            money += choice.money;
            energy += choice.energy;
            money = Math.max(0, money);
            energy = Math.max(0, energy);

            for(let key in choice){

                if(key.startsWith("goal")){

                    if(!sdgScores[key]){

                        sdgScores[key] = 0;

                    }

                    sdgScores[key] += choice[key];

                }

            }

            updateProgress();

            nextDay();

        });

        choicesSection.appendChild(card);

    });

}

function updateProgress() {
    activeGoals.forEach(goal => {
        const fill = document.getElementById(`${goal}Fill`);

        if (fill) {
            fill.style.width =
                `${Math.min(sdgScores[goal] || 0, 100)}%`;
        }
    });
}

function nextDay(){

    currentEvent++;

    if(currentEvent >= filteredEvents.length){

        alert("Game Finished!");

        return;
    }

    day++;

    loadEvent();

}



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

renderProgressBars();
loadEvent();
updateProgress();


