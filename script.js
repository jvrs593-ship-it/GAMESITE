// Dados dos jogos (Atualizados com URL)
const games = [{
        id: 1,
        title: "CYBERPUNK 2077",
        price: "$19.99",
        image: "foto/bg-cyber.jpg",
        bg: "foto/bg-cyber.jpg",
        badges: ["RPG", "OPEN WORLD"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",   
        url: "../cyber/cyber.html"
    },
    {
        id: 2,
        title: "THE LAST OF US PART II",
        price: "$19.99",
        image: "https://i.redd.it/kdj0n13ajwka1.png",
        bg: "https://i.redd.it/kdj0n13ajwka1.png",
        badges: ["ACTION", "SURVIVAL"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../the last/thelast.html"
    },
    {
        id: 3,
        title: "DYING LIGHT: THE BEAST",
        price: "$19.99",
        image: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/06/dying-light-the-beast.jpg?w=1600&h=900&fit=crop",
        bg: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/06/dying-light-the-beast.jpg?w=1600&h=900&fit=crop",
        badges: ["ZOMBIE", "PARKOUR"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../dying/dying.html"
    },
    {
        id: 4,
        title: "CLAIR OBSCUR: EXPEDITION 33",
        price: "$19.99",
        image: "foto/33.webp",
        bg: "foto/33.webp",
        badges: ["RPG", "TURN-BASED"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../Expedition 33/expedition.html"
    },
    {
        id: 5,
        title: "SHADOW OF THE COLOSSUS",
        price: "$19.99",
        image: "foto/shadow.jpg",
        bg: "foto/shadow.jpg",
        badges: ["ADVENTURE", "CLASSIC"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../shadow of the colossus/shadow.html"
    },
    {
        id: 6,
        title: "Forza Horizon 4",
        price: "$19.99",
        image: "../Forza Horizon 4/fotos/FORZACAPA.jpg",
        bg: "foto/FZ4.png",
        badges: ["Race", "Open-World"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../Forza Horizon 4/forza.html"
    },
    {
        id: 7,
        title: "GTA V",
        price: "$19.99",
        image: "foto/GTALOGO.png",
        bg: "foto/gta-5.jpg",
        badges: ["ACTION", "OPEN WORLD"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../GTAV/GTAV.html"
    },
    {
        id: 8,
        title: "PALWORLD",
        price: "$19.99",
        image: "../Palworld/fotos/palworld-1.jpg",
        bg: "../Palworld/fotos/trailer-pw.jpg",
        badges: ["Open-World", "SURVIVAL"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../Palworld/Palworld.html"
    },
    {
        id: 9,
        title: "Battlefield 6",
        price: "$19.99",
        image: "../BF6/fotos/BF6LOGO.webp",
        bg: "foto/BF6BG.jpg",
        badges: ["Shooter", "ACTION"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../BF6/BF6.html"
    },
    {
        id: 10,
        title: "Red Dead Redemption 2",
        price: "$19.99",
        image: "../Reddead2/fotos/RD2LOGO.jpg",
        bg: "foto/Rd2bg.jpg",
        badges: ["Open-World", "ACTION"],
        date: "04.27.2000",
        desc: "Link is dragged into the world of Termina, where the moon is falling from the sky. He has only three days to save the world in this darker, time-twisting entry in the legendary series.",
        url: "../Reddead2/RD2.html"
    }
];

let currentIndex = 0;
let autoSlideInterval;

const track = document.getElementById('track');
const bgBackdrop = document.getElementById('bg-backdrop');
const infoPanel = document.getElementById('info-panel');

// Elementos de Texto
const elTitle = document.getElementById('game-title');
const elPrice = document.getElementById('game-price');
const elDesc = document.getElementById('game-desc');
const elDate = document.getElementById('release-date');
const elBadge1 = document.getElementById('badge-1');

// Inicialização
function init() {
    renderCarousel();
    updateUI();
    startAutoSlide();

    // Listeners de Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navigate(1);
            resetAutoSlide();
        } else if (e.key === 'ArrowLeft') {
            navigate(-1);
            resetAutoSlide();
        }
        // NOVA FUNÇÃO: Tecla ENTER abre o link
        else if (e.key === 'Enter') {
            openGameLink();
        }
    });

    // Interatividade da Pesquisa
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert('SEARCHING FOR: ' + searchInput.value.toUpperCase());
                resetAutoSlide();
            }
        });
        searchInput.addEventListener('focus', () => clearInterval(autoSlideInterval));
        searchInput.addEventListener('blur', startAutoSlide);
    }
}

// Função para abrir o link do jogo atual
function openGameLink() {
    const game = games[currentIndex];
    if (game.url) {
        console.log("Navegando para:", game.url); // Para debug
        // Redireciona para a página
        window.location.href = game.url;
    } else {
        alert("Link não disponível para " + game.title);
    }
}

function renderCarousel() {
    track.innerHTML = '';
    games.forEach((game, index) => {
        const div = document.createElement('div');
        div.classList.add('game-card');
        div.style.backgroundImage = `url('${game.image}')`;
        div.title = "Clique para selecionar, clique novamente para entrar";

        // Lógica de Clique:
        // 1º Clique: Seleciona (se estiver longe)
        // 2º Clique: Entra na página (se já estiver selecionado)
        div.addEventListener('click', () => {
            if (currentIndex === index) {
                // Se já é o atual, abre o link
                openGameLink();
            } else {
                // Se não é o atual, seleciona ele
                currentIndex = index;
                updateUI();
                resetAutoSlide();
            }
        });

        track.appendChild(div);
    });
}

function navigate(direction) {
    let newIndex = currentIndex + direction;

    if (newIndex >= games.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = games.length - 1;
    }

    currentIndex = newIndex;
    updateUI();
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        navigate(1);
    }, 7000); // 7 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function updateUI() {
    const cards = document.querySelectorAll('.game-card');
    const game = games[currentIndex];

    // Atualizar classes
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    const cardWidth = 200;
    const gap = 15;

    // Centralizar o item ativo
    const translateX = -(currentIndex * (cardWidth + gap));
    track.style.transform = `translateX(${translateX}px)`;

    // Atualizar Informações
    infoPanel.classList.remove('visible');

    setTimeout(() => {
        elTitle.textContent = game.title;
        elPrice.textContent = game.price;
        elDesc.textContent = game.desc;
        elDate.textContent = game.date;
        elBadge1.textContent = game.badges[0];

        bgBackdrop.style.backgroundImage = `url('${game.bg}')`;

        infoPanel.classList.add('visible');
    }, 150);
}

document.addEventListener('DOMContentLoaded', init);