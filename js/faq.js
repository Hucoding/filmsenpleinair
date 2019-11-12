var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Basculer entre l'ajout et la suppression de la classe "active", mettre en surbrillance le bouton qui contrôle le panneau */
    this.classList.toggle("active");

    /* Basculer entre masquer et afficher le panneau actif */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}