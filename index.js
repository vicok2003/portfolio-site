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

// form validation

  // Get the form element
  const form = document.getElementById('contact-form');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate the form inputs
    if (validateForm()) {
      // If form is valid, submit the form
      form.submit();
    }
  });

  // Validate the form inputs
  function validateForm() {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const subjectInput = document.querySelector('input[name="subject"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    let isValid = true;

    // Validate name field
    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.classList.add('error');
    } else {
      nameInput.classList.remove('error');
    }

    // Validate email field
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
      isValid = false;
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }

    // Validate subject field
    if (subjectInput.value.trim() === '') {
      isValid = false;
      subjectInput.classList.add('error');
    } else {
      subjectInput.classList.remove('error');
    }

    // Validate message field
    if (messageInput.value.trim() === '') {
      isValid = false;
      messageInput.classList.add('error');
    } else {
      messageInput.classList.remove('error');
    }

    return isValid;
  }

  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


