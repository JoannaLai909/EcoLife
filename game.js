

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