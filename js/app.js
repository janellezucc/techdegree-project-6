//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');

//Event Listener for Start Button
overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
});

//Phrase Arrays
const phrases = [
    'Mumford and Sons',
    'The Black Keys',
    'The Lumineers',
    'Alabama Shakes',
    'The Strokes'
];

//Get a random Phrase function
function getRandomPhraseAsArray(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)]; 
    return random.split('');
};

//Call random phrase
const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for (i = 0; i < arr.length; i++) {
        let listItem = document.createElement("li");
        phrase.appendChild(listItem);

        if(listItem.textContent !== ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
    }
};

addPhraseToDisplay(phraseArray);


//checkLetter function
const checkLetter = button => {
    let match = null;
    const letters = document.querySelectorAll('.letter');

     for (let i = 0; i < letters.length; i += 1) {
         if (button === letter.textContent.toLowerCase()) {
            letter.classList.add('show');
         } 
     }
     return match;
 };