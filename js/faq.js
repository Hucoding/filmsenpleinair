var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faqpanel = this.nextElementSibling;
    if (faqpanel.style.display === "block") {
      faqpanel.style.display = "none";
    } else {
      faqpanel.style.display = "block";
    }
  });
}