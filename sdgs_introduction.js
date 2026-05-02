window.onscroll = function() {
  let button = document.getElementById("topBtn");

  if (button) {
    if (document.documentElement.scrollTop > 400) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
};

let btn = document.getElementById("topBtn");

if (btn) {
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
