// VARIABLES
const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

// EVENT LISTENERS
openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block'
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none'
});

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
});