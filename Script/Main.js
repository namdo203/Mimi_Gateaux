//======================== NAV BAR =======================
let navbar = document.querySelector('.nav__list');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('nav__active');
};

window.onscroll = () => {
  navbar.classList.remove('nav__active');
};

//========================== AOS ===========================
// AOS.refreshHard();
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// ============= SLIDES =============
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//================GALLERY==================

var galleryIndex = 1;
showGallery(galleryIndex);

// Next/previous controls
function plusSlides(n) {
  showGallery(galleryIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showGallery(galleryIndex = n);
}

function showGallery(n) {
  var k;
  var gallery = document.getElementsByClassName("slides__gallery");
  var dots_2 = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption__gallery");
  if (n > gallery.length) {galleryIndex = 1}
  if (n < 1) {galleryIndex = gallery.length}
  for (k = 0; k < gallery.length; k++) {
    gallery[k].style.display = "none";
  }
  for (k = 0; k < dots_2.length; k++) {
    dots_2[k].className = dots_2[k].className.replace(" active", "");
  }
  gallery[galleryIndex-1].style.display = "block";
  dots_2[galleryIndex-1].className += " active";
  captionText.innerHTML = dots_2[galleryIndex-1].alt;
}