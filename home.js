(function () {
  var artists = [
    { code: 'mj', artist: 'Michael Jackson', album: 'Thriller', year: 1982, genre: 'Pop / R&B' },
    { code: 'cp', artist: 'Coldplay', album: 'A Rush of Blood to the Head', year: 2002, genre: 'Alternative Rock' },
    { code: 'ch', artist: 'Calvin Harris', album: 'Motion', year: 2014, genre: 'Dance / EDM' },
    { code: 'bj', artist: 'Billy Joel', album: 'Glass Houses', year: 1980, genre: 'Rock' },
    { code: 'jc', artist: 'J. Cole', album: 'Friday Night Lights', year: 2010, genre: 'Hip-Hop (Mixtape)' },
    { code: 'ti', artist: 'Tame Impala', album: 'Currents', year: 2015, genre: 'Psychedelic Pop' },
    { code: 'lh', artist: 'Lauryn Hill', album: 'The Miseducation of Lauryn Hill', year: 1998, genre: 'Neo-Soul / Hip-Hop' },
    { code: 'pf', artist: 'Pink Floyd', album: 'The Dark Side of the Moon', year: 1973, genre: 'Progressive Rock' },
    { code: 'aw', artist: 'Amy Winehouse', album: 'Back to Black', year: 2006, genre: 'Soul / R&B' },
    { code: 'bs', artist: 'The Black Skirts', album: 'THIRSTY', year: 2019, genre: 'Indie Rock (Korea)' },
    { code: 'fo', artist: 'Frank Ocean', album: 'channel ORANGE', year: 2012, genre: 'R&B / Psychedelic Soul' },
    { code: 'ss', artist: 'SYSTEM SEOUL', album: 'SS-POP 3', year: 2026, genre: 'Hyperpop / Digicore' }
  ];

  var photo = document.getElementById('spotlight-photo');
  var label = document.getElementById('vinyl-label');
  var album = document.getElementById('spotlight-album');
  var artist = document.getElementById('spotlight-artist');
  var meta = document.getElementById('spotlight-meta');
  var current = document.getElementById('spotlight-current');
  var total = document.getElementById('spotlight-total');
  var index = 0;

  function wrap(i) {
    return (i + artists.length) % artists.length;
  }

  function file(kind, i) {
    var n = wrap(i) + 1;
    return 'images/home/' + kind + '-' + (n < 10 ? '0' : '') + n + '-' + artists[wrap(i)].code + '.jpg';
  }

  function preload(i) {
    new Image().src = file('artist', i);
    new Image().src = file('album', i);
  }

  function show(i) {
    index = wrap(i);
    var a = artists[index];
    photo.src = file('artist', index);
    photo.alt = a.artist;
    label.src = file('album', index);
    label.alt = a.album + ' cover';
    album.textContent = a.album;
    artist.textContent = a.artist;
    meta.textContent = a.year + ' · ' + a.genre;
    current.textContent = index + 1;
    preload(index + 1);
    preload(index - 1);
  }

  document.querySelector('.spotlight-prev').addEventListener('click', function () {
    show(index - 1);
  });
  document.querySelector('.spotlight-next').addEventListener('click', function () {
    show(index + 1);
  });

  total.textContent = artists.length;
  show(0);
})();
