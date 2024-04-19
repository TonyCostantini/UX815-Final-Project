// Initialize a new Howl instance for the audio
const sound = new Howl({
    src: ['chopin.mp3']
});
// Setup the audio controls
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
// Attached listeners to the buttons and map to appropriate Howl methods
playButton.addEventListener('click', () => {
    sound.play();
});
pauseButton.addEventListener('click', () => {
    sound.pause();
});
stopButton.addEventListener('click', () => {
    sound.stop();
});
// Update the CSS selectors for the progress bar and volume slider to match the IDs used in the HTML
const progressBar = document.getElementById('progressBar');
const volumeSlider = document.getElementById('volumeSlider');
// Integrate music player progress bar
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
// Integrate music player volume slider
volumeSlider.addEventListener('input', function(e) {
    sound.volume(volumeSlider.value);
});