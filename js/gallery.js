let modalImageContainer = document.getElementById('modal-image-container');
let titleContainer = document.getElementById('galleryModalLabel');
window.addEventListener('click', function (e) {
    let rightImageSection = e.target.classList.contains('img-container');
    let imageSrc = e?.target?.getAttribute('src');
    if (rightImageSection && imageSrc != null) {
        let lastIndexOfDot = imageSrc.lastIndexOf('.');
        let firstIndexOfDot = imageSrc.indexOf('.');
        let imagePath = imageSrc.slice(firstIndexOfDot + 1, lastIndexOfDot);
        let lastIndexOfImagePath = imagePath.lastIndexOf('/');
        let imageName = imagePath.slice(lastIndexOfImagePath + 1, imagePath.length);

        // titleContainer.innerHTML = e?.target?.getAttribute('alt');
        titleContainer.innerHTML = imageName;
        modalImageContainer.setAttribute('src', imageSrc);
        var myModal = new bootstrap.Modal(document.getElementById('galleryModal'), {});
        myModal.show();
    }
})