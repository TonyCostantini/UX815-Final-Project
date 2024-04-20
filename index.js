// Define your playlist
const playlist = [
    'solitude-dark-ambient-electronic_lucafrancini.mp3',
    'better-day_penguinmusic.mp3',
    'drive-breakbeat_rockot.mp3'
];
let currentIndex = 0;
const player = new Howl({
    src: [playlist[currentIndex]],
    html5: true, // Use HTML5 audio
    onend: function() {
        next(); // Automatically play next song when the current one ends
    }
});
// Function to play the current song
function play() {
    player.play();
}
// Function to pause the current song
function pause() {
    player.pause();
}
// Function to play the next song
function next() {
    currentIndex = (currentIndex + 1) % playlist.length;
    player.stop();
    player.load({ src: playlist[currentIndex] });
    player.play();
}
// Function to play the previous song
function previous() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    player.stop();
    player.load({ src: playlist[currentIndex] });
    player.play();
}
// Event listeners for the buttons
document.getElementById('play').addEventListener('click', play);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('next').addEventListener('click', next);
document.getElementById('previous').addEventListener('click', previous);
// Integrate music player progress bar
player.on('play', function() {
    // Start updating the progress bar
    progressUpdateTimer = setInterval(updateProgressBar, 1000); // Update every second (1000ms)
});
player.on('pause', function() {
    // Stop updating the progress bar when the song is paused
    clearInterval(progressUpdateTimer);
});
function updateProgressBar() {
    var progress = (player.seek() / player.duration()) * 100;
    progressBar.value = progress;
}
// Integrate music player volume slider
volumeSlider.addEventListener('input', function(e) {
    player.volume(volumeSlider.value);
});
// Update the CSS selectors for the progress bar to match the IDs used in the HTML
const progressBar = document.getElementById('progressBar');