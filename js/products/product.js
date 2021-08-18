const baseUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products";
const productsCollections = document.querySelector(".products_collections");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
        productsCollections.innerHTML += `
            <a href = "/specific_product.html?id=${product.id}">
            <div class="productsCards" > <h2>${product.name}</h2>
            <div class="spotlightImage" style="background-image:url('${product.images[0].src}')"></div>
            </div></a>`
        console.log(product.images[0].src);
    });
}
getProducts(baseUrl);


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