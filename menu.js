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
let cart = [];

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

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
  buttons[j].onclick = function(){addToCart(this.parentElement.firstElementChild.innerHTML, this);}
}

function addToCart(x,y){
  if(!cart.includes(x)){
    let child = document.createElement("li");
    child.innerHTML = "<span>" + x  + "</span><input type='number' class='q' min='1' value='1' onchange='changePrice(this.value, this.parentElement.firstElementChild.innerHTML, this)'>" + " <span>" + dollarUS.format(allItems.get(x)) + "<span>";
    child.classList.add("cartLi");
    document.getElementById("cart").appendChild(child);
    cart.push(x);
    y.innerHTML = "Remove from Cart";
  }else{
    let delNum;
    for(let k = 0; k<cart.length;k++){
      if(cart[k] == x){
        delNum = k;
        cart = cart.slice(0,k).concat(cart.slice(k+1));
        break;
      }
    }
    document.getElementById("cart").children[delNum].remove();
    y.innerHTML = "Add to Cart";
  }
}

function changePrice(x,y,z){
  z.parentElement.children[2].innerHTML = dollarUS.format(allItems.get(y)*x);
}