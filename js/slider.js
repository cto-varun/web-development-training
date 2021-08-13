let allImages = document.getElementsByTagName("img");
let tt;
let i = 0;
allImages[0].classList.add('show');

function initiateSlider() {
    tt = setInterval(() => {
        if (i < allImages.length) {
            allImages[i].classList.add('show');
            allImages[i].classList.remove('hide');
            resetAllImages(i);
            i++;
        } else {
            i = 0;
        }
    }, 5000);
}

function resetAllImages(currentImage) {
    for (let j = 0; j < allImages.length; j++) {
        if (j != currentImage) {
            allImages[j].classList.remove('show');
            allImages[i].classList.add('hide');
        }
    }
}