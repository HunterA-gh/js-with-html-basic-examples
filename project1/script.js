const grin = document.querySelector('.grin');

const sweaty = document.querySelector('.sweat');

grin.addEventListener('click', () => {
    if(sweaty.classList.contains('sweat')) {
        sweaty.classList.add('active');
        grin.classList.remove('active');
    }
});

sweaty.addEventListener('click', () => {
    if(grin.classList.contains('grin')) {
        grin.classList.add('active');
        sweaty.classList.remove('active');
    }
});