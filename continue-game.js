const GAME_STATE_KEY = "ecolifeCurrentGameState";

function hasActiveGameState() {
    const savedGame = sessionStorage.getItem(GAME_STATE_KEY);

    if (!savedGame) {
        return false;
    }

    try {
        const gameState = JSON.parse(savedGame);

        return gameState &&
               gameState.day !== undefined &&
               gameState.money !== undefined &&
               gameState.energy !== undefined;

    } catch (error) {
        return false;
    }
}

function createBackToGameButton() {

    if (!hasActiveGameState()) {
        return;
    }

    const backBtn = document.createElement("button");

    backBtn.classList.add("back-to-game-btn");

    backBtn.innerText = "← Back to Game";

    backBtn.addEventListener("click", function () {
        window.location.href = "game.html";
    });

    document.body.appendChild(backBtn);
}

window.addEventListener("load", createBackToGameButton);