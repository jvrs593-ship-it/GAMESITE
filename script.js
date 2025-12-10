// DADOS DOS JOGOS
const games = [{
        id: 1,
        title: "CYBERPUNK 2077",
        price: "R$ 199,90",
        image: "../testev2/cyber/fotos/bg-cyber.jpg",
        bg: "../testev2/cyber/fotos/bg-cyber.jpg",
        badges: ["RPG", "OPEN WORLD"],
        date: "2020",
        desc: "Um RPG de ação em mundo aberto ambientado em Night City, uma megalópole obcecada por poder e modificações corporais.",
        url: "../testev2/cyber/cyber.html"
    },
    {
        id: 2,
        title: "THE LAST OF US PART II",
        price: "R$ 249,50",
        image: "https://i.redd.it/kdj0n13ajwka1.png",
        bg: "https://i.redd.it/kdj0n13ajwka1.png",
        badges: ["ACTION", "SURVIVAL"],
        date: "2020",
        desc: "Cinco anos após sua jornada, Ellie busca vingança em uma Seattle devastada, enfrentando novos perigos e dilemas morais.",
        url: "../testev2/the last/thelast.html"
    },
    {
        id: 3,
        title: "DYING LIGHT: THE BEAST",
        price: "R$ 199,90",
        image: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/06/dying-light-the-beast.jpg?w=1600&h=900&fit=crop",
        bg: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/06/dying-light-the-beast.jpg?w=1600&h=900&fit=crop",
        badges: ["ZOMBIE", "PARKOUR"],
        date: "2025",
        desc: "Retorne como Kyle Crane em uma nova aventura de sobrevivência zumbi, misturando parkour brutal e poderes bestiais.",
        url: "../testev2/dying/dying.html"
    },
    {
        id: 4,
        title: "CLAIR OBSCUR: EXPEDITION 33",
        price: "R$ 299,90",
        image: "../testev2/Expedition 33/foto/fundo.webp",
        bg: "../testev2/Expedition 33/foto/fundo.webp",
        badges: ["RPG", "TURN-BASED"],
        date: "2025",
        desc: "Lidere a Expedição 33 em uma jornada desesperada para destruir a Pintora e impedir que ela pinte a morte sobre o mundo.",
        url: "../testev2/Expedition 33/expedition.html"
    },
    {
        id: 5,
        title: "SHADOW OF THE COLOSSUS",
        price: "R$ 99,50",
        image: "../testev2/shadow of the colossus/foto/fundov2.jpg",
        bg: "../testev2/shadow of the colossus/foto/fundov2.jpg",
        badges: ["ADVENTURE", "CLASSIC"],
        date: "2018",
        desc: "Viaje por uma terra vasta e derrote 16 colossos gigantes para trazer uma garota de volta à vida neste clássico recriado.",
        url: "../testev2/shadow of the colossus/shadow.html"
    },
    {
        id: 6,
        title: "Forza Horizon 4",
        price: "R$ 249,00",
        image: "../testev2/Forza Horizon 4/fotos/01.jpg",
        bg: "..Forza Horizon 4/fotos/01.jpg",
        badges: ["Race", "Open-World"],
        date: "2018",
        desc: "Explore a Grã-Bretanha em um mundo aberto compartilhado, onde as estações mudam tudo em festivais de corrida dinâmicos.",
        url: "../testev2/Forza Horizon 4/forza.html"
    },
    {
        id: 7,
        title: "GTA V",
        price: "R$ 82,00",
        image: "../testev2/GTAV/fotos/01.jpg",
        bg: "../testev2/GTAV/fotos/01.jpg",
        badges: ["ACTION", "OPEN WORLD"],
        date: "2013",
        desc: "Três criminosos muito diferentes planejam grandes assaltos em Los Santos, uma metrópole ensolarada e implacável.",
        url: "../testev2/GTAV/GTAV.html"
    },
    {
        id: 8,
        title: "PALWORLD",
        price: "R$ 88,99",
        image: "../testev2/Palworld/fotos/palworld-1.jpg",
        bg: "../testev2/Palworld/fotos/trailer-pw.jpg",
        badges: ["Open-World", "SURVIVAL"],
        date: "2024",
        desc: "Colete criaturas misteriosas chamadas 'Pals' para lutar, construir, plantar e trabalhar em um mundo de sobrevivência multijogador.",
        url: "../testev2/Palworld/Palworld.html"
    },
    {
        id: 9,
        title: "Battlefield 6",
        price: "R$ 299,00",
        image: "../testev2/BF6/fotos/BF6LOGO.webp",
        bg: "../testev2/BF6/fotos/BF6LOGO.webp",
        badges: ["Shooter", "ACTION"],
        date: "2025",
        desc: "Guerra total em escala massiva com destruição dinâmica, combates intensos e veículos em mapas gigantescos.",
        url: "../testev2/BF6/BF6.html"
    },
    {
        id: 10,
        title: "Red Dead Redemption 2",
        price: "R$ 299,90",
        image: "../testev2/Reddead2/fotos/01.jpg",
        bg: "../testev2/Reddead2/fotos/01.jpg",
        badges: ["Open-World", "ACTION"],
        date: "2018",
        desc: "A saga épica de Arthur Morgan e a gangue Van der Linde fugindo da lei no fim da era do Velho Oeste americano.",
        url: "../testev2/Reddead2/RD2.html"
    }
];

let currentIndex = 0;
let autoSlideInterval;

// DOM Elements
const track = document.getElementById('track');
const bgBackdrop = document.getElementById('bg-backdrop');
const infoPanel = document.getElementById('info-panel');
const featureContainer = document.getElementById('feature-container');
const featureImg = document.getElementById('feature-img');

const elTitle = document.getElementById('game-title');
const elPrice = document.getElementById('game-price');
const elDesc = document.getElementById('game-desc');
const elDate = document.getElementById('release-date');
const elBadge1 = document.getElementById('badge-1');

// Init
function init() {
    renderCarousel();
    updateUI();
    startAutoSlide(); // 5 Segundos

    // TECLADO
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navigate(1);
            resetAutoSlide();
        } else if (e.key === 'ArrowLeft') {
            navigate(-1);
            resetAutoSlide();
        } else if (e.key === 'Enter') {
            openGameLink();
        }
    });
}

function openGameLink() {
    const game = games[currentIndex];
    if (game.url) window.location.href = game.url;
    else alert("Link indisponível");
}

function renderCarousel() {
    track.innerHTML = '';
    games.forEach((game, index) => {
        const div = document.createElement('div');
        div.classList.add('game-card');
        div.style.backgroundImage = `url('${game.image}')`;
        div.addEventListener('click', () => {
            currentIndex = index;
            updateUI();
            resetAutoSlide();
        });
        track.appendChild(div);
    });
}

function navigate(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex >= games.length) newIndex = 0;
    else if (newIndex < 0) newIndex = games.length - 1;
    currentIndex = newIndex;
    updateUI();
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        navigate(1);
    }, 5000); // 5 SEGUNDOS
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function updateUI() {
    const cards = document.querySelectorAll('.game-card');
    const game = games[currentIndex];

    // Atualiza cards
    cards.forEach((card, index) => {
        if (index === currentIndex) card.classList.add('active');
        else card.classList.remove('active');
    });

    // Move carrossel
    const cardWidth = 220;
    const containerWidth = document.querySelector('.carousel-wrapper').offsetWidth;
    const centerPos = (containerWidth / 2) - (cardWidth / 2);
    const targetPos = -(currentIndex * cardWidth) + centerPos;
    track.style.transform = `translateX(${targetPos}px)`;

    // Efeito transição
    infoPanel.classList.remove('visible');
    featureContainer.classList.remove('visible');

    setTimeout(() => {
        elTitle.textContent = game.title;
        elPrice.textContent = game.price || "Consulte";
        elDesc.textContent = game.desc || "Sem descrição.";
        elDate.textContent = game.date || "----";
        elBadge1.textContent = (game.badges && game.badges[0]) ? game.badges[0] : "GAME";

        bgBackdrop.style.backgroundImage = `url('${game.bg}')`;
        featureImg.src = game.bg;

        infoPanel.classList.add('visible');
        featureContainer.classList.add('visible');
    }, 200);
}

// --- FUNÇÕES DOS MODAIS ---

// Modal Sobre
function toggleModal() {
    const modal = document.getElementById('modal-sobre');
    if (modal.style.display === 'flex') modal.style.display = 'none';
    else modal.style.display = 'flex';
}

// Modal Perfil
function toggleProfile() {
    const modal = document.getElementById('modal-perfil');
    if (modal.style.display === 'flex') modal.style.display = 'none';
    else modal.style.display = 'flex';
}

// Alternar Abas (Login/Registro)
function switchAuth(type) {
    const loginForm = document.getElementById('form-login');
    const registerForm = document.getElementById('form-register');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    if (type === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        tabLogin.classList.remove('active');
        tabRegister.classList.add('active');
    }
}

// Fechar ao clicar fora (Serve para ambos)
function closeModalOutside(event) {
    const modalSobre = document.getElementById('modal-sobre');
    const modalPerfil = document.getElementById('modal-perfil');

    if (event.target === modalSobre) modalSobre.style.display = 'none';
    if (event.target === modalPerfil) modalPerfil.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', init);