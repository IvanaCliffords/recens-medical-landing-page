// Video Player Functionality


const videoWrapper = document.querySelector('.video-section');
const videoPlayer = videoWrapper.querySelector('.video-player');
const videoControls = videoWrapper.querySelector('.video-controls');
const playButton = videoWrapper.querySelector('.play-button');

playButton.addEventListener('click', () => {
    if (videoPlayer.paused) {

        videoPlayer.play()
        videoControls.classList.add('playing')
        playButton.classList.toggle('paused')
    } else {
        videoPlayer.pause()
        playButton.classList.toggle('paused')
        videoControls.classList.remove('playing')
    }
})



// TEXTAREA PLACEHOLDERS


const textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function(elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});




