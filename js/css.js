const itemNames = ["gallery", 'about'];
let listItems = document.getElementsByTagName("li");
function assignClassToListItems() {

    for (const item of listItems) {
        // console.log(item.innerHTML)
        if (itemNames.includes(item.innerHTML.trim().toLocaleLowerCase())
            // item.innerHTML.trim().toLowerCase() == "contact"
            // ||
            // item.innerHTML.trim().toLowerCase() == "gallery"
        ) {
            item.classList.add("highlight");
        } else {
            item.classList.add("highlight-opposite")
        }
    }
}

function toggleClass() {
    for (const item of listItems) {
        // item.classList.toggle("highlight");
        // item.classList.remove("highlight");
        // console.log(item.classList);
        if (item.classList.contains("highlight")) {
            item.classList.add('red-bg')
        }
    }
}