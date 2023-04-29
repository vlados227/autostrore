let slideIndex = 0;
const slides = document.getElementsByClassName("slider-img");
const dots = document.getElementsByClassName("slider-dot");

function changeSlide(index) {
  slideIndex = index;
  displaySlide();
}

function displaySlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

setInterval(() => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  displaySlide();
}, 5000);