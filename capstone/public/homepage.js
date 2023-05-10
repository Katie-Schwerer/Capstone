/*JavaScript relating to the carousel*/

var currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.dot');

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
    dots.forEach((dot) => {
      dot.classList.remove("active");
    })
  })
  slides[n].style.display = "block";
  dots[n].classList.add("active");
}
document.addEventListener("DOMContentLoaded", init(currentSlide));


//Moving through the different images
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
  init(currentSlide);
}


//The pictures will keep changing even without buttons being pressed
setInterval(() => {
  next();
}, 3250);


//Use the dots to navigate to different pictures
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    init(index);
    currentSlide = i;
  })
})
