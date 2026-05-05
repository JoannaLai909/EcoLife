const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", function() {
    window.location.href = "rules.html";
  });
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

    if (isVisible) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);