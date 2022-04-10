"use strict";

var design = document.getElementById("design");
var frontend = document.getElementById("frontend");
var avatar = document.getElementById("avatar-btn");
var works = document.getElementById("works");
var logo = document.getElementById("logo");
var nav = document.getElementById("nav");
var info = document.getElementById("info");
var presentation = document.getElementById("presentation");
var cursor = document.getElementById("cursor");
var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    logo.classList.add("logo-active");
  }, 500);
  setInterval(function () {
    nav.classList.add("nav-active");
  }, 1000);
  setInterval(function () {
    info.classList.add("info-active");
  }, 1500);
  window.addEventListener("scroll", function () {
    var scrolling = window.scrollY;
    console.log(isMobile);

    if (scrolling > 200) {
      avatar.classList.add("avatar-btn-active");
    } else {
      avatar.classList.remove("avatar-btn-active");
    }

    if (scrolling > 750) {
      design.classList.add("design-active");
      frontend.classList.add("frontend-active");
    } else {
      design.classList.remove("design-active");
      frontend.classList.remove("frontend-active");
    }

    if (scrolling > 1400) {
      works.classList.add("works-active");
    } else {
      works.classList.remove("works-active");
    }
  });
});

if (isMobile == true) {
  cursor.classList.add("cursor-enactive");
} else {
  cursor.classList.remove("cursor-enactive");
}

document.addEventListener("mousemove", function (e) {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});
document.addEventListener("click", function () {
  cursor.classList.add("expand");
  setTimeout(function () {
    cursor.classList.remove("expand");
  }, 500);
});