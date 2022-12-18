var Index = 1;
Slides(Index);

function plusSlides(n) {
  Slides(Index += n);
}

function currentSlide(n) {
  Slides(Index = n);
}

function Slides(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");

    if (n > slides.length) {Index = 1}
    if (n < 1) {Index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[Index-1].style.display = "block";
}
