const form = document.querySelector("form");
const radios = document.getElementsByName("color");
const size = document.querySelector("#size");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const url = "https://pkderlam.one/rainydays/wp-json/wc/store/products";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// get the id from the query string
const id = params.get("id");

const selectedProduct = `${url}/${id}`;
let singleProduct = {};

async function fetchSpecificProduct() {
    const response = await fetch(selectedProduct);
    singleProduct = await response.json();
}
fetchSpecificProduct();
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
                    productType: singleProduct.name,
                    productPrice: singleProduct.prices.price,
                    productPhoto: singleProduct.images[0].src,
                    productPhotoAlt: singleProduct.images[0].alt,
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
        <figure class = "checkout-modal_photo"><img src=${cartArray[i].productPhoto}  alt="${cartArray[i].productPhotoAlt}"></figure>
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
        total += Number(cartArray[i].productPrice);
        console.log(total);
        totalContainer.innerHTML = `<h4>Total: ${total} Nok</h4>`;
    }
}
function saveData() {
    localStorage.setItem("cartList", JSON.stringify(cartArray));
}
/*if (!cartArray.color) {
    messageError.innerHTML = createMessage("Error", `<i class="fas fa-exclamation-triangle"></i> Please select one option of size and color! <i class="fas fa-exclamation-triangle"></i>`);
    cartList.style.display = "none";
}*/
