const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", function() {
    window.location.href = "login.html";
  });
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

    if (isVisible) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

function revealSections() {
  const sections = document.querySelectorAll(".info-section, .visualfeedback-section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.75) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);


const featureBtn = document.querySelector(".feature-btn");
const subDropdown = document.querySelector(".sub-dropdown");

if (featureBtn && subDropdown) {
    featureBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        subDropdown.classList.toggle("active");
    });
}

function renderLeaderboard() {

    const leaderboardList =
        document.getElementById("leaderboardList");

    if (!leaderboardList) {
        return;
    }

    const leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (leaderboard.length === 0) {

        leaderboardList.innerHTML = `
            <div class="empty-leaderboard">
                No records yet. Start playing to join the leaderboard!
            </div>
        `;

        return;
    }

    leaderboardList.innerHTML = "";

    leaderboard.forEach((player, index) => {

        const row =
            document.createElement("div");

        row.classList.add("leaderboard-row");

        row.innerHTML = `
            <div class="leaderboard-rank">
                #${index + 1}
            </div>

            <div class="leaderboard-player">
                <div class="leaderboard-name">
                    ${player.name}
                </div>

                <div class="leaderboard-id">
                    ID: ${player.id}
                </div>
            </div>

            <div class="leaderboard-score">
                ${player.score}
            </div>

            <div class="leaderboard-category">
                ${player.category}
            </div>
        `;

        leaderboardList.appendChild(row);

    });

}

window.addEventListener("load", renderLeaderboard);