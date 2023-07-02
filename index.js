// Autotyping funtion
const autoTypingElement = document.getElementById("auto-typing");
const initialText = "Hey there!, ";
const phrases = ["Welcome to my Portfolio site."];
const typingSpeed = 100;
let phraseIndex = 0;
let eraseMode = false;
let charIndex = 0;

function typeText() {
  if (eraseMode) {
    if (charIndex >= 0) {
      autoTypingElement.textContent = initialText + phrases[phraseIndex].substring(0, charIndex);
      charIndex--;
      setTimeout(typeText, typingSpeed);
    } else {
      eraseMode = false;
      setTimeout(typeText, 1000);
    }
  } else {
    if (charIndex < phrases[phraseIndex].length) {
      autoTypingElement.textContent = initialText + phrases[phraseIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      eraseMode = true;
      setTimeout(eraseText, 1000);
    }
  }
}

function eraseText() {
  if (charIndex >= 0) {
    autoTypingElement.textContent = initialText + phrases[phraseIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(eraseText, typingSpeed);
  } else {
    phraseIndex++;
    if (phraseIndex >= phrases.length) {
      phraseIndex = 0;
    }
    eraseMode = false;
    setTimeout(typeText, 1000);
  }
}

window.onload = typeText;


// Dropdown functions
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// sidebar navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}





// projects
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlide(slideIndex) {
//   slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.classList.add('active');
//     } else {
//       slide.classList.remove('active');
//     }
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// // Automatically switch slides every 5 seconds
// setInterval(nextSlide, 5000);

// showSlide(currentSlide);




// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}