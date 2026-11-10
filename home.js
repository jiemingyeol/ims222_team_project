document.addEventListener('DOMContentLoaded', function () {
  var carouselEl = document.querySelector('.spotlight .carousel');
  var items = Array.prototype.slice.call(carouselEl.querySelectorAll('.carousel-item'));

  var label = document.getElementById('vinyl-label');
  var album = document.getElementById('spotlight-album');
  var artist = document.getElementById('spotlight-artist');
  var year = document.getElementById('spotlight-year');
  var genre = document.getElementById('spotlight-genre');
  var current = document.getElementById('spotlight-current');
  var total = document.getElementById('spotlight-total');

  function preloadCover(i) {
    new Image().src = items[(i + items.length) % items.length].dataset.cover;
  }

  function show(item) {
    var data = item.dataset;
    var i = items.indexOf(item);
    label.src = data.cover;
    label.alt = data.album + ' cover';
    album.textContent = data.album;
    artist.textContent = data.artist;
    year.textContent = data.year;
    genre.textContent = data.genre;
    current.textContent = i + 1;
    preloadCover(i + 1);
    preloadCover(i - 1);
  }

  var carousel = M.Carousel.init(carouselEl, {
    fullWidth: true,
    indicators: false,
    onCycleTo: show
  });

  document.querySelector('.spotlight-prev').addEventListener('click', function () {
    carousel.prev();
  });
  document.querySelector('.spotlight-next').addEventListener('click', function () {
    carousel.next();
  });

  total.textContent = items.length;
  show(items[0]);
});
