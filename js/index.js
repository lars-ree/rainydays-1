
const indexProducts = document.querySelector(".index-products");
const bestProducts = document.querySelector(".bestProducts");
const perPageUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?per_page=6";
const featuredUrl = "https://pkderlam.one/rainydays/wp-json/wc/store/products?featured=true";
//-----------------------PRODUCTS SECTION---------------------------//
async function getProducts() {
    const response = await fetch(perPageUrl);
    const products = await response.json();
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
    console.log(bsProducts);
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