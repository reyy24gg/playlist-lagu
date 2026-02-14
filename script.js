const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const playlistElement = document.getElementById('playlist');

// Data 10 Lagu
const songs = [
    { name: 'Lagu Ke-1', file: 'https://soundcloud.com/i-putu-sastra-yudiana/sedia-aku-sebelum-hujan-mp3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { name: 'Lagu Ke-2', file: 'lagu2' },
    { name: 'Lagu Ke-3', file: 'lagu3' },
    { name: 'Lagu Ke-4', file: 'lagu4' },
    { name: 'Lagu Ke-5', file: 'lagu5' },
    { name: 'Lagu Ke-6', file: 'lagu6' },
    { name: 'Lagu Ke-7', file: 'lagu7' },
    { name: 'Lagu Ke-8', file: 'lagu8' },
    { name: 'Lagu Ke-9', file: 'lagu9' },
    { name: 'Lagu Ke-10', file: 'lagu10' }
];

let songIndex = 0;

// Load Lagu Pertama Kali
loadSong(songs[songIndex]);

// Fungsi Load Lagu
function loadSong(song) {
    title.innerText = song.name;
    audio.src = `${song.file}.mp3`;
    updatePlaylistUI();
}

function playSong() {
    audio.play();
    playBtn.innerText = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = 'Play';
}

// Play / Pause Toggle
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

// Ganti Lagu
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

// Generate Playlist Otomatis
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerText = song.name;
    li.addEventListener('click', () => {
        songIndex = index;
        loadSong(songs[songIndex]);
        playSong();
    });
    playlistElement.appendChild(li);
});

// Tandai lagu yang sedang diputar di Playlist
function updatePlaylistUI() {
    const listItems = document.querySelectorAll('#playlist li');
    listItems.forEach((item, index) => {
        if (index === songIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}