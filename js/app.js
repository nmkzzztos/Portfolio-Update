const skill = document.getElementById("skills");
const avatar = document.getElementById("avatar-btn");
const works = document.getElementById("works");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav");
const info = document.getElementById("info");
const presentation = document.getElementById("presentation");
const cursor = document.getElementById("cursor");
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

    console.log(isMobile);

    if (scrolling > 250) {
      avatar.classList.add("avatar-btn-active");
    } else {
      avatar.classList.remove("avatar-btn-active");
    }

    if (scrolling > 850) {
      skill.classList.add("skills-active");
    } else {
      skill.classList.remove("skills-active");
    }

    if (scrolling > 1500) {
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
