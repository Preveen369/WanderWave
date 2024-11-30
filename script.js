 //navigation bar//
 let menu = document.querySelector("#menu-bars");
 let navbar = document.querySelector(".navbar")

 menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 }
 
 //scroll-bar//
 let section = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header .navbar a');


 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

   //scroll-bar//

   section.forEach(sec=> {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
      if(top => offset && top <offset+height){
         navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelectorAll('header .navbar a[href* ='+id+']').classList.add('active');
         });
      };
   });
 }

 document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
 }
 
 document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
 }




var dest = new Date("january 5,2025 10:00:00").getTime();

var x = setInterval(function(){
var now = new Date().getTime();
var diff = dest-now;

var days = Math.floor(diff/ (1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
console.log(minutes);
var seconds = Math.floor((diff % (1000*60)) / 1000);
console.log(seconds);

document.getElementById("Days").innerHTML = days;
document.getElementById("Hours").innerHTML = hours;
document.getElementById("Minutes").innerHTML = minutes;
document.getElementById("Seconds").innerHTML = seconds;

},1000);


//swiper for home//
var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop:true,
});

var swiper = new Swiper(".review-slider", {
   spaceBetween: 50,
   centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
   loop:true,
   breakpoints: {
      0:{
         slidesPerView: 1,
      },
      640:{
         slidesPerView: 2,
      },
      768:{
         slidesPerView: 2,
      },
      1024:{
         slidesPerView: 3,
      },
   },
});

// Set the date input to allow only the present date and future dates
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
dateInput.setAttribute("min", today);

// Form submission handler
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect inputs and their corresponding error messages
    const fields = [
        { id: "name", message: "Name should be filled" },
        { id: "number", message: "Phone number should be filled" },
        { id: "email", message: "Email should be filled" },
        { id: "package", message: "Chosen package should be filled" },
        { id: "category", message: "Chosen category should be filled" },
        { id: "destination", message: "Chosen destination should be filled" },
        { id: "persons", message: "Number of persons should be filled" },
        { id: "date", message: "Preferred date should be selected" },
        { id: "address", message: "Address should be filled" },
        { id: "suggestions", message: "Suggestions should be filled" },
    ];

    for (const field of fields) {
        const input = document.getElementById(field.id);
        if (!input.value.trim()) {
            alert(field.message); // Alert the specific message
            input.focus(); // Set focus to the empty field
            return; // Stop further execution
        }
    }

    // If all fields are filled, show success message
    alert("Form Successfully Submitted!");

    // Clear all form fields
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.value = ""; // Clear input field
    });
});