const logo = document.getElementById("logo");
const nav = document.getElementById("nav");
const presentation = document.getElementById("presentation");
const workTwo = document.getElementById("workTwo");
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

window.addEventListener("resize", () => {
  let clientWidth = document.documentElement.clientWidth;
  if (clientWidth > 1023) {
    imgRender(
      document.getElementById("workTwo"),
      "./images/works/portfolio/800wh.png"
    );
  } else if (clientWidth > 749 && clientWidth < 1024) {
    imgRender(workTwo, "./images/works/portfolio/700wh.png");
  } else if (clientWidth > 639 && clientWidth < 750) {
    imgRender(
      document.getElementById("workTwo"),
      "./images/works/portfolio/600wh.png"
    );
  } else if (clientWidth < 640) {
    imgRender(
      document.getElementById("workTwo"),
      "./images/works/portfolio/400wh.png"
    );
  }
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
