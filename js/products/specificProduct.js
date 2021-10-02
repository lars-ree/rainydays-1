const title = document.querySelector("title");
const titlePage = document.querySelector("#titleOfPage");
const specificMenu = document.querySelector(".wrap_products-menu-option");
const photosSpecificProduct = document.querySelector(".photos_specific-product");
const detailsBuying = document.querySelector(".details_buying");
const best_seller = document.querySelector(".best_seller");
const messageError = document.querySelector(".messageError");
const modal = document.querySelector("#modal");
const url = "https://pkderlam.one/rainydays/wp-json/wc/store/products";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    window.history.back();
}
//------------------------SHOW THE SPECIFIC PRODUCT-------------------------// 
const selectedProduct = `${url}/${id}`;

async function fetchSpecificProduct() {
    const response = await fetch(selectedProduct);
    const singleProduct = await response.json();
    titlePage.innerHTML = `<h1 class="title-page">${singleProduct.name}</h1>`;
    specificMenu.innerHTML = `<li class="products-menu-option specific">${singleProduct.name}</li>`;
    photosSpecificProduct.innerHTML = `<img src=${singleProduct.images[0].src}  alt="${singleProduct.images[0].alt}">`;
    detailsBuying.innerHTML = `<div>
    <h4>${singleProduct.name}</h4>
    <h4>${singleProduct.prices.price}-, Nok</h4>
    </div>`;
    const img = document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", showModal);
    }
}
fetchSpecificProduct();
const bsProductsUrl = url + "?featured=true";
async function bestsProduct() {
    const response = await fetch(bsProductsUrl);
    const allBSProduct = await response.json();
    console.log(allBSProduct);
    for (let i = 0; i < allBSProduct.length; i++) {
        console.log(allBSProduct[i].id);
        if (allBSProduct[i].id === parseInt(id)) {
            best_seller.innerHTML =
                `<img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest-products"></img>`;
        }
    }
}
bestsProduct();
//--------------------MODAL IMAGE--------------//
function showModal(event) {
    modal.style.display = "block";
    modal.innerHTML = `${event.target.outerHTML} <button id="close"><i class="fas fa-times"></i></button>`;
    const close = document.querySelector("#close");
    close.addEventListener("click", function closeModal(event) {
        modal.style.display = "none";
    });
}
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});