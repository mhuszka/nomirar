//PROBLÈME DÉCALAGE HEADER

if( navigator.platform.indexOf('Win') > -1){
document.querySelector('.r').style.top = '-32px';
document.querySelector('.rr').style.top = '-32px';

}


//CHARGEMENT DU HEADER ALÉATOIRE AU REFRESH DE LA PAGE À FAIRE




//APPARITION DU MENU AU CLIC SUR L'OEIL

var eye = document.querySelector('.eye');
var navlist = document.querySelector('.nav-list');

eye.addEventListener('click', function() {
    addmenu();
});

function addmenu() {
    var node = document.createElement("li"); // Create a <li> node
    node.innerHTML = "<a class='projets1'>Projets</a>";
    node.classList.add('navcss');
    navlist.appendChild(node);

    var node = document.createElement("li"); // Create a <li> node
    node.innerHTML = "<a class='propos'>&#192;&nbsp;Propos</a>";
    node.classList.add('navcss');
    navlist.appendChild(node);

    var node = document.createElement("li"); // Create a <li> node
    node.innerHTML = "<a class='contact'>Contact</a>";
    node.classList.add('navcss');
    navlist.appendChild(node);
}

// CODE DÉGRADÉ

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
var span5 = document.querySelector('.span5');

imagehover5.classList.add('hidden');
project5.addEventListener('mouseover', appear5);

function appear5(){
    imagehover5.classList.remove('hidden');
    span5.classList.add('span5-hover');
}

//PROJET-6

var imagehover6 = document.querySelector('.image-hover6');
var project6 = document.querySelector('.image-preview6');
var span6 = document.querySelector('.span6');

imagehover6.classList.add('hidden');
project6.addEventListener('mouseover', appear6);

function appear6(){
    imagehover6.classList.remove('hidden');
    span6.classList.add('span6-hover');
}

//PROJET-7

var imagehover7 = document.querySelector('.image-hover7');
var project7 = document.querySelector('.image-preview7');
var span7 = document.querySelector('.span7');

imagehover7.classList.add('hidden');
project7.addEventListener('mouseover', appear7);

function appear7(){
    imagehover7.classList.remove('hidden');
    span7.classList.add('span7-hover');

}

// ANIMATION POUR LE MOUVEMENT SUR LA DESCRIPTION

$(document).ready(function(){
            // Determine position of mouse
            var currentMousePos = { x: -1, y: -1 };
            $(document).mousemove(function(event) {
                // Find width and height of browser
                var windowWidth = $(window).width();
                var windowHeight = $(window).height();
                // Find X and Y coordinates of the mouse
                currentMousePos.x = event.pageX;
                currentMousePos.y = event.pageY;
                console.log(currentMousePos);
                // Attach vertical line to X position and horizontal line Y position

                var mousePercentageX = currentMousePos.x / windowWidth * 100;
                var mousePercentageY = currentMousePos.y / windowHeight * 100;


                var rangeX = mousePercentageX - 50 + 'deg';
                var rangeY = -(mousePercentageY - 50) + 'deg';
                var tilting = 'rotateY(' + rangeX + ') rotateX(' + rangeY + ')';
                $('#perspective').css('perspective', perspective);
                $('#tilter').css('transform', tilting);

            });
        });

