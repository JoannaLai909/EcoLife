const events = [
    {
        title: "Beach Cleanup",
        description:
        "Your friend invites you to join a beach cleanup activity.",
        choices: [
            {
                text: "Join the cleanup",
                energy: -15,
                money: 0,
                goal14: +10
            },
            {
                text: "Stay home",
                energy: +10,
                money: 0,
                goal14: -5
            }
        ]
    },
    {
        title: "Reusable Cup",
        description:
        "A cafe offers a discount if you bring your own cup.",
        choices: [
            {
                text: "Bring reusable cup",
                energy: 0,
                money: +5,
                goal12: +10
            },
            {
                text: "Use disposable cup",
                energy: 0,
                money: 0,
                goal12: -5
            }
        ]
    }
];

let currentEvent = 0;
let day = 1;
let money = 100;
let energy = 80;
let goal12 = 0;
let goal14 = 0;

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


function loadEvent() {

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

            if(choice.goal12){
                goal12 += choice.goal12;
            }

            if(choice.goal14){
                goal14 += choice.goal14;
            }

            nextDay();

        });

        choicesSection.appendChild(card);

    });

}

function nextDay(){

    day++;

    currentEvent++;

    if(currentEvent >= events.length){

        alert("Game Finished!");

        return;
    }

    loadEvent();

}

loadEvent();
