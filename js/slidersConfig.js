// rewievs
var swiper = new Swiper(".rewievsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30
});

// instruments
var swiper = new Swiper(".instrumentsSwiper", {
  slidesPerView: 4,
  spaceBetween: 30
});

// certiifcate
var swiper = new Swiper(".certiifcateSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    400: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

// porffolio slider
var swiper = new Swiper(".portfolioSwiper", {
  slidesPerView: 5,
  spaceBetween: 14,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
currentSlide(0);
function currentSlide(n) {
  var slides = document.getElementsByClassName("portfolio-item");
  var buttons = document.getElementsByClassName(" portfolio-button");
  for (let i = 0; i < slides.length; i++) {
    if(i == n) {
      slides[i].style.display = "grid";
      buttons[i].classList.add('active');
    } else {
      slides[i].style.display = "none";
      buttons[i].classList.remove('active');
    }
  }
}