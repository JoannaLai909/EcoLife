const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", function() {
    window.location.href = "rules.html";
  });
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight * 0.75 && elementTop > 0) {
      el.classList.remove("show");   // 先移掉
      void el.offsetWidth;           //  強制重繪
      el.classList.add("show");      // 再加回來 → 重播動畫
    }
  });
}