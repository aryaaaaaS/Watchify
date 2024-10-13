// Optional JavaScript hover or scaling effects
const brandCards = document.querySelectorAll('.brand-card');
brandCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "rotate(-5deg) scale(1.1)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotate(0deg) scale(1)";
    });
});

