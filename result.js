const resultType =
    localStorage.getItem("resultType");

const endingTitle =
    localStorage.getItem("endingTitle") || "冒險結束";

const endingText =
    localStorage.getItem("endingText") || "您的 EcoLife 冒險圓滿落幕。";

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
    resultTiger.src = "image/tiger_ending_1_transparent.png";
} else if (resultType === "lose") {
    resultTiger.src = "image/tiger_ending_3_transparent.png";
} else {
    resultTiger.src = "image/tiger_ending_2_transparent.png";
}

resultTitle.innerText = endingTitle;
resultText.innerText = endingText;

document.getElementById("finalMoney")
.innerText = `💰 ${money}`;

document.getElementById("finalEnergy")
.innerText = `⚡ ${energy}`;

document.getElementById("homeBtn")
.addEventListener("click", () => {
    window.location.href = "entrance.html";
});