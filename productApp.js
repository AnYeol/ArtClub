var textWrapper = document.querySelector('.header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.header .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 900,
    delay: (el, i) => 150 * (i+1)
  })