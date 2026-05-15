const userNameInput = document.getElementById("userName");
const userIdInput = document.getElementById("userId");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener("click", function () {
    const userName = userNameInput.value.trim();
    const userId = userIdInput.value.trim();

    if (userName === "" || userId === "") {
        loginMessage.innerText = "Please enter both your name and ID.";
        return;
    }

    localStorage.setItem("currentUserName", userName);
    localStorage.setItem("currentUserId", userId);

    window.location.href = "tutorial.html";
});