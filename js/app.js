window.addEventListener('load', function () {
    var loader = document.getElementById('pageLoader');
    loader.style.display = 'none';
  });
  

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



  // Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var container = document.querySelector('.container');
  
  if (isElementInViewport(container)) {
    container.classList.add('animate');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});

// toggle
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// <-/Constac/->
document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});


// <-/formjava/->
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // You can add your own code here to process the form data (e.g., sending it to a server or displaying a thank-you message)

  // For demonstration purposes, we'll just log the form data to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
});

