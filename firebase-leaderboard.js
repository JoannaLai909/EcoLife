import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
    getDatabase,
    ref,
    get,
    set,
    query,
    orderByChild,
    limitToLast,
    onValue
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCUmLUiV7xqPmzRnsvw-v6Pu3QXdJ7lhVs",
    authDomain: "ecolife-fae52.firebaseapp.com",
    databaseURL: "https://ecolife-fae52-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecolife-fae52",
    storageBucket: "ecolife-fae52.firebasestorage.app",
    messagingSenderId: "469824988864",
    appId: "1:469824988864:web:19067f345d1eb1aa756f25",
    measurementId: "G-6FDZ9HKSG3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


/* 避免 ID 裡面有 Firebase 不允許的符號 */
function cleanId(id) {
    return String(id).replace(/[.#$/[\]]/g, "_");
}


/* 遊戲結束後更新排行榜 */
window.updateCloudLeaderboard = async function(playerData) {
    const safeId = cleanId(playerData.id);
    const category = playerData.category || "Environment";
    const playerRef = ref(
        db,
        "leaderboard/" + category + "/" + safeId
    );
    const oldSnapshot = await get(playerRef);
    if (!oldSnapshot.exists()) {
        await set(playerRef, playerData);
        return;
    }
    const oldData = oldSnapshot.val();
    if (playerData.score > oldData.score) {
        await set(playerRef, playerData);

    }

};


/* 首頁即時顯示排行榜 */
window.renderCloudLeaderboard = function() {
    const leaderboardList =
        document.getElementById("leaderboardList");
    const leaderboardTabs =
        document.querySelectorAll(".leaderboard-tab");
    if (!leaderboardList) {
        return;
    }
    let currentCategory = "Environment";
    function renderCategory(category) {
        const categoryRef =
            query(
                ref(db, "leaderboard/" + category),
                orderByChild("score"),
                limitToLast(10)
            );
        onValue(categoryRef, function(snapshot) {
            if (!snapshot.exists()) {
                leaderboardList.innerHTML = `
                    <div class="empty-leaderboard">
                        No records yet in ${category}. Start playing to join the leaderboard!
                    </div>
                `;
                return;
            }
            const players = [];
            snapshot.forEach(function(childSnapshot) {
                players.push(childSnapshot.val());
            });
            players.sort((a, b) => b.score - a.score);
            leaderboardList.innerHTML = "";
            players.forEach(function(player, index) {
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
        });
    }
    leaderboardTabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            leaderboardTabs.forEach(function(otherTab) {
                otherTab.classList.remove("active");
            });
            tab.classList.add("active");
            currentCategory =
                tab.dataset.category;
            renderCategory(currentCategory);

        });

    });

    renderCategory(currentCategory);

};