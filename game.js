const selectedCategory =
    localStorage.getItem("selectedCategory") || "Environment";

const categoryGoals = {
    Environment: ["goal6", "goal12", "goal13", "goal14", "goal15"],
    Society: ["goal1", "goal2", "goal3", "goal4", "goal5", "goal10"],
    Development: ["goal7", "goal8", "goal9", "goal11"],
    Global: ["goal16", "goal17"]
};

let events = [];

if(selectedCategory === "Environment"){

    events = [...environmentEvents];

}

else if(selectedCategory === "Society"){

    events = [...societyEvents];

}

else if(selectedCategory === "Development"){

    events = [...developmentEvents];

}

else if(selectedCategory === "Global"){

    events = [...globalEvents];

}

/* RANDOM SHUFFLE */

events.sort(() => Math.random() - 0.5);

/* ONLY PLAY 10 EVENTS */

events = events.slice(0, 10);

let currentEvent = 0;
let day = 1;
let money = 100;
let energy = 80;
let sdgScores = {};

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

const targetGoal =
    activeGoals[
        Math.floor(Math.random() * activeGoals.length)
    ];

const targetScore = 100;


function loadEvent() {

    document.getElementById("goalBox")
    .innerText =
    `${targetGoal.replace("goal", "Goal ")} Score ≥ ${targetScore}`;

    const event = events[currentEvent];

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


            if(money <= 0 || energy <= 0){
                localStorage.setItem("resultType", "lose");
                localStorage.setItem("money", money);
                localStorage.setItem("energy", energy);
                window.location.href = "result.html";
                menuModal.classList.remove("active");
                return;

            }

            for(let key in choice){

                if(key.startsWith("goal")){

                    if(!sdgScores[key]){

                        sdgScores[key] = 0;

                    }

                    sdgScores[key] += choice[key];

                }

            }

            const isWin = updateProgress();

            if(isWin){

                return;

            }

            nextDay();

        });

        choicesSection.appendChild(card);

    });

}

function updateProgress() {

    activeGoals.forEach(goal => {

        const fill =
        document.getElementById(`${goal}Fill`);

        if(fill){

            fill.style.width =
            `${Math.min(sdgScores[goal] || 0, 100)}%`;

        }

    });

    if((sdgScores[targetGoal] || 0) >= targetScore){

        localStorage.setItem("resultType", "win");
        localStorage.setItem("money", money);
        localStorage.setItem("energy", energy);
        window.location.href = "result.html";
        return true;

    }

    return false;

}

function nextDay(){

    currentEvent++;

    if(currentEvent >= events.length){

        if((sdgScores[targetGoal] || 0) >= targetScore){

            localStorage.setItem("resultType", "win");

        }

        else{

            localStorage.setItem("resultType", "lose");

        }

        localStorage.setItem("money", money);

        localStorage.setItem("energy", energy);

        window.location.href = "result.html";

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


