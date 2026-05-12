const resultType =
    localStorage.getItem("resultType");

const money =
    localStorage.getItem("money");

const energy =
    localStorage.getItem("energy");

const resultTiger =
    document.getElementById("resultTiger");

const resultTitle =
    document.getElementById("resultTitle");

const resultText =
    document.getElementById("resultText");

if(resultType === "win"){

    resultTiger.src =
    "image/tiger_ending_1_transparent.png";

    resultTitle.innerText =
    "You Win!";

    resultText.innerText =
    "You successfully achieved the SDG goal!";

}

else{

    resultTiger.src ="image/tiger_ending_1_transparent.png";

    resultTitle.innerText =
    "Game Over";

    resultText.innerText =
    "You failed to complete the SDG mission.";

}

document.getElementById("finalMoney")
.innerText = `💰 ${money}`;

document.getElementById("finalEnergy")
.innerText = `⚡ ${energy}`;

document.getElementById("homeBtn")
.addEventListener("click", () => {

    window.location.href =
    "entrance.html";

});