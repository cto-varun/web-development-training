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
        "name": "The starburst",
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

const menus = [{
        menuName: 'Home',
        link: './'
    },
    {
        menuName: 'About',
        link: './about'
    },
    {
        menuName: 'Contact',
        link: './'
    },
    {
        menuName: 'Services',
        link: './'
    },
    {
        menuName: 'Shop',
        dropDown: true,
        subMenuItems: [{
                menuName: 'Products',
                link: './products.html'
            },
            {
                menuName: 'Showcase',
                link: './'
            },
            {
                menuName: 'Reset.Restart',
                link: './products.html'
            }
        ]
    }
];

let shippingFormFields = [{
        name: 'First Name',
        key: 'firstName',
        type: 'text'
    },
    {
        name: 'Last Name',
        key: 'lastName',
        type: 'text'
    },
    {
        name: 'Email',
        key: 'email',
        type: 'email'
    },
    {
        name: 'Pincode',
        key: 'pincode',
        type: 'number'
    }
];
let billingFormFields = [{
        name: 'First Name',
        key: 'firstName',
        type: 'text'
    },
    {
        name: 'Last Name',
        key: 'lastName',
        type: 'text'
    },
    {
        name: 'Email',
        key: 'email',
        type: 'email'
    },
    {
        name: 'Pincode',
        key: 'pincode',
        type: 'number'
    }
];



const sizeList = ['XS', 'S', 'M', 'L', 'XL'];
let selectedSize = '';
let notificationContainer = document.getElementById("notification-container");
let notificationInfoContainer = document.getElementById("notification-info");
let onload = false;
let modal = new bootstrap.Modal(document.getElementById('myModal'));
let placeOrder = false;




function generateSubmenu(subMenuItems) {
    var elem = '';
    for (const menuItem of subMenuItems) {
        elem += `<li><a class="dropdown-item" href="${menuItem.link}">${menuItem.menuName}</a></li>`;
    }
    return elem;

}

function generateMenus() {
    let menuContainer = document.getElementById('menu-container');
    var elem = '';
    let i = 0;
    for (const menu of menus) {
        if (menu.dropDown) {
            elem += `<li class="nav-item dropdown">`;
            elem += `<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">`;
            elem += menu.menuName;
            elem += `</a>`;
            elem += `<ul class="dropdown-menu" aria-labelledby="navbarDropdown">`;
            elem += generateSubmenu(menu.subMenuItems);
            elem += `</ul>`;
            elem += `</li>`;
        } else {
            elem += `<li class="nav-item ${i === 0 ? ' active' : ''}">`;
            elem += `<a class="nav-link" href="${menu.link}">${menu.menuName} <span class="sr-only">(current)</span></a>`;
            elem += `</li>`;
        }
        i++;
    }
    menuContainer.innerHTML = elem;
}

function generateSizeListBoxes(sizeName) {
    let sizeBoxesContainer = document.getElementById('size-boxes-container');
    let elem = '';
    for (const size of sizeList) {
        elem += `<div class="boxes ${sizeName && sizeName.trim() == size.trim() ? ' highlight' : ''}" onclick = "toggleSizeClass(this)"> ${size}</div> `;
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
        // window.location = './cart.html';
        showNotification(productName, ' has been added to cart.', true);
        getTotalCartItemNumber(true);
    } else {
        alert("Please select size and quantity");
    }
}


function generateProducts() {
    onload = true;

    getTotalCartItemNumber();
    let productsContainer = document.getElementById("products-container");
    let elem = '';
    products.forEach((product, index) => {
        const { image, name, price, description } = product;
        elem += `<div class="col col-md-4 col-xl-3" id = "product-${index}"> `;
        elem += `<div class="col product-container"> `;
        elem += `<div class="overlay transition"></div> `;
        elem += `<div class="icons-container d-flex flex-column transition"> `;
        elem += `<i i class="far fa-eye eyeIcon p-3" onclick = "saveProduct('${name}','${price}','${image}','${description}')"></i> `;
        elem += `<i i class="fas fa-heart heartIcon p-3 ${(isInWishList(name) != -1) ? 'like-btn-active' : ''}"  onclick = "addToWishList('${name}','${price}','${image}','${description}', true)"></i> `;
        elem += `</div> `;
        elem += `<img src = "${image}" alt = ""> `;
        elem += `<div class="col text-content d-flex flex-column align-items-center pt-2"> `;
        elem += `<p> ${name}</p> `;
        elem += `<p>₹ ${price}</p> `;
        elem += `</div> `;
        elem += `</div> `;
        elem += `</div> `;
    });
    productsContainer.innerHTML = elem;
}


// Wishlist functions
function isInWishList(name) {
    let wishList = getWishListItems();
    return getProductIndexFromWishList(wishList, name);
}

function addToWishList(name, price, image, description, listProducts) {
    let productIndex = isInWishList(name);
    let wishList = getWishListItems();

    const productDetail = {
        productName: name,
        productImage: image,
        productPrice: price,
        productDescription: description
    };
    if (productIndex == -1) {
        wishList = [...wishList, productDetail];
    } else {
        wishList.splice(productIndex, 1);
    }
    localStorage.setItem('wishList', JSON.stringify(wishList));
    checkWishList(name);
    if (listProducts)
        generateProducts();
}

function closeNotification() {
    notificationContainer.style.opacity = '0';
}

function showNotification(name, message, success, error, warning) {
    notificationInfoContainer.innerHTML = `<strong>${name}</strong> ${message}`;
    notificationInfoContainer.style.color = success ? "#28a745" : "#f00";
    notificationContainer.style.opacity = '1';
    setTimeout(() => {
        closeNotification();
    }, 10000);
}

function setWishListToLocalStorage(wishList) {
    localStorage.setItem('wishList', JSON.stringify(wishList));
}

function getProductIndexFromWishList(wishList, productName) {
    return wishList.findIndex((wl) => {
        return wl.productName === productName;
    });

}

function getWishListItems() {
    let wishList = localStorage.getItem('wishList');
    if (wishList)
        return JSON.parse(wishList);
    return [];
}
// Wishlist functions endzz here 



function setProductDetailsInSessionStorage(name, price, image, description) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', image);
    localStorage.setItem('productDescription', description);
}

function saveProduct(name, price, image, description) {
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
        checkWishList(productName);
    } else {
        window.location = "./products.html";
    }
}

function checkWishList(name) {
    let wishListIcon = document.getElementById('icon-container-heart');
    const { productName, productImage, productPrice, productDescription } = getProductDetailsFromSessionStorage();
    if (isInWishList(name) != -1) {
        if (wishListIcon)
            wishListIcon.innerHTML = `<i class="fas fa-heart fs-5" onclick="addToWishList('${productName}','${productPrice}','${productImage}','${productDescription}', false)" style="color:#f00;cursor:pointer;"></i>`;
        if (onload) {
            showNotification(name, "has been added to wishlist.", true);
        } else {
            onload = true;
        }
    } else {
        if (onload) {
            showNotification(name, "has been removed from wishlist.", false);
        } else {
            onload = true;
        }
        if (wishListIcon)
            wishListIcon.innerHTML = `<i style="cursor:pointer;" class="fas fa-heart fs-5" onclick="addToWishList('${productName}','${productPrice}','${productImage}','${productDescription}', false)"></i>`;
    }
}

function getTotalCartItemNumber(onlyCartNumber) {
    if (!onlyCartNumber)
        generateMenus();
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        document.getElementById("cart-item-total").innerHTML = cart.length;
    }
}

function populateAddress() {
    let shippingAddress = getAddressFromLocalStorage('shipping');
    let billingAddress = getAddressFromLocalStorage('billing');
    getAddressLayout(shippingAddress, 'shipping-table');
    getAddressLayout(billingAddress, 'billing-table');
}

function getAddressLayout(obj, containerName) {
    let addressType = containerName.split('-')[0];
    let addressContainer = document.getElementById(containerName);
    let elem = '';
    if (obj) {
        let addressObject = JSON.parse(obj);

        for (const addressKey of Object.keys(addressObject)) {
            elem += `<div class="col-6 d-flex justify-content-start align-items-center p-1">${getNameForKey(addressKey)}</div>`;
            elem += `<div class="col-6 d-flex justify-content-start align-items-center p-1">${addressObject[addressKey]}</div>`;
        }

    } else {
        elem += `<h2>No address added yet.</h2>`;
    }
    elem += `<div class="col d-flex justify-content-end align-items-center">`;
    elem += `<button type="button" class="btn btn-primary" onclick="populateAddressSection(${addressType == "shipping" ? true : false})">Edit Address</button>`;
    elem += `</div>`;
    addressContainer.innerHTML = elem;
}

function getNameForKey(addressKey) {
    let addressField = shippingFormFields.find((shipAddress) => shipAddress.key === addressKey);
    return addressField.name;
}


function populateCart() {
    getTotalCartItemNumber();
    populateAddress();
    let cart = getCartItems();
    let cartDetailContainer = document.getElementById("cart-details");
    let totalAmountContainer = document.getElementById("total-amount");
    let subTotalAmountContainer = document.getElementById("subtotal-amount");
    let total = 0;
    if (cart.length > 0) {
        let elem = '';
        for (const product of cart) {
            let subTotal = +product.productPrice * +product.quantity;
            total = total + subTotal;
            elem += `<div class="row pt-1 pb-1"> `;
            elem += `<div class="col-6"> `;
            elem += `<div class="row align-items-center"> `;
            elem += `<div class="col-1" style = "cursor:pointer;color:#F00" onclick = "deleteItemFromCart('${product.productName}')"> X</div> `;
            elem += `<div class="col-2"> `;
            elem += `<img src = "${product.productImage}"  width = "50%" /> `;
            elem += `</div> `;
            elem += `<div class="col-9 text-left"> `;
            elem += `${product.productName} `;
            elem += `</div> `;
            elem += `</div> `;
            elem += `</div> `;
            elem += `<div class="col-6 pb-3"> `;
            elem += `<div class="row justify-content-start align-items-center"> `;
            elem += `<div class="col-4 text-center">₹ ${product.productPrice}</div> `;
            elem += `<div class="col-4 d-flex justify-content-center align-items-center"> `;
            elem += `<input type="number" id="${product.productName}" onkeydown="updateQuantity(event,this,'${product.productName}', '${product.quantity}','${product.productPrice}')" value="${product.quantity}" class="cart-quantity-box" /> `;
            elem += `</div> `;
            elem += `<div class="col-4 text-center">₹ ${subTotal}</div> `;
            elem += `</div> `;
            elem += `</div> `;
            elem += `</div> `;
            elem += `<hr /> `;
        }
        subTotalAmountContainer.innerHTML = total;
        totalAmountContainer.innerHTML = total;
        cartDetailContainer.innerHTML = elem;
        // if (currentSelection)
        //     document.getElementById(currentSelection).focus();
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

function updateQuantity(event, box, productName, quantity) {
    if (event.keyCode == 13) {
        if (box.value !== '' && box.value !== quantity) {
            let cart = getCartItems();
            if (cart.length > 0) {
                let productIndex = getProductIndexFromCart(cart, productName);
                cart[productIndex].quantity = box.value;
                setCartToLocalStorage(cart);
                // currentSelection = box.id;
                populateCart();
            }
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

function generateFormFieldID(shipping, key) {
    return shipping ? `shipping-${key}` : `billing-${key}`;
}

function getForm(shipping) {
    let elem = '';
    let fieldsData = [];
    let addressDetails = {};
    if (shipping) {
        fieldsData = shippingFormFields.slice();
        addressDetails = getAddressFromLocalStorage('shipping');
    } else {
        fieldsData = billingFormFields.slice();
        addressDetails = getAddressFromLocalStorage('billing');
    }
    addressDetails = JSON.parse(addressDetails);
    for (const fieldObject of fieldsData) {
        elem += `<div class="row pt-2 pb-2 bottom-border">`
        elem += `<div class="col-6 border-right">${fieldObject.name}</div>`
        elem += `<div class="col-6">`;
        elem += `<input type="${fieldObject.type}" value="${renderValue(fieldObject.key, addressDetails)}" id="${generateFormFieldID(shipping, fieldObject.key)}"/>`;
        elem += `</div>`
        elem += `</div>`;
    }
    return elem;
}

function renderValue(key, addressDetails) {
    if (addressDetails)
        return addressDetails[key];
    return '';
}

// save address to local storage
function saveAddressToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function removeAddressFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// get address from local storage
function getAddressFromLocalStorage(key) {
    return localStorage.getItem(key);
}


function saveInfo() {

    let modalSaveButtonContainer = document.getElementById("save-button");
    if (modalSaveButtonContainer.innerHTML == "Place Order") {
        let cardNumberContainer = document.getElementById("cardNumber");
        let cardExpiryContainer = document.getElementById("cardExpiry");
        let cardCVVContainer = document.getElementById("cvv");
        let cardObject = {
            cardNumber: cardNumberContainer.value,
            cardExpiry: cardExpiryContainer.value,
            cardCVV: cardCVVContainer.value,
        };
        saveCardInfo(cardObject);
        saveOrder();
    } else if (modalSaveButtonContainer.innerHTML == "Save Shipping Address") {
        let fields = shippingFormFields.slice();
        let shippingObject = {};
        for (const field of fields) {
            shippingObject[field.key] = document.getElementById(`shipping-${field.key}`).value;
        }
        saveAddressToLocalStorage('shipping', JSON.stringify(shippingObject));
    } else {
        let fields = billingFormFields.slice();
        let billingObject = {};
        for (const field of fields) {
            billingObject[field.key] = document.getElementById(`billing-${field.key}`).value;
        }
        saveAddressToLocalStorage('billing', JSON.stringify(billingObject));
    }
    modal.hide();
    populateAddress();
}

function saveOrder() {

}

function saveCardInfo(cardObject) {
    localStorage.setItem('card', JSON.stringify(cardObject));
}


// managing address section
function populateAddressSection(shipping, paymentPage) {
    let modalTitleContainer = document.getElementById('modal-title');
    let modalBodyContainer = document.getElementById('modal-body');
    let modalSaveButtonContainer = document.getElementById("save-button");
    if (paymentPage) {
        $.get("./payment-page.html", function(res) {
            modalTitleContainer.innerHTML = 'Enter Card Details';
            modalBodyContainer.innerHTML = res;
            modalSaveButtonContainer.innerHTML = "Place Order";
            placeOrder = true;
        });
    } else {
        if (shipping) {
            modalTitleContainer.innerHTML = 'Shipping Address';
            modalBodyContainer.innerHTML = getForm(true);
            modalSaveButtonContainer.innerHTML = "Save Shipping Address";
        } else {
            modalTitleContainer.innerHTML = 'Billing Address ';
            modalBodyContainer.innerHTML = getForm();
            modalSaveButtonContainer.innerHTML = "Save Billing Address";
        }
    }


    modal.show();
}

function copyShippingAddress(box) {
    if (box.checked) {
        let shippingAddress = getAddressFromLocalStorage('shipping');
        if (shippingAddress) {
            saveAddressToLocalStorage('billing', shippingAddress);
        }
    } else {
        removeAddressFromLocalStorage('billing');
    }
    populateAddress();
}