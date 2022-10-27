// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML('beforeend',createGallerySmallPictureCard(galleryItems));
galleryList.addEventListener("click",onClickGallery);


function onClickGallery(event) {
    event.preventDefault();

    if(!event.target.classList.contains('gallery__image')){
        return;
    }
};

function createGallerySmallPictureCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});