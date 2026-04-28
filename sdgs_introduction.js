// 當頁面滾動時觸發
window.onscroll = function() {
  let button = document.getElementById("nextBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block"; // 顯示按鈕
  } else {
    button.style.display = "none"; // 隱藏按鈕
  }
};

document.getElementById("nextBtn").addEventListener("click", function () {
  window.location.href = "purpose.html";
});
