import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/loading.css';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.form');
  const searchBar = document.getElementById('search-bar');
  const submitBtn = document.querySelector('.submit-btn');
  const gallery = document.getElementById('gallery');
  const loading = document.querySelector('.loading');

  searchForm.addEventListener('submit', e => {
    e.preventDefault();

    const searchQuery = searchBar.value.trim();

    if (!searchQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return;
    }

    loading.style.display = 'block';

    const apiKey = '42199698-86ec1f577e997e517f326ea6b';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        loading.style.display = 'none';
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          gallery.innerHTML = '';
        } else {
          gallery.innerHTML = '';
          data.hits.forEach(image => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
    <a href="${image.largeImageURL}" data-lightbox="gallery">
      <img src="${image.webformatURL}" alt="${image.tags}"/>
    </a>
    <div class="card-info">
      <h3 class="img-desc">${image.tags}</h3>
      <div class="img-info">
      <p class="img-stat">Likes:<br>${image.likes}</p>
      <p class="img-stat">Views:<br>${image.views}</p>
      <p class="img-stat">Comments:<br>${image.comments}</p>
      <p class="img-stat">Downloads:<br>${image.downloads}</p>
      </div>
              </div>
   `;
            gallery.appendChild(card);
          });

          const lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
            captionPosition: 'bottom',
            history: false,
            animationSpeed: 250,
            close: true,
          });
          lightbox.refresh();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
