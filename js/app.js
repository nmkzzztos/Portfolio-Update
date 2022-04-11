const design = document.getElementById("design");
const frontend = document.getElementById("frontend");
const avatar = document.getElementById("avatar-btn");
const works = document.getElementById("works");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav");
const info = document.getElementById("info");
const presentation = document.getElementById("presentation");
const cursor = document.getElementById("cursor");
const worksItem = document.getElementsByClassName("works__item");
const availableScreenHeight = window.screen.availHeight;
const isMobile =
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    logo.classList.add("logo-active");
  }, 500);

  setInterval(() => {
    nav.classList.add("nav-active");
  }, 1000);

  setInterval(() => {
    info.classList.add("info-active");
  }, 1500);

  window.addEventListener("scroll", () => {
    let scrolling = window.scrollY;

    console.log(availableScreenHeight + " max height");
    console.log(worksItem[1].getBoundingClientRect().bottom + " bottom");
    console.log(worksItem[1].getBoundingClientRect().top + " top");
    console.log(availableScreenHeight / 2 - 125);

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
    
        if (
      worksItem[0].getBoundingClientRect().top >
        availableScreenHeight / 2 - 125 &&
      worksItem[0].getBoundingClientRect().top <
        availableScreenHeight / 2 + 125 &&
      isMobile
    ) {
      document.getElementsByClassName("works__item-link")[0].style.opacity =
        "1";
      document.getElementsByClassName("works__item-img")[0].style.opacity =
        "0.2";
      document.getElementsByClassName("works__item-img")[0].style.transform =
        "scale(1,1)";
    } else {
      document.getElementsByClassName("works__item-link")[0].style.opacity =
        "0";
      document.getElementsByClassName("works__item-img")[0].style.opacity = "1";
    }

    if (
      worksItem[1].getBoundingClientRect().top >
        availableScreenHeight / 2 - 125 &&
      worksItem[1].getBoundingClientRect().top <
        availableScreenHeight / 2 + 125 &&
      isMobile
    ) {
      document.getElementsByClassName("works__item-link")[1].style.opacity =
        "1";
      document.getElementsByClassName("works__item-img")[1].style.opacity =
        "0.2";
    } else {
      document.getElementsByClassName("works__item-link")[1].style.opacity =
        "0";
      document.getElementsByClassName("works__item-img")[1].style.opacity = "1";
    }
  });
});

if (isMobile == true) {
  cursor.classList.add("cursor-enactive");
} else {
  cursor.classList.remove("cursor-enactive");
}

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
