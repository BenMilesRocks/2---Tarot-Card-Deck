const fullDeck = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
    "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
    "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59",
    "60", "61", "62", "63", "64", "65", "66", "67", "68", "69",
    "70", "71", "72", "73", "74", "75", "76", "77"];

let deck = {
    shuffledDeck: [],
    drawnCards: [],
}

// deckShuffle ---- Function for shuffling deck
// ----seperate function for firstShuffle, pulling fullDeck into shuffledDeck
// ----shuffles existing shuffledDeck array, so as not to include drawnCards



// drawCard ---- Function for drawing cards
// ----adds cards to drawnCards
// ----removes cards from shuffledDeck
// ----sends cardDrawn variable to displayCard function
// ----pushes length of shuffledDeck array to "max" value on number input

function drawCard(){
    deck.drawnCards.push(deck.shuffledDeck.shift());
};

// drawSpecificCard ---- Function for drawing specific card
// ----adds event listener to #draw-card-specific, passing card number back to function
// ----pushes specific array number to drawCard function

function drawSpecificCard(number){
    deck.drawnCards.push(deck.shuffledDeck.splice(number, 1));
};

// displayCard ---- Function for displaying cards to play area
// ----displays card based on cardDrawn
// ----reads draw-options radio buttons to see if card should be normal, inverted or random
// ========inverted cards adds css class .inverted-card to element, to display upside down

// resetDeck ---- Funtion for resetting the play area, reshuffling all cards
// ----resets drawnCards to empty array
// ----resets shuffledDeck to fullDeck array
// ----shuffles deck

function resetDeck(){
    deck.shuffledDeck = [...fullDeck];
    deck.drawnCards = [];
}

module.exports = {fullDeck, deck, drawCard, resetDeck, drawSpecificCard};