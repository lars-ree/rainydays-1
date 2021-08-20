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
const url = "https://pkderlam.one/rainydays/wp-json/wc/store/products?per_page=20";;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// get the id from the query string
const id = params.get("id");
console.log(id);
// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    window.history.back();
}
//------------------------SHOW THE SPECIFIC PRODUCT-------------------------// 
async function fetchSpecificProduct() {
    const response = await fetch(url);
    const allProducts = await response.json();
    console.log(allProducts);
    for (let i = 0; i < allProducts.length; i++) {
        const idSelectedProduct = allProducts[i].id;
        if (idSelectedProduct === parseInt(id)) {
            const selectedProduct = allProducts[i];
            showSelectedProduct(selectedProduct);
        }
    }
}
fetchSpecificProduct();

function showSelectedProduct(selectedProduct) {
    titleOfPage(selectedProduct);
    photos(selectedProduct);
    details(selectedProduct);
    bestSeller(selectedProduct);
}
function titleOfPage(selectedProduct) {
    titlePage.innerHTML = `<h1 class="title-page">${selectedProduct.name}</h1>`;
    specificMenu.innerHTML = `<li class="products-menu-option specific">${selectedProduct.name}</li>`;
}
function photos(selectedProduct) {
    photosSpecificProduct.innerHTML = `<img src=${selectedProduct.images[0].src}  alt="${selectedProduct.images[0].alt}">`;
}
function details(selectedProduct) {
    detailsBuying.innerHTML = `<div>
    <h4>${selectedProduct.name}</h4>
    <h4>${selectedProduct.prices.price}-, Nok</h4>
    </div>`
}

/*
async function fetchSpecificBS(url) {
    const response = await fetch(url);
    const specificBS = await response.json();
    const selectedBS = specificBS[id].id;
    console.log(selectedBS);
    //showSelectedProduct(selectedProduct)
}
fetchSpecificBS(url);*/


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
                    productType: selectedProduct.name,
                    productPrice: selectedProduct.prices.price,
                    productPhoto: selectedProduct.images[0].src,
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
