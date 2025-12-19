//Toggle class active
const NavbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});

const btn = document.getElementById("openPopup");
const popup = document.getElementById("popup");

btn.addEventListener("click", () => {
  popup.classList.add("active");
});
