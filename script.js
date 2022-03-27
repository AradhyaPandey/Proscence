function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var list =$('.feedback');

list.append(`<p>We'd love to hear your feedback on our website and any recommendations on how we can improve it!<p>`);


var userInput = $('.user-input');
var submitBtn = $('.submit-btn');

// Event Listener --listens for a user action

submitBtn.on("click", addItem);

function addItem() {
  console.log('your function works');
  var newItem = userInput.val();
  console.log(newItem);
  list.append(`<p>${newItem}</p>`);
}