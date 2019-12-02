// carousel effect for slideshow
var myIndex = 0;
window.addEventListener('load', carousel); //waits until the page loads

function carousel() {
  let photos = document.getElementsByClassName("mySlides");
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > photos.length) myIndex = 1;
  photos[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}
