import { Playlist } from "./playlist.js";

const previous = document.getElementById('previous');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const next = document.getElementById('next');



const albumImg = document.getElementById('album-img');
const songArtist = document.getElementById('song-artist');
const songTitle = document.getElementById('song-title');




play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

let currentTrackIndex = 0;

function loadTrack(index) {
  const song = Playlist[index];
  audio.src = song.song;
    albumImg.src = song.img;
    songArtist.textContent = song.artist;
    songTitle.textContent = song.title;
    audio.play();
}

loadTrack(currentTrackIndex);

next.addEventListener('click', () => {
    if (currentTrackIndex < Playlist.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0; 
    }
    loadTrack(currentTrackIndex);
});


previous.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
    } else {
        currentTrackIndex = Playlist.length - 1; 
    }
    loadTrack(currentTrackIndex);
});
