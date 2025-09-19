// Changer les couleurs du menu quand on scroll un peu
(function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const triggerOffset = 60; // nombre de pixels à scroller avant d'activer

  const onScroll = () => {
    elements.forEach((el) => {
      if (window.scrollY > triggerOffset) {
        el.classList.add("is-visible");
      } else {
        el.classList.remove("is-visible");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
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




