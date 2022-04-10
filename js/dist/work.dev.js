"use strict";

var logo = document.getElementById("logo");
var nav = document.getElementById("nav");
var presentation = document.getElementById("presentation");
var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
document.addEventListener("DOMContentLoaded", function () {
  if (isMobile == true) {
    cursor.classList.add("cursor-enactive");
  } else {
    cursor.classList.remove("cursor-enactive");
  }

  setTimeout(function () {
    logo.classList.add("logo-active");
  }, 500);
  setTimeout(function () {
    nav.classList.add("nav-active");
  }, 1000);
  setTimeout(function () {
    presentation.classList.add("presentation-active");
  }, 1500);
});
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});
document.addEventListener("click", function () {
  cursor.classList.add("expand");
  setTimeout(function () {
    cursor.classList.remove("expand");
  }, 500);
});