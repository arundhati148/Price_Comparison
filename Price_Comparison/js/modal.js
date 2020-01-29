

// Get the modal

function test_str() {
  // var res;
  // var id=document.getElementById('id01').getAttribute("data-id");
    var str = document.getElementById("pp").value;
    var rstr = document.getElementById("rp").value;
    console.log("innnn");
    console.log(str);
   if(str!==rstr)
   alert("Password did not match: Please try again...")
  else if (str.match(/[a-z]/g) && str.match(
          /[A-Z]/g) && str.match(
          /[0-9]/g) && str.match(
          /[^a-zA-Z\d]/g) && str.length >= 8){
            console.log("Correct");
            // alert("Correct");
          }
      // res = "TRUE";
  else{
  console.log("InCorrect")
      alert("Password must contain:a lower case letter, a uppercase letter, a digit, minimum 8 characters.")}
  // document.getElementById("t2").value = res;

}



var modal1 = document.getElementById('id01');




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal1) {
modal1.style.display = "none";
}
}

// Get the modal
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal2) {
modal2.style.display = "none";
}
}


var slideIndex = 0;

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
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

