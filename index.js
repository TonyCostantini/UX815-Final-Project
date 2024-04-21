let currentIndex = 0;
let player;

// Define your playlist
const playlist = [
    'Solitude.mp3',
    'Better Day.mp3',
    'Drive Breakbeat.mp3'
];

// Function to initialize the player with the current song
function initializePlayer() {
    player = new Howl({
        src: ['music/' + playlist[currentIndex]], // Update the path to music files
        html5: true,
        onend: function() {
            next(); 
        }
    });
}

// Function to play the current song
function play() {
    if (!player) {
        initializePlayer();
    }
    if (!player.playing()) {
        player.play();
    }
}

// Function to pause the current song
function pause() {
    if (player) {
        player.pause();
    }
}

// Function to stop the current song
function stop() {
    if (player) {
        player.stop();
    }
}

// Function to play the next song
function next() {
    currentIndex = (currentIndex + 1) % playlist.length;
    stop();
    initializePlayer();
    play();
}

// Function to play the previous song
function previous() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    stop();
    initializePlayer();
    play();
}

// Event listeners for the buttons
document.getElementById('play').addEventListener('click', play);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('next').addEventListener('click', next);
document.getElementById('previous').addEventListener('click', previous);

// Integrate music player progress bar
let progressUpdateTimer;
const progressBar = document.getElementById('progressBar');

// Function to update the progress bar
function updateProgressBar() {
    if (player && player.playing()) {
        var progress = (player.seek() / player.duration()) * 100;
        progressBar.value = progress;
    }
}

// Integrate music player volume slider
const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', function(e) {
    if (player) {
        player.volume(volumeSlider.value);
    }
});

// Update the progress bar when the seek position changes
function updateProgressBar() {
    if (player && player.playing()) {
        var progress = (player.seek() / player.duration()) * 100;
        progressBar.value = progress;
    }
}

// Update the progress bar continuously
setInterval(updateProgressBar, 1000);

// Function to update the progress timer text
function updateProgressTimer() {
    if (player && player.playing()) {
        document.getElementById('ProgressTimer').innerText = currentTime + ' / ' + totalTime;
    }
}
function updateProgressBar() {
    var progress = (player.seek() / player.duration()) * 100;
    progressBar.value = progress;

    // Function to format time in MM:SS format
function formatTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = Math.floor(timeInSeconds % 60);
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

// Function to pad single digits with leading zero
function pad(num) {
    return (num < 10) ? '0' + num : num;
}

// Update the progress timer text continuously
setInterval(updateProgressTimer, 1000);

// Update progress timer text
var currentTime = formatTime(player.seek());
var duration = formatTime(player.duration());
progressTimer.textContent = currentTime + " / " + duration;
}

// Access metadata
const audioElement = document.getElementById('audioPlayer');
const metadata = audioElement && audioElement.querySelector('mediaSession.metadata');
const songName = metadata && metadata.title;
const artistName = metadata && metadata.artist;
const albumCoverUrl = metadata && metadata.artwork[0].src;

// Update UI with song details
document.getElementById('songName').innerText = songName || 'Unknown Song';
document.getElementById('artistName').innerText = artistName || 'Unknown Artist';
document.getElementById('albumCover').src = albumCoverUrl || 'default_cover.jpg';

// New approach for dynamically loading song details
// Song titles
const songs = ['Solitude.mp3', 'Better Day.mp3', 'Drive Breakbeat.mp3'];
// Initially load song details
loadSong(songs[2]); // Load the initial song (change index as needed)