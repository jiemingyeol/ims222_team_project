document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('recommender');
  var albums = Array.prototype.slice.call(document.querySelectorAll('.carousel-item'));

  var eraSelect = document.getElementById('quiz-era');
  var moodSelect = document.getElementById('quiz-mood');
  var settingSelect = document.getElementById('quiz-setting');
  var message = document.getElementById('quiz-message');

  var outAlbum = document.getElementById('quiz-out-album');
  var outArtist = document.getElementById('quiz-out-artist');
  var outMeta = document.getElementById('quiz-out-meta');
  var outWhy = document.getElementById('quiz-out-why');
  var outTip = document.getElementById('quiz-out-tip');
  var outMore = document.getElementById('quiz-out-more');
  var outputs = [outAlbum, outArtist, outMeta, outWhy, outTip, outMore];

  var eras = ['classic', 'middle', 'recent'];

  var eraNames = {
    classic: 'the classics (1973–1998)',
    middle: '2002–2012',
    recent: '2014 to today'
  };

  var moodNames = {
    energy: 'pump-up energy',
    heart: 'music that wears its heart on its sleeve',
    dreamy: 'a dreamy, drifting sound',
    anthem: 'big sing-along anthems'
  };

  var tips = {
    commute: 'For your morning commute: press play on {album} before you leave and let it run all the way through.',
    study: 'For your study session: keep {album} at a low volume and let it play in the background.',
    roadtrip: 'For your road trip: put {album} on at the first green light and sing along.',
    night: 'For your late night: turn the lights down, put on headphones, and play {album} from the first track to the last.'
  };

  function clearResults() {
    for (var i = 0; i < outputs.length; i++) {
      outputs[i].value = '';
    }
    message.textContent = '';
  }

  function recommend() {
    var era = eraSelect.value;
    var mood = moodSelect.value;
    var setting = settingSelect.value;

    clearResults();

    if (era === '' || mood === '' || setting === '') {
      message.textContent = 'Please answer all three questions first.';
      return;
    }

    var rolledTheDice = false;
    if (era === 'surprise') {
      era = eras[Math.floor(Math.random() * eras.length)];
      rolledTheDice = true;
    }

    var match = null;
    var others = [];
    for (var i = 0; i < albums.length; i++) {
      var info = albums[i].dataset;
      if (info.mood !== mood) {
        continue;
      }
      if (info.era === era) {
        match = info;
      } else {
        others.push(info.album + ' by ' + info.artist + ' (' + info.year + ')');
      }
    }

    if (match === null) {
      message.textContent = 'Sorry, no album matched. Please try again.';
      return;
    }

    var why;
    if (rolledTheDice) {
      why = 'We rolled the dice and landed on ' + eraNames[era] + '. ';
    } else {
      why = 'You picked ' + eraNames[era] + '. ';
    }
    why += 'You are in the mood for ' + moodNames[mood] + ', so ' + match.album + ' by ' + match.artist + ' is our pick for you.';

    outAlbum.value = match.album;
    outArtist.value = match.artist;
    outMeta.value = match.year + ' · ' + match.genre;
    outWhy.value = why;
    outTip.value = tips[setting].replace('{album}', match.album);
    outMore.value = others.join('\n');

    message.textContent = rolledTheDice ? 'Surprise! We picked the era for you.' : 'Here is your album!';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    recommend();
  });

  document.getElementById('quiz-reset').addEventListener('click', function () {
    form.reset();
    clearResults();
  });
});
