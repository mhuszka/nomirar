$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

var imagehover1 = document.querySelector('.image-hover1');
var project1 = document.querySelector('.image-preview1');

imagehover1.classList.add('hidden');
project1.addEventListener('mouseover', appear);

function appear(){
    imagehover1.classList.remove('hidden');
}

var imagehover2 = document.querySelector('.image-hover2');
var project2 = document.querySelector('.image-preview2');

imagehover2.classList.add('hidden');
project2.addEventListener('mouseover', appear2);

function appear2(){
    imagehover2.classList.remove('hidden');
}