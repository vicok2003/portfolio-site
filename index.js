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


// // Dropdown functions
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// mobile navbar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//desktop sidebar navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// form validation
function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var subjectError = document.getElementById("subjectError");
  var messageError = document.getElementById("messageError");

  // Reset the error messages
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  var isValid = true; // Flag to track overall validation

  // Simple validation to check if the required! fields are not empty
  if (name.value.trim() === "") {
      nameError.textContent = "Your company name or individual name is required*";
      isValid = false;
  }

  if (email.value.trim() === "") {
      emailError.textContent = "A valid email address is required here*";
      isValid = false;
  } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
          emailError.textContent = "Please enter a valid email address*";
          isValid = false;
      }
  }

  if (subject.value.trim() === "") {
      subjectError.textContent = "Please address a subject*";
      isValid = false;
  }

  if (message.value.trim() === "") {
      messageError.textContent = "A message needs to be passed across*";
      isValid = false;
  }

  if (isValid) {
      // Show the confirmation modal
      document.getElementById('confirmationModal').style.display = 'block';
  }

  return isValid;
}

// Show confirmation modal
document.getElementById("showModalButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior of form submission
  if (validateForm()) {
      document.getElementById("confirmationModal").style.display = "block"; // Show the confirmation modal
  }
});

// Close the modal
document.querySelector(".cls").addEventListener("click", function() {
  // console.log("Close button clicked");
  document.getElementById("confirmationModal").style.display = "none";
});

// Proceed button action
document.getElementById("proceedButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  document.getElementById("confirmationModal").style.display = "none"; // Close the modal
  document.getElementById("contact-form").submit(); // Submit the form

  submitFormLogic();
});

function submitFormLogic() {
  document.getElementById("contact-form").reset();
}


// Add event listeners for Enter key on input fields
var inputFields = document.querySelectorAll("#name, #email, #subject, #message");
inputFields.forEach(function(input, index) {
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default behavior of Enter key
            if (index < inputFields.length - 1) {
                inputFields[index + 1].focus(); // Move focus to the next input field
            } else {
                if (validateField(input)) {
                    document.getElementById("confirmationModal").style.display = "block"; // Show the confirmation modal
                }
            }
        }
    });
});

// Validate a specific field
function validateField(input) {
    var error = input.nextElementSibling;
    error.textContent = ""; // Clear previous error message

    if (input.value.trim() === "") {
        error.textContent = "Input required!";
        return false;
    }

    if (input.getAttribute("type") === "email") {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            error.textContent = "Please enter a valid email address.";
            return false;
        }
    }

    return true;
}


  //  Clear input fields
  function clearInputs() {
    var inputFields = document.querySelectorAll("#contact-form input, #contact-form textarea");

    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }

    // Clear error messages
    var errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function(error) {
        error.textContent = "";
    });
}

 
// when a user begins  scrolling
var timeout;

// Show the "Back to Top" button when user starts scrolling
window.onscroll = function() {
  clearTimeout(timeout); 
  showBackToTopButton();
  
  timeout = setTimeout(function() {
    hideBackToTopButton();
  }, 1000);
};

function showBackToTopButton() {
  var btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || btn.classList.contains("hovered")) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function hideBackToTopButton() {
  var btn = document.getElementById("backToTopBtn");
  if (!btn.classList.contains("hovered")) {
    btn.style.display = "none";
  }
}

var backToTopBtn = document.getElementById("backToTopBtn");
backToTopBtn.addEventListener("mouseover", function() {
  backToTopBtn.classList.add("hovered");
});
backToTopBtn.addEventListener("mouseout", function() {
  backToTopBtn.classList.remove("hovered");
});

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}
  
  
  
  
  