const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementById('btn_reset');
let missed = 0;
const startButton = document.querySelector('a.btn_reset');

//Event Listener
startButton.addEventListener('click', () => {
    if(event.target.className === 'btn_reset') {
        startButton.style.display = 'none';
    } else {
        resetGame();
    }
});

//Phrase Arrays
const phrases = [
    'Purple',
    'Pink',
    'Yellow',
    'Blue',
    'Orange'
];
