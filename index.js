// Initialize a new MP3
const chopin = new Howl({
    src: ['chopin.mp3']
  });
  
  // Setup the audio controls
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const stopButton = document.getElementById('stop');
  
  // Attached listeners to the buttons and map to appropriate Howl methods
  playButton.addEventListener('click', () => {
    chopin.play();
  })
  
  pauseButton.addEventListener('click', () => {
    chopin.pause();
  })
  
  stopButton.addEventListener('click', () => {
    chopin.stop();
  })
  
  // Integate music player progress bar
  var sound = new Howl({
    src: ['audio.mp3']
  });
  
  var progressBar = document.getElementById('progressBar');
  sound.on('play', function() {
    requestAnimationFrame(updateProgressBar);
});
function updateProgressBar() {
  var progress = (sound.seek() / sound.duration()) * 100;
  progressBar.value = progress;
  if (!sound.paused() && sound.playing()) {
    requestAnimationFrame(updateProgressBar);
  }
}

  // Integate music player volume slider
  var sound = new Howl({
    src: ['audio.mp3']
  });

  var volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', function(e) {
    sound.volume(volumeSlider.value);
});