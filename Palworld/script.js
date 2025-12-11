/* =========================================
   CONTROLE DO MODAL DE VÍDEO
   ========================================= */
function openModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('myVideo');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');

    if (modal) {
        modal.style.display = 'flex';
    }

    if (video) {
        // Pausa a música de fundo se estiver tocando ao abrir o vídeo
        if (bgMusic && !bgMusic.paused) {
            bgMusic.pause();
            if(musicBtn) {
                musicBtn.classList.remove('playing');
                const icon = musicBtn.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                }
            }
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

// Fechar modal ao clicar fora dele
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

    if (musicBtn && bgMusic) {
        const musicIcon = musicBtn.querySelector('i');
        bgMusic.volume = 0.3; // Volume em 30%

        // Tenta iniciar a música (alguns navegadores bloqueiam autoplay sem interação)
        // bgMusic.play().catch(e => console.log("Autoplay bloqueado pelo navegador"));

        musicBtn.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicBtn.classList.add('playing');
                    if(musicIcon) {
                        musicIcon.classList.remove('fa-play');
                        musicIcon.classList.add('fa-pause');
                    }
                }).catch(err => console.log("Erro áudio:", err));
            } else {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
                if(musicIcon) {
                    musicIcon.classList.remove('fa-pause');
                    musicIcon.classList.add('fa-play');
                }
            }
        });
    }
});