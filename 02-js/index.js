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
