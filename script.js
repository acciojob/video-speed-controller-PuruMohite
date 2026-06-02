const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');

toggle.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
});

volume.addEventListener('input', () => {
    video.volume = volume.value;
});

playbackSpeed.addEventListener('input', () => {
    video.playbackRate = playbackSpeed.value;
});

document.querySelector('.rewind').addEventListener('click', () => {
    video.currentTime -= 10;
});

document.querySelector('.forward').addEventListener('click', () => {
    video.currentTime += 25;
});

video.addEventListener('timeupdate', () => {
    const percent =
        (video.currentTime / video.duration) * 100;

    progressFilled.style.width = `${percent}%`;
});