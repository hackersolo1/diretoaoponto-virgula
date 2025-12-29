// Toggle de módulos
function toggleModule(header) {
    const moduleSection = header.parentElement;
    moduleSection.classList.toggle('expanded');
}

// Funções para expandir/colapsar módulos
function expandAllModules() {
    document.querySelectorAll('.module-section').forEach(section => {
        section.classList.add('expanded');
    });
}

function collapseAllModules() {
    document.querySelectorAll('.module-section').forEach(section => {
        section.classList.remove('expanded');
    });
}

// Scroll suave para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Foco na busca
function focusSearch() {
    document.getElementById('searchInput').focus();
}

// Animação de entrada dos cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, observerOptions);

document.querySelectorAll('.video-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Busca em tempo real (melhorada)
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm) {
        // Expandir todos os módulos durante a busca
        expandAllModules();
    } else {
        // Colapsar todos e expandir apenas o primeiro quando busca estiver vazia
        collapseAllModules();
        document.querySelector('.module-section').classList.add('expanded');
    }
    document.querySelectorAll('.video-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = searchTerm ? 'none' : 'block';
        }
    });
});
