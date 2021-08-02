const ITEMS_DATA = [
    {
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
    }
];

let cart = [];

let itemsContainer = document.getElementById('items');
let quantityContainer = document.getElementById('quantity');
let addButtonContainer = document.getElementById('addButton');

function checkForAddButton() {
    if (checkForItemAndQuantity()) {
        // addButtonContainer.style.display = 'block';
        addButtonContainer.classList.add('active');
        addButtonContainer.classList.remove('inactive');
    } else {
        addButtonContainer.classList.add('inactive');
        addButtonContainer.classList.remove('active');
        // addButtonContainer.style.display = 'none';
    }
}

function checkForItemAndQuantity() {
    return itemsContainer.value != 0 && quantityContainer.value != '' && quantityContainer.value != 0
        ? true : false;
}


function populateItems() {
    let elem = '';
    ITEMS_DATA.forEach((item) => {
        elem = elem + `<option value="${item.price}">${item.itemName}</option>`;
    });
    itemsContainer.innerHTML = elem;
}

function addToCart() {
    // 1. Pull the item name from select box which has been selected.
    // 2. Get the quantity from the quantity input box.
    // 3. create an object of item details for displaying inside table.
    // 4. push the same object inside cart array.
    let selectedItemIndex = itemsContainer.selectedIndex;
    let itemName = itemsContainer[selectedItemIndex].text;
    let qty = +quantityContainer.value;
    let price = +itemsContainer.value;
    // console.log('Item name is ', itemName);
    // console.log('Quantity is ', qty);
    let itemObj = {
        itemName: itemName,
        quantity: qty,
        price: price,
        rowTotal: qty * price
    };
    cart.push(itemObj);
}


