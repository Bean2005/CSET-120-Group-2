const allItems = new Map([
  ["Large Spripe:", 2.99],
  ["Small Spripe:", 1.99],
  ["Large Caine:", 2.99],
  ["Small Caine:", 1.99],
  ["Large Dripped Tea:", 2.99],
  ["Small Dripped Tea:", 1.99],
  ["Watur:", 1.98],
  ["ShakeX:", 5.99],
  ["Potato Bits:", 2.49],
  ["Cheesn't Burger:", 3.99],
  ["Strip O' Sardine:", 3.49],
  ["Dr. Turkey:", 4.99],
  ["Dr. Rib Cage:", 4.50],
  ["BliZard:", 4.99],
  ["Dr. Chikmens:", 2.99],
  ["Depression Dish:", 3.24],
  ["Stepup:", 0.99],
  ["Mystery Sauce:", 1.49],
  ["MaYO:", 0.99],
  ["Mustard:", 0.99]
]);
let cart = ["temp"];

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

let buttons = document.getElementsByTagName("button");
for(let j = 0; j<buttons.length;j++){
  buttons[j].onclick = function(){addToCart(this.parentElement.firstElementChild.innerHTML);}
}

function addToCart(x){
  if(!cart.includes(x)){
    console.log(allItems.get(x));
    let child = document.createElement("li");
    child.innerHTML = "<span>" + x  + "</span><input type='number' class='q' min='0'>" + " <span>" + allItems.get(x) + "<span>";
    document.getElementById("cart").appendChild(child);
    cart.push(x);
  }
}