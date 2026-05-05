window.onscroll = function() {
  let button = document.getElementById("nextBtn");

  if (button) {
    if (document.documentElement.scrollTop > 400) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
};

let btn = document.getElementById("nextBtn");

if (btn) {
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
