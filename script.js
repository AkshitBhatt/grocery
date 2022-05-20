let mainDiv = document.querySelector(".prodects");
let prods = [];

function refreshScreen() {
  mainDiv.innerHTML = prods.join("");
  document.querySelector(".counter").innerHTML = prods.length;
}

const add = `
    
<div class="prodects-1">
<p class="off" >10% OFF</p>

<img
  src="/images/apple_PNG12405.png"
  class="apple"
  alt="apple_PNG12405"
/>
<p class="fruit-text">FRUIT</p>
<p class="b-biscuits">Fresh Indian applepack(6spcs)</p>
<div class="images-star">
  <img src="/images/star-1.svg" alt="star-1" />
  <img src="/images/star-1.svg" alt="star-1" />
  <img src="/images/star-1.svg" alt="star-1" />
  <img src="/images/star-1.svg" alt="star-1" />
  <img src="/images/star.svg" alt="star-1" />
</div>
<p class="dollar"><del>$18.00</del> <b>$12.00</b></p>
<button class="add-card">
  <img src="/images/868538.svg" alt="star" class="imh-1" />
  <span class="add-to-cart-text">Add to Card</span>
</button>
</div>

`;

document.querySelector(".add").addEventListener("click", () => {
  prods.push(add);
  refreshScreen();
});

document.querySelector(".sub").addEventListener("click", () => {
  if (prods.length > 1) {
    prods.pop();
  }
  refreshScreen();
});
