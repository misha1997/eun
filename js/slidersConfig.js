// rewievs
var swiper = new Swiper(".expertsSwiper", {
  slidesPerView: 1,
  spaceBetween: 11,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }
});

// rewievs
var swiper = new Swiper(".rewievsSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: document.querySelector(".rewievs").querySelector(".swiper-next"),
    prevEl: document.querySelector(".rewievs").querySelector(".swiper-prev"),
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
});

// instruments
var swiper = new Swiper(".instrumentsSwiper", {
  slidesPerView: 1,
  spaceBetween: 11,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: document.querySelector(".instruments").querySelector(".swiper-next"),
    prevEl: document.querySelector(".instruments").querySelector(".swiper-prev"),
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  }
});

// certiifcate
var swiper = new Swiper(".certififcateSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: document.querySelector(".certificate").querySelector(".swiper-next"),
    prevEl: document.querySelector(".certificate").querySelector(".swiper-prev"),
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
      },
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});

// porffolio slider
var portfolioSwiper = new Swiper(".portfolioSwiper", {
  slidesPerView: 2,
  spaceBetween: 14,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: document.querySelector(".portfolio").querySelector(".swiper-next"),
    prevEl: document.querySelector(".portfolio").querySelector(".swiper-prev"),
  },
  breakpoints: {
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
});

// porffolio picture slider
var swiper = new Swiper(".pictureSswiper", {
    slidesPerView: 1,
    spaceBetween: 14,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
    }
});
currentSlide(0);
function currentSlide(n) {
  var slides = document.getElementsByClassName("portfolio-item");
  var buttons = document.getElementsByClassName(" portfolio-button");
  for (let i = 0; i < slides.length; i++) {
    if(i == n) {
      slides[i].style.display = "block";
      buttons[i].classList.add('active');
    } else {
      slides[i].style.display = "none";
      buttons[i].classList.remove('active');
    }
  }
}