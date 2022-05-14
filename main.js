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

open_button.addEventListener("click", function () {
  open_menu();
});

close_button.addEventListener("click", function () {
  close_menu();
});

