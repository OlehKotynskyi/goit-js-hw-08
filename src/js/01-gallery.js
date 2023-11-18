// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryblock = document.querySelector('.gallery');
const itemsGallery = galleryItemsMarkup(galleryItems);
galleryblock.insertAdjacentHTML('beforeend', itemsGallery);



function galleryItemsMarkup(items) {
   return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
               <a class="gallery__link" href="${original}">
                  <img
                     class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"
                  />
               </a>
            </li>`;
   })
      .join('');
}
const simplelightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

