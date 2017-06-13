$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

// PROJET-1
var imagehover1 = document.querySelector('.image-hover1');
var project1 = document.querySelector('.image-preview1');

imagehover1.classList.add('hidden');
project1.addEventListener('mouseover', appear);

function appear(){
    imagehover1.classList.remove('hidden');
}

//PROJET-2

var imagehover2 = document.querySelector('.image-hover2');
var project2 = document.querySelector('.image-preview2');

imagehover2.classList.add('hidden');
project2.addEventListener('mouseover', appear2);

function appear2(){
    imagehover2.classList.remove('hidden');
}

//PROJET-3

var imagehover3 = document.querySelector('.image-hover3');
var project3 = document.querySelector('.image-preview3');

imagehover3.classList.add('hidden');
project3.addEventListener('mouseover', appear3);

function appear3(){
    imagehover3.classList.remove('hidden');
}

//PROJET-4

var imagehover4 = document.querySelector('.image-hover4');
var project4 = document.querySelector('.image-preview4');

imagehover4.classList.add('hidden');
project4.addEventListener('mouseover', appear4);

function appear4(){
    imagehover4.classList.remove('hidden');
}

//PROJET-5

var imagehover5 = document.querySelector('.image-hover5');
var project5 = document.querySelector('.image-preview5');

imagehover5.classList.add('hidden');
project5.addEventListener('mouseover', appear5);

function appear5(){
    imagehover5.classList.remove('hidden');
}