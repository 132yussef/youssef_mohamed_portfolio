const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", open);

  menuButton.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function downloadCV(event){
  event.preventDefault();
  alert("ضع ملف CV الخاص بك داخل المشروع ثم اربط الزر بالملف.");
}

/* Reveal animation */
const revealItems = document.querySelectorAll(
  ".project-card,.skill,.tools-card,.about-card,.contact-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

revealItems.forEach(item => {
  item.classList.add("reveal");
  observer.observe(item);
});
