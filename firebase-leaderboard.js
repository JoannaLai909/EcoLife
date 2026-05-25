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
let leaderboardUnsubscribe = null;

window.renderCloudLeaderboard = function() {

    console.log("renderCloudLeaderboard started");

    const leaderboardList =
        document.getElementById("leaderboardList");

    const leaderboardTabs =
        document.querySelectorAll(".leaderboard-tab");

    if (!leaderboardList) {
        console.log("leaderboardList not found");
        return;
    }

    function renderCategory(category) {

        console.log("Reading category:", category);

        leaderboardList.innerHTML = `
            <div class="empty-leaderboard">
                Loading ${category} leaderboard...
            </div>
        `;

        if (leaderboardUnsubscribe) {
            leaderboardUnsubscribe();
        }

        const categoryRef =
            query(
                ref(db, "leaderboard/" + category),
                orderByChild("score"),
                limitToLast(10)
            );

        leaderboardUnsubscribe = onValue(categoryRef, function(snapshot) {

            console.log("Firebase snapshot exists:", snapshot.exists());

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

            console.log("Players:", players);

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

        }, function(error) {
            console.error("Firebase read error:", error);

            leaderboardList.innerHTML = `
                <div class="empty-leaderboard">
                    Failed to load leaderboard.
                </div>
            `;
        });

    }

    leaderboardTabs.forEach(function(tab) {

        tab.addEventListener("click", function() {

            console.log("Clicked tab:", tab.dataset.category);

            leaderboardTabs.forEach(function(otherTab) {
                otherTab.classList.remove("active");
            });

            tab.classList.add("active");

            renderCategory(tab.dataset.category);

        });

    });

    renderCategory("Environment");

};

function startLeaderboardWhenReady() {

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", function () {

            if (window.renderCloudLeaderboard) {
                window.renderCloudLeaderboard();
            }

        });

    } else {

        if (window.renderCloudLeaderboard) {
            window.renderCloudLeaderboard();
        }

    }

}

startLeaderboardWhenReady();