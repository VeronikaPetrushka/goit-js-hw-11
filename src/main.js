import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.form');
  const searchBar = document.getElementById('search-bar');
  const submitBtn = document.querySelector('.submit-btn');
  const gallery = document.getElementById('gallery');

  searchForm.addEventListener('submit', e => {
    e.preventDefault();

    const searchQuery = searchBar.value.trim();

    if (!searchQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
        position: 'topRight',
      });
      return;
    }

    const apiKey = '42199698-86ec1f577e997e517f326ea6b';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          gallery.innerHTML = '';
        } else {
          gallery.innerHTML = '';
          data.results.forEach(image => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
    <img src="${image.webformatURL}" alt="${image.tags}" onclick="showModal('${image.largeImageURL}')" />
    <div class="card-info">
      <h3>${image.tags}</h3>
      <p>Likes: ${image.likes}</p>
      <p>Views: ${image.views}</p>
      <p>Comments: ${image.comments}</p>
      <p>Downloads: ${image.downloads}</p>
    </div>
  `;
            gallery.appendChild(card);
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});

function showModal(imageUrl) {
  Swal.fire({
    title: 'Image',
    imageUrl: imageUrl,
    imageAlt: 'Large image',
  });
}
