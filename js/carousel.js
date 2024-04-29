let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateCarousel();
});
