const ITEMS_DATA = [{
        itemName: 'Select Item',
        price: 0
    },
    {
        itemName: 'Pizza',
        price: 200
    },
    {
        itemName: 'Burger',
        price: 150
    },
    {
        itemName: 'French Fries',
        price: 50
    },
    {
        itemName: 'Momos',
        price: 100
    },
    {
        itemName: 'Noodles',
        price: 80
    }
];

let cart = [];
let totalAmount = 0;
let stateGST = 0;
let centreGST = 0;
let grandTotal = 0;

let itemsContainer = document.getElementById('items');
let quantityContainer = document.getElementById('quantity');
let addButtonContainer = document.getElementById('addButton');
let tableDataContainer = document.getElementById('table-data');
let totalAmountContainer = document.getElementById('total-amount');
let grandTotalContainer = document.getElementById('grand-total');
let stateGSTContainer = document.getElementById('state-gst');
let centreGSTContainer = document.getElementById('centre-gst');
let tableRowContainer = document.getElementById('table-row');
let orderTableContainer = document.getElementById('order-table-data');
let popupContainer = document.getElementById('popup-container');

function checkForAddButton(e, selectBox) {
    if (selectBox) {
        quantityContainer.focus();
    }
    if (checkForItemAndQuantity()) {
        // addButtonContainer.style.display = 'block';
        addButtonContainer.classList.add('active');
        addButtonContainer.classList.remove('inactive');
        if (e.keyCode === 13) {
            addToCart();
        }
    } else {
        addButtonContainer.classList.add('inactive');
        addButtonContainer.classList.remove('active');
        // addButtonContainer.style.display = 'none';
    }

}

function checkForItemAndQuantity() {
    return itemsContainer.value != 0 && quantityContainer.value != '' && quantityContainer.value != 0 ?
        true : false;
}


function populateItems() {
    let elem = '';
    ITEMS_DATA.forEach((item) => {
        elem = elem + `<option value="${item.price}">${item.itemName}</option>`;
    });
    itemsContainer.innerHTML = elem;
    populateCartItems();
}

function populateCartItems() {
    let sessionCart = sessionStorage.getItem('cart');
    if (sessionCart !== null) {
        cart = JSON.parse(sessionCart);
        if (cart.length !== 0)
            generateTable();
    }

}

function addToCart() {
    // 1. Pull the item name from select box which has been selected.
    // 2. Get the quantity from the quantity input box.
    // 3. Check if the item is already present in the cart. If yes then update that item with new quantity and rowTotal and exit. If no, then continue to next step.
    // 4. Create an object of item details for displaying inside table.
    // 5. Push the same object inside cart array.
    let selectedItemIndex = itemsContainer.selectedIndex;
    let itemName = itemsContainer[selectedItemIndex].text;
    let qty = +quantityContainer.value;
    let price = +itemsContainer.value;
    let cartItemIndex = getItemIndexInCart(itemName);
    if (cartItemIndex === -1) {
        let itemObj = {
            itemName: itemName,
            quantity: qty,
            price: price,
            rowTotal: qty * price
        };
        cart.push(itemObj);
    } else {
        cart[cartItemIndex].quantity = +cart[cartItemIndex].quantity + +qty;
        cart[cartItemIndex].rowTotal = +cart[cartItemIndex].quantity * price;
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    generateTable();
}

function generateTable() {
    let elem = '';
    cart.forEach((item) => {
        elem = elem + `<div class="row items-row">`;
        elem = elem + `<div>${item?.itemName}</div>`;
        elem = elem + `<div>${item?.quantity}</div>`;
        elem = elem + `<div>${item?.price}</div>`;
        elem = elem + `<div>${item?.rowTotal}</div>`;
        elem = elem + `<div class="danger" onclick="deleteItem('${item.itemName}')">X</div>`;
        elem = elem + `</div>`;
    });
    tableDataContainer.innerHTML = elem;
    calculateTotalAmount();
    tableRowContainer.style.display = 'block';
    resetAll();
}

function deleteItem(itemName) {
    let cartItemIndex = getItemIndexInCart(itemName);
    cart.splice(cartItemIndex, 1);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    generateTable();
}

function resetAll() {
    itemsContainer.selectedIndex = 0;
    quantityContainer.value = '';
    checkForAddButton();
    itemsContainer.focus();
}

function resetCart() {
    cart = [];
    sessionStorage.removeItem('cart');
    resetAll();
    generateTable();
}

function calculateTotalAmount() {
    totalAmount = 0;
    cart.forEach((item) => {
        totalAmount += +item.rowTotal;
    });
    totalAmountContainer.innerHTML = totalAmount;
    stateGSTContainer.innerHTML = totalAmount * 2.5 / 100;
    centreGSTContainer.innerHTML = totalAmount * 2.5 / 100;
    grandTotalContainer.innerHTML = totalAmount + (totalAmount * (5 / 100));
}



function getItemIndexInCart(itemName) {
    let cartItemIndex = cart.findIndex((item) => {
        return item.itemName === itemName;
    });
    return cartItemIndex;
}

function saveOrder() {
    // 1. Check if the cart is having minimum of one item.
    // 2. Get the cart array and traverse all the objects from the same.
    // 3. Save all the objects from cart into json-api.
    if (cart.length > 0) {
        cart.forEach(async (item) => {
            // hit the api here
            await saveToAPI(item);
        });
        resetCart();
    }
}

async function saveToAPI(item) {
    try {
        await fetch("http://localhost:3000/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    } catch (err) {
        console.error(`Error while inserting Order ${err}`);
    }
}

async function fetchOrders() {
    try {
        let res = await fetch("http://localhost:3000/orders");
        res = await res.json();
        generateOrderTable(res);
        popupContainer.style.display = "block";
    } catch (err) {
        console.error(`Error while fetching Orders ${err}`);
    }
}
function closePopup(){
    popupContainer.style.display = "none";
}

function generateOrderTable(orders) {
    let elem = '';
    if (orders.length > 0) {
        orders.forEach((item) => {
            elem = elem + `<div class="row items-row">`;
            elem = elem + `<div>${item?.itemName}</div>`;
            elem = elem + `<div>${item?.quantity}</div>`;
            elem = elem + `<div>${item?.price}</div>`;
            elem = elem + `<div>${item?.rowTotal}</div>`;
            elem = elem + `</div>`;
        });
    } else {
        elem = 'No Orders Found!!';
    }
    orderTableContainer.innerHTML = elem;
}