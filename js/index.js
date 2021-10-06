const indexProducts = document.querySelector(".index-products");
const bestProducts = document.querySelector(".bestProducts");
const iconSearch = document.querySelector(".fa-search");
const resultSearch = document.querySelector(".resultSearch");
const baseUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products";
const perPageUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?per_page=6";
const featuredUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?featured=true";
//-----------------------PRODUCTS SECTION---------------------------//
indexProducts.innerHTML = `<div class = "loader"></div>`;
async function getProducts() {
    const response = await fetch(perPageUrl);
    const products = await response.json();
    indexProducts.innerHTML = " ";
    for (let i = 0; i < products.length; i++) {
        const idProduct = (products[i]);
        if (((idProduct.id) % 2) === 0) {
            indexProducts.innerHTML += `
        <a href = "/specific_product.html?id=${idProduct.id}">
        <div class="productsCards"> <h2>${idProduct.name}</h2>
        <img src= ${idProduct.images[0].src} alt="${idProduct.images[0].alt}" class="spotlightImage">
        <h4 class="productPrice">${idProduct.prices.price}, - Nok</h4>
        </div></a>`
        }
    }
    bsProducts(featuredUrl);
}
getProducts(perPageUrl);
//-----------------------BEST SELLERS SECTION---------------------------//
async function bsProducts(url) {
    const response = await fetch(url);
    const bsProducts = await response.json();
    for (let i = 0; i < bsProducts.length; i++) {
        bestProducts.innerHTML +=
            `<a href = "/specific_product.html?id=${bsProducts[i].id}"> <div class="productsCards">
                <h4 class="productType">${bsProducts[i].name}</h4>
                <img src= ${bsProducts[i].images[0].src} alt="${bsProducts[i].images[0].alt}" class="spotlightImage">
                <h4 class="productPrice">${bsProducts[i].prices.price}, - Nok</h4>
                <img src= "images/fivestars.jpg" alt= "Five star for the best seller" class="starsBest-products_cards"></img>
                </div></a>`
    }
}
//-----------Search Products--------//
function searchProducts() {
    const searchValue = document.querySelector("#search").value;
    const newUrl = baseUrl + `?search=${searchValue}`;
    indexProducts.innerHTML = `<div class = "loader"></div>`;
    getProductsSearch(newUrl);
}
iconSearch.addEventListener("click", searchProducts);

async function getProductsSearch(newUrl) {
    const response = await fetch(newUrl);
    const products = await response.json();
    indexProducts.innerHTML = " ";
    resultSearch.innerHTML = " ";
    for (let i = 0; i < products.length; i++) {
        const idProduct = (products[i]);
        resultSearch.innerHTML +=
            `<a href = "/specific_product.html?id=${idProduct.id}">
        <div class="productsCards"> <h3>${idProduct.name}</h3>
        <img src= ${idProduct.images[0].src} alt="${idProduct.images[0].alt}" class="spotlightImage">
        <h4 class="productPrice">${idProduct.prices.price}, - Nok</h4>
        </div></a>`
    }
}