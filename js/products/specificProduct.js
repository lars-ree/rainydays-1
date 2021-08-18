/*import { productsStok } from "../constants/stok.js";*/

const title = document.querySelector("title");
const titlePage = document.querySelector("#titleOfPage");
const specificMenu = document.querySelector(".wrap_products-menu-option");
const photosSpecificProduct = document.querySelector(".photos_specific-product");
const detailsBuying = document.querySelector(".details_buying");
const best_seller = document.querySelector(".best_seller");
const form = document.querySelector("form");
var radios = document.getElementsByName("color");
var size = document.querySelector("#size");
const messageError = document.querySelector(".messageError");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    window.history.back();
}
console.log(queryString);
/*async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
        title.innerHTML = `Rainydays | ${product.name}`;
        titlePage.innerHTML = `<h1 class="title-page">${product.name}</h1>`;
        specificMenu.innerHTML = `<li class="products-menu-option specific">${product.name}</li>`;
    });
}
getProducts(queryString);*/
/*console.log(id);
function titleOfPage() {
    title.innerHTML = `Rainydays | ${product[id].name}`;
    titlePage.innerHTML = `<h1 class="title-page">${product[id].name}</h1>`;
    specificMenu.innerHTML = `<li class="products-menu-option specific">${product[id].name}</li>`;
}
titleOfPage(id);*/
/*function photos() {
    photosSpecificProduct.innerHTML = `${productsStok[id].photo}`;
}
photos(id);*/
/*function details() {
    detailsBuying.innerHTML = `<div>
    <h4>${productsStok[id].type}</h4>
    <h4>${productsStok[id].price}-, Nok</h4>
    <h4>Watterproof: ${productsStok[id].waterproof}</h4>
    <h4>Hours outside: until ${productsStok[id].hoursOut} hours</h4>
    <h4>Suitable for until ${productsStok[id].minTemp}°C</h4>
    <h4 class ="unit">Only remain ${productsStok[id].units} units</h4>
    </div>`
    if ((productsStok[id].bestseller) === true) {
        best_seller.innerHTML = `<img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest">`;
    }*/
/*}
details(id);*/
//----------------Cart
let cartArray = [];
let total = 0;
function submitForm(event) {
    event.preventDefault();
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            cartArray.push(
                {
                    color: radios[i].value,
                    sizeChoice: size.value,
                    productType: productsStok[id].type,
                    productPrice: productsStok[id].price,
                    productPhoto: productsStok[id].photo,
                }
            );
        }
    }
    saveData(cartArray);
    showCart(cartArray);
    showTotal(total);
    form.reset();
}
form.addEventListener("submit", submitForm);

function showCart() {
    console.log(cartArray);
    cart.style.display = "block";
    cartList.innerHTML = "";
    for (let i = 0; i < cartArray.length; i++) {
        cartList.innerHTML +=
            `<div class="cart-productChosen">
        <figure class = "checkout-modal_photo">${cartArray[i].productPhoto}</figure>
        <h5 class="cart-item">${cartArray[i].productType}</h5>
        <h5 class="cart-item">Price: ${cartArray[i].productPrice},-</h5>
        <h5 class="cart-item">Size: ${cartArray[i].sizeChoice}</h5>
        <h5 class="cart-item">Color: ${cartArray[i].color}</h5></div>`;
    }
};
function showTotal() {
    totalContainer.innerHTML = "";
    let total = 0;
    for (let i = 0; i < cartArray.length; i++) {
        total += (cartArray[i].productPrice);
        totalContainer.innerHTML = `Total: ${total}`;
    }
}
function saveData() {
    localStorage.setItem("cartList", JSON.stringify(cartArray));
}
/*if (!cartArray.color) {
    messageError.innerHTML = createMessage("Error", `<i class="fas fa-exclamation-triangle"></i> Please select one option of size and color! <i class="fas fa-exclamation-triangle"></i>`);
    cartList.style.display = "none";
}*/
