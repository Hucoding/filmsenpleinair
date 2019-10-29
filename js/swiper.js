var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 45, //Degrés de rotation lors du passage d'une image à l'autre
        stretch: 0, //Réglage de la largeur
        depth: 500, //Réglage de la profondeur
        modifier: 1, //Laisser le modifier à 1
        slideShadows : false, //Régalge de l'ombre
    },
    pagination: {
        el: '.swiper-pagination',
    },
});