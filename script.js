const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('input[name="volume"]');
const playbackSpeed = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');


function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

toggle.addEventListener('click', togglePlay);

video.addEventListener('play', () => {
    toggle.textContent = '❚ ❚';
});

video.addEventListener('pause', () => {
    toggle.textContent = '►';
});

volume.addEventListener('input', () => {
    video.volume = volume.value;
});

playbackSpeed.addEventListener('input', () => {
    video.playbackRate = playbackSpeed.value;
});

skipButtons.forEach(button => {
    button.addEventListener('click', () => {
        video.currentTime += Number(button.dataset.skip);
    });
});

function updateProgress() {
    const percent =
        (video.currentTime / video.duration) * 100;

    progressFilled.style.width = `${percent}%`;
}

video.addEventListener('timeupdate', updateProgress);

progress.addEventListener('click', (e) => {
    const seekTime =
        (e.offsetX / progress.offsetWidth) *
        video.duration;

    video.currentTime = seekTime;
});