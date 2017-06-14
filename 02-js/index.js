$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");

    return '<span>' + chars.join('</span><span>') + '</span>';
});

// PROJET-1
var imagehover1 = document.querySelector('.image-hover1');
var project1 = document.querySelector('.image-preview1');
var span1 = document.querySelector('.span1');

imagehover1.classList.add('hidden');
project1.addEventListener('mouseover', appear);

function appear(){
    imagehover1.classList.remove('hidden');
    span1.classList.add('span1-hover');
}

//PROJET-2

var imagehover2 = document.querySelector('.image-hover2');
var project2 = document.querySelector('.image-preview2');
var span2 = document.querySelector('.span2');


imagehover2.classList.add('hidden');
project2.addEventListener('mouseover', appear2);

function appear2(){
    imagehover2.classList.remove('hidden');
    span2.classList.add('span2-hover');
}

//PROJET-3

var imagehover3 = document.querySelector('.image-hover3');
var project3 = document.querySelector('.image-preview3');
var span3 = document.querySelector('.span3');

imagehover3.classList.add('hidden');
project3.addEventListener('mouseover', appear3);

function appear3(){
    imagehover3.classList.remove('hidden');
    span3.classList.add('span3-hover');
}

//PROJET-4

var imagehover4 = document.querySelector('.image-hover4');
var project4 = document.querySelector('.image-preview4');
var span4 = document.querySelector('.span4');

imagehover4.classList.add('hidden');
project4.addEventListener('mouseover', appear4);

function appear4(){
    imagehover4.classList.remove('hidden');
    span4.classList.add('span4-hover');
}

//PROJET-5

var imagehover5 = document.querySelector('.image-hover5');
var project5 = document.querySelector('.image-preview5');

imagehover5.classList.add('hidden');
project5.addEventListener('mouseover', appear5);

function appear5(){
    imagehover5.classList.remove('hidden');
}

//PROJET-6

var imagehover6 = document.querySelector('.image-hover6');
var project6 = document.querySelector('.image-preview6');

imagehover6.classList.add('hidden');
project6.addEventListener('mouseover', appear6);

function appear6(){
    imagehover6.classList.remove('hidden');
}