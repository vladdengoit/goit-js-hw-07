import { galleryItems } from './gallery-items.js';
// Change code below this line

const getgallery = document.querySelector('.gallery');

const galleryMarkUp = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("");

getgallery.innerHTML = galleryMarkUp;


getgallery.addEventListener('click', increaseImage);

function increaseImage(e) {

    e.preventDefault();

  
    if (!e.target.classList.contains("gallery__image")) {
        return
    }
      
    const goTolibrary = basicLightbox.create(`
    <img src=${e.target.dataset.source}>
`)
    goTolibrary.show()
} 


