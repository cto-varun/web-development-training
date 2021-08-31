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
        let cart = [];
        let previousCart = getCartItems();
        if (previousCart.length > 0) {
            let productIndex = getProductIndexFromCart(previousCart, productName);
            if (productIndex == -1)
                cart = [...previousCart, productDetail];
            else
                cart = [...previousCart];
        } else {
            cart = [productDetail];
        }
        setCartToLocalStorage(cart);
        window.location = './cart.html';
    } else {
        alert("Please select size and quantity");
    }
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
    getTotalCartItemNumber();
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
function getTotalCartItemNumber() {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        document.getElementById("cart-item-total").innerHTML = cart.length;
    }
}
function populateCart() {
    getTotalCartItemNumber();
    let cart = getCartItems();
    let cartDetailContainer = document.getElementById("cart-details");

    if (cart.length > 0) {
        let elem = '';
        for (const product of cart) {
            elem += `<div class="row pt-1 pb-1">`;
            elem += `<div class="col-6">`;
            elem += `<div class="row align-items-center">`;
            elem += `<div class="col-1" style="cursor:pointer;color:#F00" onclick="deleteItemFromCart('${product.productName}')">X</div>`;
            elem += `<div class="col-2">`;
            elem += `<img src="${product.productImage}"  width="50%" />`;
            elem += `</div>`;
            elem += `<div class="col-9 text-left">`;
            elem += `${product.productName}`;
            elem += `</div>`;
            elem += `</div>`;
            elem += `</div>`;
            elem += `<div class="col-6 pb-3">`;
            elem += `<div class="row justify-content-start align-items-center">`;
            elem += `<div class="col-4 text-center">₹ ${product.productPrice}</div>`;
            elem += `<div class="col-4 d-flex justify-content-center align-items-center">`;
            elem += `<input type="number" onkeyup="updateQuantity(this,'${product.productName}', '${product.quantity}','${product.productPrice}')" onchange="updateQuantity(this,'${product.productName}', '${product.quantity}','${product.productPrice}')" value="${product.quantity}" class="cart-quantity-box"/>`;
            elem += `</div>`;
            elem += `<div class="col-4 text-center">₹ ${+product.productPrice * +product.quantity}</div>`;
            elem += `</div>`;
            elem += `</div>`;
            elem += `</div>`;
            elem += `<hr />`;
        }
        cartDetailContainer.innerHTML = elem;
    } else {
        window.location = './products.html';
    }
}

function getCartItems() {
    let cart = localStorage.getItem('cart');
    if (cart)
        return JSON.parse(cart);
    return [];
}
function getProductIndexFromCart(cart, productName) {
    return cart.findIndex((ct) => {
        return ct.productName === productName;
    });

}
function updateQuantity(box, productName, quantity, productPrice) {
    if (box.value !== '' && box.value !== quantity) {
        let cart = getCartItems();
        if (cart.length > 0) {
            let productIndex = getProductIndexFromCart(cart, productName);
            cart[productIndex].quantity = box.value;
            setCartToLocalStorage(cart);
            populateCart();
        }
    }
}
function setCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function deleteItemFromCart(productName) {
    // 1. Find the position of the product in localStorage cart.
    let cart = getCartItems();
    let productIndex = getProductIndexFromCart(cart, productName);
    cart.splice(productIndex, 1);
    setCartToLocalStorage(cart);
    populateCart();
}