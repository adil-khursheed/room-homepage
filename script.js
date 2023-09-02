const slideImages = document.querySelectorAll(".slide__image");
const slideText = document.querySelectorAll(".text__inner__container");

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  if (n > slideImages.length && n > slideText.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slideImages.length && slideText.length;
  }

  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }

  for (let i = 0; i < slideText.length; i++) {
    slideText[i].style.display = "none";
  }

  slideImages[slideIndex - 1].style.display = "block";
  slideImages[slideIndex - 1].style.height = "100%";
  slideText[slideIndex - 1].style.display = "flex";
  slideText[slideIndex - 1].style.flexDirection = "column";
  slideText[slideIndex - 1].style.gap = "1.5rem";
}
