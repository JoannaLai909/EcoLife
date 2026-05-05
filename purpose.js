const nextBtn = document.getElementById("nextBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreContent = document.getElementById("moreContent");

/* BACK 按鈕：回到 entrance.html */
nextBtn.addEventListener("click", function () {
  window.location.href = "entrance.html";
});

/* Learn More 按鈕：展開 / 收起更多內容 */
learnMoreBtn.addEventListener("click", function () {
  moreContent.classList.toggle("show");
  nextBtn.classList.toggle("show");

  if (moreContent.classList.contains("show")) {
    learnMoreBtn.textContent = "Show Less";
  } else {
    learnMoreBtn.textContent = "Learn More";
  }
});
