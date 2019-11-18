//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const keyboard = document.querySelector('#qwerty');
let missed = 0;
const overlay = document.getElementById('overlay');



//Event Listener for Start Button
overlay.addEventListener('click', (e) => {
    if(event.target.tagName === 'A') {
        overlay.style.display = 'none'
    }
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
    for(i = 0; i < arr.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = arr[i];
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
    let matched = null;
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {
        if(button === letter.textContent.toLowerCase()) {
            letter.classList.add('show');
            matched = true;
        }
    });
        return matched;
};

//Event listener
keyboard.addEventListener('click', event =>{
    if (event.target.tagName === "BUTTON"){
        event.target.className = 'chosen';
        event.target.disabled === true;

        const letterFound = checkLetter(event.target.textContent.toLowerCase());
        if(!letterFound){
            missed++;

            const img = document.querySelectorAll("img");
            img[missed - 1].src="images/lostHeart.png";
        }
    }
    checkWin();
});

//Create a checkWin function.
const checkWin = () => {
    const lettersCount = document.querySelectorAll('.letter').length;
    let showCount = document.querySelectorAll('.show').length;

    if (lettersCount === showCount) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        const overlayTitleElement = document.getElementById('title');
        overlayTitleElement.innerHTML = 'You Won!';
        let resetBtn = document.createElement('a');
        resetBtn.className = "btn_reset";
        overlay.appendChild(resetBtn);
        resetBtn.textContent = "Play Again";

        resetBtn.addEventListener('click', () =>{
            window.location.reload(true);
        });
    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        const overlayTitleElement = document.getElementById('title');
        overlayTitleElement.innerHTML = 'You Lose!';
        let resetBtn = document.createElement('a');
        resetBtn.className = "btn_reset";
        overlay.appendChild(resetBtn);
        resetBtn.textContent = "Play Again";

        resetBtn.addEventListener('click', () =>{
            window.location.reload(true);
        });
    }

};
