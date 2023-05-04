let hamberger = document.querySelector(".hamberger");
let close = document.querySelector(".close");
let navMobile = document.querySelector(".nav-mobile");

hamberger.addEventListener("click", function () {
  navMobile.classList.add("open");
});

close.addEventListener("click", function () {
  navMobile.classList.remove("open");
});
