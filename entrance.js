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
      el.classList.add("show");   // 進來 → 顯示
    } else {
      el.classList.remove("show"); // 離開 → 重置 
    }
  });
}

window.addEventListener("scroll", revealOnScroll);