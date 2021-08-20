const url = "https://pkderlam.one/rainydays/wp-json/wc/store/products";
const perPageUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?per_page=20";
const productsCollections = document.querySelector(".products_collections");
const featuredUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?featured=true";
const bestSeller = document.querySelector(".bestSeller");
//-----------------------PRODUCTS SECTION---------------------------//
async function getProducts() {
    const response = await fetch(perPageUrl);
    const products = await response.json();
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
    bsProducts(featuredUrl);
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


/*if (featured === true) {
    bestSeller.innerHTML += `
    <div class="productsCards"> <h2>${product.name}</h2>
    <div class="product.image" style="background-image:url("${product.image}")
    <img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest-products_cards">
    </div>`
} else {*/

/*import { productsStok } from "../constants/stok.js";

const products_collections = document.querySelector(".products_collections");
const bestSeller = document.querySelector(".bestSeller");
for (let i = 0; i < productsStok.length; i++) {
    products_collections.innerHTML += `<a href = "/specific_product.html?id=${i}"> <div class="productsCards" id="${productsStok[i].class}">
    ${productsStok[i].photo}
    <h4 class="productType">${productsStok[i].type}</h4>
    <h4 class="productPrice">${productsStok[i].price}, - Nok</h4> <button class="cta_productSpecific">See more</button></div></a>`;
}
//Best Sellers section
for (let i = 0; i < productsStok.length; i++) {
    if ((productsStok[i].bestseller) === true) {
        bestSeller.innerHTML += `<a href = "/specific_product.html?id=${i}"> <div class="productsCards">
    ${productsStok[i].photo}
    <h4 class="productType">${productsStok[i].type}</h4>
    <h4 class="productPrice">${productsStok[i].price}, - Nok</h4>
    <img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest-products_cards">
    <button class="cta_productSpecific">See more</button></div></a>`;
    }
}*/