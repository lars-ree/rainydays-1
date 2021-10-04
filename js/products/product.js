const url = "https://pkderlam.one/rainydays/wp-json/wc/store/products";
const perPageUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?per_page=20";
const productsCollections = document.querySelector(".products_collections");
const featuredUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?featured=true";
const bestSeller = document.querySelector(".bestSeller");
const waterproof = document.querySelector("#waterproof");
const ski = document.querySelector("#ski");
const windbreaker = document.querySelector("#windbreaker");
const accessories = document.querySelector("#accessories");
//-----------------------PRODUCTS SECTION---------------------------//
async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json(url);
    for (let i = 0; i < products.length; i++) {
        const idProduct = products[i];
        productsCollections.innerHTML += `
        <a href = "/specific_product.html?id=${idProduct.id}">
        <div class="productsCards"> <h2>${idProduct.name}</h2>
        <div class="spotlightImage">
        <img src= ${idProduct.images[0].src} alt="${idProduct.images[0].alt}">
        </div>
        <h4 class="productPrice">${idProduct.prices.price}, - Nok</h4>
        </div></a>`
    }
    //bsProducts(featuredUrl);
}
getProducts(perPageUrl);
//-----------------------BEST SELLERS SECTION---------------------------//
async function bsProducts(url) {
    const response = await fetch(url);
    const bsProducts = await response.json();
    console.log(bsProducts);
    for (let i = 0; i < bsProducts.length; i++) {
        bestSeller.innerHTML +=
            `<a href = "/specific_product.html?id=${bsProducts[i].id}"> <div class="productsCards">
                <h4 class="productType">${bsProducts[i].name}</h4>
                <div class="spotlightImage">
                <img src= ${bsProducts[i].images[0].src} alt="${bsProducts[i].images[0].alt}">
                </div>
                <h4 class="productPrice">${bsProducts[i].prices.price}, - Nok</h4>
                <img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest-products_cards"></img>
                </div></a>`
    }
}
bsProducts(featuredUrl);
//-----------------------CATEGORIES MENU---------------------------//
waterproof.addEventListener("click", waterproofProducts);
function waterproofProducts(event) {
    productsCollections.innerHTML = " ";
    const newUrl = url + `?category=19`;
    getProducts(newUrl);
}
ski.addEventListener("click", skiProducts);
function skiProducts(event) {
    productsCollections.innerHTML = " ";
    const newUrl = url + `?category=18`;
    getProducts(newUrl);
}
windbreaker.addEventListener("click", windbreakerProducts);
function windbreakerProducts(event) {
    productsCollections.innerHTML = " ";
    const newUrl = url + `?category=17`;
    getProducts(newUrl);
}
accessories.addEventListener("click", accessoriesProducts);
function accessoriesProducts(event) {
    productsCollections.innerHTML = " ";
    const newUrl = url + `?category=16`;
    getProducts(newUrl);
}