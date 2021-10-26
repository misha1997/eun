var items = document.getElementsByClassName('phone');
  Array.prototype.forEach.call(items, function(element) {
    var phoneMask = new IMask(element, {
    mask: '+{7}(000)000-00-00',
    placeholder: {
      show: 'always'
    }
  });
});