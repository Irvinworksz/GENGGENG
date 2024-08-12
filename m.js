document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const hiddenImage = document.getElementById('hiddenImage');
    const audio = document.getElementById('audio');

    revealButton.addEventListener('click', function() {
        hiddenImage.classList.remove('hidden');
        audio.play();
    });
});
