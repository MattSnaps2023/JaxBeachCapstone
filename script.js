// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(toggle){
toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});
}

// LIGHTBOX
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
});
});

if(closeBtn){
closeBtn.addEventListener("click", () => {
lightbox.style.display = "none";
});
}