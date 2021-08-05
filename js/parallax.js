let homeContainer = document.getElementById("home");
let aboutContainer = document.getElementById("about");
let contactContainer = document.getElementById("contact");
let galleryContainer = document.getElementById("gallery");
let servicesContainer = document.getElementById("services");
homeContainer.children[0].classList.add('visible');
let allContainers = [aboutContainer, contactContainer, galleryContainer, servicesContainer];
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    homeContainer.style.backgroundPosition = `0px -${scrollY * (10 / 100)}px`;
    let i = 0;
    allContainers.forEach((container) => {
        checkContainerPosition(scrollY, container, i);
        i++;
    });
    i = 0;
    // checkAboutContainerPosition(scrollY);
    // checkContactContainerPosition(scrollY);
    // checkGalleryContainerPosition(scrollY);
    // checkServicesContainerPosition(scrollY);
});

function checkContainerPosition(scrolledTo, container,i) {
    const pos = i%2 === 0 ? scrollY * (10 / 100) : -scrollY * (10 / 100);
    container.style.backgroundPosition = `${pos}px ${pos}px`;
    if ((container.offsetTop - 200) < scrolledTo) {
        container.children[0].classList.add('visible');
    } else {
        container.children[0].classList.remove('visible');
    }
}

// function checkAboutContainerPosition(scrolledTo){
//     aboutContainer.style.backgroundPosition = `0px ${scrollY * (10 / 100)}px`;
//     if ((aboutContainer.offsetTop - 200) < scrolledTo) {
//         aboutContainer.children[0].classList.add('visible');
//     }else {
//         aboutContainer.children[0].classList.remove('visible');
//     }
// }

// function checkContactContainerPosition(scrolledTo){
//     contactContainer.style.backgroundPosition = `0px -${scrollY * (10 / 100)}px`;
//     if ((contactContainer.offsetTop - 200) < scrolledTo) {
//         contactContainer.children[0].classList.add('visible');
//     }else {
//         contactContainer.children[0].classList.remove('visible');
//     }
// }
// function checkGalleryContainerPosition(scrolledTo){
//     galleryContainer.style.backgroundPosition = `0px ${scrollY * (10 / 100)}px`;
//     if ((galleryContainer.offsetTop - 200) < scrolledTo) {
//         galleryContainer.children[0].classList.add('visible');
//     }else {
//         galleryContainer.children[0].classList.remove('visible');
//     }
// }
// function checkServicesContainerPosition(scrolledTo){
//     servicesContainer.style.backgroundPosition = `0px -${scrollY * (10 / 100)}px`;
//     if ((servicesContainer.offsetTop - 200) < scrolledTo) {
//         servicesContainer.children[0].classList.add('visible');
//     }else {
//         servicesContainer.children[0].classList.remove('visible');
//     }
// }