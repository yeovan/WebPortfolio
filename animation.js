

// ANIMATION FOR FADE IN AND FADE OUT
const fadeElements = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    } else {
    entry.target.classList.remove('visible');
    }
});
}, {
threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));