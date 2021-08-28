const products = [{
    "image": "./assets/imgs/products/top-one.jpeg",
    "name": "Canary yellow seahorse blazer",
    "price": "18000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-two.jpeg",
    "name": "Starburst kilt trouser",
    "price": "15000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-three.jpeg",
    "name": "The starburst metallic hoodie dress",
    "price": "28000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-one.jpeg",
    "name": "Canary yellow seahorse blazer",
    "price": "18000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-two.jpeg",
    "name": "Starburst kilt trouser",
    "price": "15000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-three.jpeg",
    "name": "The starburst metallic hoodie dress",
    "price": "28000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-one.jpeg",
    "name": "Canary yellow seahorse blazer",
    "price": "18000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-two.jpeg",
    "name": "Starburst kilt trouser",
    "price": "15000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-three.jpeg",
    "name": "The starburst metallic hoodie dress",
    "price": "28000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-one.jpeg",
    "name": "Canary yellow seahorse blazer",
    "price": "18000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-two.jpeg",
    "name": "Starburst kilt trouser",
    "price": "15000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-three.jpeg",
    "name": "The starburst metallic hoodie dress",
    "price": "28000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-one.jpeg",
    "name": "Canary yellow seahorse blazer",
    "price": "18000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-two.jpeg",
    "name": "Starburst kilt trouser",
    "price": "15000",
    "description": "Here goes the description of the product."
},
{
    "image": "./assets/imgs/products/top-three.jpeg",
    "name": "The starburst metallic hoodie dress",
    "price": "28000",
    "description": "Here goes the description of the product."
}
];
const sizeList = ['XS', 'S', 'M', 'L', 'XL'];
let selectedSize = '';


function generateSizeListBoxes(sizeName) {
    let sizeBoxesContainer = document.getElementById('size-boxes-container');
    let elem = '';
    for (const size of sizeList) {
        elem += `<div class="boxes ${sizeName && sizeName == size ? ' highlight' : ''}" onclick="toggleSizeClass(this)">${size}</div>`;
    }
    sizeBoxesContainer.innerHTML = elem;
}

function toggleSizeClass(box) {
    selectedSize = box.innerHTML;
    generateSizeListBoxes(box.innerHTML);
}
function addToCart() {

    // 1. Product details like name, description, image, price
    const { productName, productImage, productPrice, productDescription } = getProductDetailsFromSessionStorage();

    // 2. qunatity selected by user.
    const quantity = document.getElementById('quantity').value;
    // 3. selected size by the user.
    
    // 4. create an object of all these details and add them to cart array. 
    if (quantity > 0 && selectedSize != "") {
        const productDetail = {
            productName,
            productImage,
            productPrice,
            productDescription,
            quantity,
            selectedSize
        };
        localStorage.setItem("cart", JSON.stringify(productDetail));
    } else {
        alert("Please select size and quantity");
    }
}

function getCart() {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    // console.log(cart.productName);
}
function generateProducts() {
    let productsContainer = document.getElementById("products-container");
    let elem = '';
    products.forEach((product, index) => {
        const { image, name, price, description } = product;
        elem += `<div class="col col-md-4 col-xl-3" id="product-${index}" onclick="saveToCache('${name}','${price}','${image}','${description}')">`;
        elem += `<div class="col product-container">`;
        elem += `<div class="overlay transition"></div>`;
        elem += `<div class="icons-container d-flex flex-column transition">`;
        elem += `<i class="far fa-eye eyeIcon p-3"></i>`;
        elem += `<i class="fas fa-heart heartIcon p-3"></i>`;
        elem += `</div>`;
        elem += `<img src="${image}" alt="">`;
        elem += `<div class="col text-content d-flex flex-column align-items-center pt-2">`;
        elem += `<p>${name}</p>`;
        elem += `<p>₹ ${price}</p>`;
        elem += `</div>`;
        elem += `</div>`;
        elem += `</div>`;
    });
    productsContainer.innerHTML = elem;
}
function setProductDetailsInSessionStorage(name, price, image, description) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', image);
    localStorage.setItem('productDescription', description);
}
function saveToCache(name, price, image, description) {
    setProductDetailsInSessionStorage(name, price, image, description);
    window.location = "./productDetails.html";
}
function getProductDetailsFromSessionStorage() {
    const productName = localStorage.getItem("productName");
    const productImage = localStorage.getItem("productImage");
    const productPrice = localStorage.getItem("productPrice");
    const productDescription = localStorage.getItem("productDescription");
    return {
        productName,
        productImage,
        productPrice,
        productDescription
    };
}

function loadProductDetails() {
    generateSizeListBoxes();
    const { productName, productImage, productPrice, productDescription } = getProductDetailsFromSessionStorage();
    if (productName && productPrice && productImage && productDescription) {
        let productNameContainer = document.getElementById("product-name");
        let productPriceContainer = document.getElementById("product-price");
        let productImageContainers = document.getElementsByClassName("product-image");
        let productDescriptionContainer = document.getElementById("product-description");
        productNameContainer.innerHTML = productName;
        productPriceContainer.innerHTML = ' ₹ ' + productPrice;
        productDescriptionContainer.innerHTML = productDescription;
        for (const productImageContainer of productImageContainers) {
            productImageContainer.src = productImage;
        }
    } else {
        window.location = "./products.html";
    }

}