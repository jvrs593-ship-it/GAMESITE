/* =========================================
   CONTROLE DO MODAL DE VÍDEO
   ========================================= */
   bgMusic.play()
function openModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('myVideo');

    if (modal) {
        modal.style.display = 'flex';
    }

    if (video) {
        // Pausa a música de fundo se estiver tocando
        const bgMusic = document.getElementById('bgMusic');
        const musicBtn = document.getElementById('musicBtn');
        if (bgMusic && !bgMusic.paused) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
        }

        video.currentTime = 0;
        video.play();
    }
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('myVideo');

    if (video) { video.pause(); }
    if (modal) { modal.style.display = 'none'; }
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}

/* =========================================
   CONTROLE DE MÚSICA DE FUNDO
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = musicBtn.querySelector('i');

    if (musicBtn && bgMusic && musicIcon) {
        bgMusic.volume = 0.3; // Volume em 30%

        musicBtn.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicBtn.classList.add('playing');
                    musicIcon.classList.remove('fa-play');
                    musicIcon.classList.add('fa-pause');
                }).catch(err => console.log("Erro áudio:", err));
            } else {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
                musicIcon.classList.remove('fa-pause');
                musicIcon.classList.add('fa-play');
            }
        });
    }
});