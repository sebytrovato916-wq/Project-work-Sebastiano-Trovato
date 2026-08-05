/*Script usato per equalizzare l'altezza delle card nella sezione "Punti di Forza"*/
function equalizzaAltezzaCard() {
    const cards = document.querySelectorAll('#forza .card');
    if (!cards.length) return;

    cards.forEach(card => card.style.minHeight = '');

    const maxHeight = Math.max(...Array.from(cards, card => card.offsetHeight));

    cards.forEach(card => card.style.minHeight = maxHeight + 'px');
}

window.addEventListener('load', equalizzaAltezzaCard);
window.addEventListener('resize', equalizzaAltezzaCard);

/*Chiude il menu a tendina mobile quando si clicca una voce del menu*/
document.querySelectorAll('#navbarSupportedContent .nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        const menu = document.getElementById('navbarSupportedContent');

        if (menu.classList.contains('show') && target) {
            event.preventDefault();
            menu.addEventListener('hidden.bs.collapse', () => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, { once: true });
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
