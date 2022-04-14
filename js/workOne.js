const logo = document.getElementById("logo");
const nav = document.getElementById("nav");
const presentation = document.getElementById("presentation");
const isMobile =
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );

const imgRender = (img, src) => {
  img.src = src;
};

document.addEventListener("DOMContentLoaded", () => {
  if (isMobile == true) {
    cursor.classList.add("cursor-enactive");
  } else {
    cursor.classList.remove("cursor-enactive");
  }

  setTimeout(() => {
    logo.classList.add("logo-active");
  }, 500);

  setTimeout(() => {
    nav.classList.add("nav-active");
  }, 1000);

  setTimeout(() => {
    presentation.classList.add("presentation-active");
  }, 1500);
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
