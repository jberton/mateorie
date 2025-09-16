// Initialiser Skrollr après avoir chargé le fichier skrollr.min.js
(function($) {
    // Init Skrollr
    var s = skrollr.init();
    if (s.isMobile()) {
        s.destroy();
    }        
} )();


// Ajouter un effet d'apparition au scroll sur une section avec l'observateur d'intersection
// Lorsque les entrées intersectent la zone visible, la classe .is-visible est ajoutée pour déclencher l’animation CSS.
// Les éléments animés sont observés en utilisant la méthode observe de l’observateur d’intersection.

(function () {
    
    // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
    // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
    "use strict"
  
    // Sélectionne tous les éléments avec la classe "animate-on-scroll"
    const elements = document.querySelectorAll(".animate-on-scroll");
   
    // Options pour l'observateur d'intersection
    const options = {
        threshold: 0.03
    };
    // Instanciation de l'observateur d'intersection
    const observer = new IntersectionObserver(function (entries, observer) {
        // Boucle sur chaque entrée pour traiter les intersections
        entries.forEach(entry => {
            // Si l'entrée est en train d'intersecter avec la zone visible
            if (entry.isIntersecting) {
                // Ajouter la classe "is-visible" pour déclencher l'animation
                entry.target.classList.add("is-visible");
                // Cesser d'observer cet élément
                observer.unobserve(entry.target);
            }
        });
    }, options);
    // Observer chaque élément
    elements.forEach(element => {
        observer.observe(element);
    });
  })();


// Afficher ou masquer le menu en version mobile au clic sur le burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navbar-nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    // Masquer le menu
    navLinks.classList.toggle('nav-active');
    // Bloquer le scroll
    body.classList.toggle('fixed-position');
    // Animer le burger
    burger.classList.toggle('toggle');
});

// Masquer le menu en version mobile au clic sur un item
const menuitem = document.querySelector('.menu-item');

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', event => {
        // Masquer le menu
        navLinks.classList.toggle('nav-active');
        // Bloquer le scroll
        body.classList.toggle('fixed-position');
        // Animer le burger
        burger.classList.toggle('toggle');

    })
})


