

// quiz_modal.js

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const quizCards = document.querySelectorAll('.quiz_card');

// Open modal when quiz card is clicked
quizCards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const quizName = card.querySelector('.quiz_name p').innerText;

        modalContent.innerHTML = `
            <span class="close-button">&times;</span>
            <img src="${imgSrc}" alt="Quiz Image" class="modal-image">
            <p class="modal-title">${quizName}</p>
        `;

        modal.style.display = 'block';

        // Add event listener for the new close button
        const closeButton = document.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
