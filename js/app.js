//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const keyboard = document.querySelector('#qwerty');
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

    letters.forEach(letter => {
        if(button === letter.textContent.toLowerCase()) {
            letter.classList.add('show');
            match = true;
        }
    });


//Pass the button to the checkLetter function, 
//and store the letter returned inside of a variable called letterFound. 
//At this point, you can open the index.html file, 
//click any of the letters on the keyboard, and start to see the letters appear in the phrase.

//Event listener
keyboard.addEventHandler('click', event =>{
    if(event.target.tagName === 'BUTTON'){
        event.target.className = 'chosen';
        event.target.disabled === true;

        const letterFound = checkLetter(event.target.textContent.toLowerCase());
        const misses = document.querySelector('misses');
    }
});
