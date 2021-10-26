var modal = false;
function showHideModal() {
  modal = !modal;
  if(modal) {
    document.getElementById('modal').style.display = "flex";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
  } else {
    document.getElementById('modal').style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "auto";
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

function myFunction() {
  document.getElementById("dropdown").classList.toggle("active");
}