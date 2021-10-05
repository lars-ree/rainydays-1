const myProduct = document.querySelector("#myProduct");
const myTotal = document.querySelector(".myTotal");
const shoppingCart = document.querySelector(".shoppingCart");
//--------------------------Product buy
const cartItems = JSON.parse(localStorage.getItem("cartList"));
console.log(cartItems);
let total = 0;
cartItems.forEach(function (cartElement) {
    total += Number(cartElement.productPrice);
    myProduct.innerHTML +=
        `<div class="cart-productChosen">
    <figure class = "checkout-modal_photo"><img src= "${cartElement.productPhoto}" alt="${cartElement.productPhotoAlt}"></figure>
    <h5 class="cart-item">${cartElement.productType}</h5>
    <h5 class="cart-item">Price: ${cartElement.productPrice},-</h5>
    <h5 class="cart-item">Size: ${cartElement.sizeChoice}</h5>
    <h5 class="cart-item">Color: ${cartElement.color}</h5></div>`;
});
myTotal.innerHTML = `Total: ${total} Nok`;

function fullCart() {
    if (total !== 0) {
        shoppingCart.innerHTML = `<i class="fas fa-cart-plus"></i>`;
    }
}
fullCart();