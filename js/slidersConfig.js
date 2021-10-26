// rewievs
var swiper = new Swiper(".expertsSwiper", {
  slidesPerView: 1,
  spaceBetween: 11,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

// rewievs
var swiper = new Swiper(".rewievsSwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});

// instruments
var swiper = new Swiper(".instrumentsSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

// certiifcate
var swiper = new Swiper(".certiifcateSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});

// porffolio slider
var swiper = new Swiper(".portfolioSwiper", {
  slidesPerView: 2,
  spaceBetween: 14,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  }
});

// porffolio slider
var swiper = new Swiper(".pictureSswiper", {
    slidesPerView: 1,
    spaceBetween: 14
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

// 

window.addEventListener('scroll', function onScroll() {
  var rate = document.querySelector('.rate'),
  rateTop = rate.getBoundingClientRect().top
  if(rateTop <= 500) {
    this.removeEventListener('scroll', onScroll);
    number('number-1');
    number('number-2');
    number('number-3');
    number('number-4');
  }
});

function number(className) {
  var number = document.querySelector('.'+className),
    start = +number.innerHTML, end = +number.dataset.max;
    var interval = setInterval(function() {
        number.innerHTML = ++start;
        if(start == end) {
            clearInterval(interval);
        }
    }, 5);
}