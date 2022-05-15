//
var links = document.querySelectorAll(".nav-item");
var nav = document.querySelector(".nav-items");
var open_button = document.querySelector("#open-link");
var close_button = document.querySelector("#close-link");

function open_menu() {
  nav.classList.remove("close");
  nav.classList.add("open");
  setTimeout(function () {
    links.forEach(function (link) {
      link.style.opacity = "1";
    });
  }, 300);
}

function close_menu() {
  nav.classList.remove("open");
  nav.classList.add("close");
  links.forEach(function (link) {
    link.style.opacity = "0";
  });
}

links.forEach(function (link) {
  link.addEventListener("click", function () {
    remove_active();
    link.classList.add("active-link");
    close_menu();
  });
});

function remove_active() {
  for (var a = 0; a < links.length; a++) {
    links[a].classList.remove("active-link");
  }
}
// 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}