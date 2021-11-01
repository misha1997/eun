
// counter
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
    if(number.dataset.max > 1000) {
      number.innerHTML = start += 10;
    }
    if(number.dataset.max < 1000) {
      number.innerHTML = start += 5;
    }
    if(start >= end) {
      clearInterval(interval);
      number.innerHTML = number.dataset.max;
    }
  }, 5);
}

// modal
var modal = false;
function showHideModal() {
  modal = !modal;
  if(modal) {
    document.getElementById('modal').style.display = "flex";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
    setTimeout(function() {
      document.getElementById('modal').style.opacity = '1';
    }, 0);
  } else {
    document.getElementById('modal').style.opacity = '0';
    document.getElementsByTagName('body')[0].style.overflow = "auto";
    setTimeout(function() {
      document.getElementById('modal').style.display = "none";
    }, 500);
  }
}

var menuToogle = false;
var menuToogleBtn = document.getElementById('menu-toggle');
menuToogleBtn.addEventListener("click", function() {
  menuToogle = !menuToogle;
  if(menuToogle) {
    document.getElementById('menubox-bg').style.display = "block";
  } else {
    document.getElementById('menubox-bg').style.display = "none";
  }
});

function dropdownMenu() {
  document.getElementById("dropdown").classList.toggle("active");
}

// map
function hideMap() {
  document.querySelector(".map-bg").style.opacity = '0';
  setTimeout(function() {
    document.querySelector(".map-bg").style.display = 'none';
  }, 1000);
}

// table
var tabel = document.querySelector('#table');

var tabelSmall = document.querySelector('#table-small');

var headers = [];
var result = [];

var row = document.querySelector('#table').querySelectorAll('.row');
var links = document.querySelector('#table').querySelectorAll('.details');
row.forEach((rowItem, index) => {
  if(rowItem.classList.contains('title')) {
    rowItem.querySelectorAll('.col').forEach(col => {
      if(!col.classList.contains('header')) {
        headers.push(col.innerHTML)
      }
    });
  } else {
    var col = {
      title: "",
      services: [],
      link: ""
    }
    for (let i = 0; i < rowItem.querySelectorAll('.col').length; i++) {
      if(rowItem.querySelectorAll('.col')[i].classList.contains('header')) {
        col.title = rowItem.querySelectorAll('.col')[i].innerHTML;
      } else {
        col.services.push(headers[i - 1] + " / " + rowItem.querySelectorAll('.col')[i].innerHTML);
      }
    }
    col.link = links[index - 1].cloneNode(true);
    result.push(col)
  }
});

var newTable = document.createElement('div');

for (let i = 0; i < result.length; i++) {
  var title = document.createElement('div');
  var span = document.createElement('span');
  if(i == 0) {
    span.classList.add('active');
  }
  title.classList.add('title');
  title.innerHTML = result[i].title;
  title.appendChild(span);
  var services = document.createElement('div');
  services.classList.add('services');
  if(i == 0) {
    services.classList.add('active');
  }
  for (let j = 0; j < result[i].services.length; j++) {
    var servicesItem = document.createElement('div');
    servicesItem.classList.add('service-item');
    servicesItem.innerHTML = result[i].services[j];
    services.appendChild(servicesItem);
  }
  services.appendChild(result[i].link);
  newTable.appendChild(title);
  newTable.appendChild(services);
}

tabelSmall.appendChild(newTable);

var acc = tabelSmall.getElementsByClassName("title");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.querySelector('span').classList.toggle("active");
    this.nextSibling.classList.toggle("active");
  });
}