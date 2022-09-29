// Variables desktop
const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Variables mobile
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

// Variables mixtas
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

emailMenu.addEventListener("click", showDesktopMenu);
burguerMenu.addEventListener("click", showMobileMenu);
shoppingCart.addEventListener("click", showMyOrder);

function showDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function showMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function showMyOrder() {
  productDetail.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}
