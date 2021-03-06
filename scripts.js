const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
	card.addEventListener('click', () => {
		modalOverlay.classList.add('active');

		const videoID = card.getAttribute('id');
		modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}/`
	});
}

document.querySelector('.close-modal').addEventListener('click', () => {
	modalOverlay.classList.remove('active');
	modalOverlay.querySelector('iframe').src = '';
});
