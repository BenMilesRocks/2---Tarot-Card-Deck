const $ = require('jquery');

const fullDeck = ["00-fool.jpg", "01-magician.jpg", "02-highpriestess.jpg", "03-empress.jpg", "04-emperor.jpg", "05-hierophant.jpg", 
    "06-lovers.jpg", "07-chariot.jpg", "08-strength.jpg", "09-hermit.jpg", 
    "10-wheeloffortune.jpg", "11-justice.jpg", "12-hangedman.jpg", "13-death.jpg", "14-temperance.jpg", 
    "15-devil.jpg", "16-tower.jpg", "17-star.jpg", "18-moon.jpg", "19-sun.jpg",
    "20-judgement.jpg", "21-world.jpg", "22-wands-01.jpg", "23-wands-02.jpg", "24-wands-03.jpg", 
    "25-wands-04.jpg", "26-wands-05.jpg", "27-wands-06.jpg", "28-wands-07.jpg", "29-wands-08.jpg",
    "30-wands-09.jpg", "31-wands-10.jpg", "32-wands-11.jpg", "33-wands-12.jpg", "34-wands-13.jpg", 
    "35-wands-14.jpg", "36-pentacles-01.jpg", "37-pentacles-02.jpg", "38-pentacles-03.jpg", "39-pentacles-04.jpg",
    "40-pentacles-05.jpg", "41-pentacles-06.jpg", "42-pentacles-07.jpg", "43-pentacles-08.jpg", "44-pentacles-09.jpg", 
    "45-pentacles-10.jpg", "46-pentacles-11.jpg", "47-pentacles-12.jpg", "48-pentacles-13.jpg", "49-pentacles-14.jpg",
    "50-cups-01.jpg", "51-cups-02.jpg", "52-cups-03.jpg", "53-cups-04.jpg", "54-cups-05.jpg", 
    "55-cups-06.jpg", "56-cups-07.jpg", "57-cups-08.jpg", "58-cups-09.jpg", "59-cups-10.jpg",
    "60-cups-11.jpg", "61-cups-12.jpg", "62-cups-13.jpg", "63-cups-14.jpg", "64-swords-01.jpg", 
    "65-swords-02.jpg", "66-swords-03.jpg", "67-swords-04.jpg", "68-swords-05.jpg", "69-swords-06.jpg",
    "70-swords-07.jpg", "71-swords-08.jpg", "72-swords-09.jpg", "73-swords-10.jpg", "74-swords-11.jpg", 
    "75-swords-12.jpg", "76-swords-13.jpg", "77-swords-14.jpg"];

let deck = {
    shuffledDeck: [],
    drawnCards: [],
};


// --------------------------------------------------Event Listeners

// ----deck shuffle button

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("deck-shuffle-btn").addEventListener("click", () => shuffleDeck(deck.shuffledDeck));
});

// ----draw card button

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("draw-card-btn").addEventListener("click", () => drawCard());
});

// ----draw specific card button

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("draw-card-specific").addEventListener("click", () => drawSpecificCard(document.getElementById("specific-card-index").value));
});

// deckShuffle ---- Function for shuffling deck
// ---- Shuffles the array passed to it, allowing it to be used multiple times without resetting the deck

function deckShuffle(cards){
    let currentIndex = cards.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
  }
};



// drawCard ---- Function for drawing cards
// ----adds cards to drawnCards
// ----removes cards from shuffledDeck
// ----sends cardDrawn variable to displayCard function **TO BE ADDED**
// ----pushes length of shuffledDeck array to "max" value on number input **TO BE ADDED**

function drawCard(){
    deck.drawnCards.push(deck.shuffledDeck.shift());
    displayCard();
};

// drawSpecificCard ---- Function for drawing specific card
// ----adds event listener to #draw-card-specific, passing card number back to function **TO BE ADDED**
// ----pushes specific array number to drawnCards, spliced from shuffledDeck
// ----pushes length of shuffledDeck array to "max" value on number input **TO BE ADDED**

function drawSpecificCard(number){
    deck.drawnCards.push((deck.shuffledDeck.splice(number, 1))[0]);    
    displayCard();
};

// displayCard ---- Function for displaying cards to play area
// ----displays card based on cardDrawn
// ----reads draw-options radio buttons to see if card should be normal, inverted or random
// ========inverted cards adds css class .inverted-card to element, to display upside down

function displayCard(){
    let cardId = `card-${deck.drawnCards.length}`;
    let cardToShow = deck.drawnCards[deck.drawnCards.length -1];
    let source = `/assets/images/${cardToShow}`;
    document.getElementById(cardId).src = source;
};

// resetDeck ---- Funtion for resetting the play area, reshuffling all cards
// ----resets shuffledDeck to fullDeck array
// ----resets drawnCards to empty array
// ----shuffles deck

function resetDeck(){
    deck.shuffledDeck = [...fullDeck];
    deck.drawnCards = [];
    deckShuffle(deck.shuffledDeck);
};

module.exports = {fullDeck, deck, drawCard, resetDeck, drawSpecificCard, deckShuffle, displayCard};