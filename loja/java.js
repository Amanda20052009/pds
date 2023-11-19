// apresentaçao dos banners
const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function autoAdvance() {
  nextSlide();
}

showSlide(currentSlide);

const autoAdvanceInterval = setInterval(autoAdvance, 3000); 











