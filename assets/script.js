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

let specificCardIndex = document.querySelector("#specific-card-index");

// --------------------------------------------------Event Listeners

// Invert Deck Radio Button

let invertSelect = "random";

function displayRadioValue() {
    var ele = document.getElementsByName("options");

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            invertSelect = ele[i].value;
    }
}

// Reset Deck on Load

document.addEventListener("DOMContentLoaded", () => {
    resetDeck();
});

// ----deck shuffle button

shuffleBtn = document.querySelector("#deck-shuffle-btn");
shuffleBtn.addEventListener("click", function(){
    deckShuffle(deck.shuffledDeck);
});


// ----draw specific card button

drawCardSpecific = document.querySelector("#draw-card-specific");
drawCardSpecific.addEventListener("click", function(){
    drawSpecificCard(document.getElementById("specific-card-index").value);
});


// ----draw card button

drawCardBtn = document.querySelector("#draw-card-btn");
drawCardBtn.addEventListener("click", function(){
    displayRadioValue();
    drawCard();
});

// ----reset button

resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function(){
    resetDeck();
});


// --------------------------------------------------Functions

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

// invertTest ---- Function to check if card is inverted, pushing boolean value to displayCard function

function invertTest(rule){
    let output;
    if (rule === "inverted"){
        output = true;
    } else if (rule === "normal"){
        output = false;
    } else {
        let random = Math.floor(Math.random() * 50);
        if (random >= 30){
            output = true;
        } else {
            output = false;
        }
    }
    displayCard(output)
};


// drawCard ---- Function for drawing cards

function drawCard(){
    deck.drawnCards.push(deck.shuffledDeck.shift());
    invertTest(invertSelect);
    specificCardIndex.setAttribute("max", `${deck.shuffledDeck.length}`);
    specificCardIndex.value = 1;
};

// drawSpecificCard ---- Function for drawing specific card

function drawSpecificCard(number){
    deck.drawnCards.push((deck.shuffledDeck.splice((number - 1), 1))[0]);    
    invertTest(invertSelect);
    specificCardIndex.setAttribute("max", `${deck.shuffledDeck.length}`);
    specificCardIndex.value = 1;
};

// displayCard ---- Function for displaying cards to play area

function displayCard(inverted){
    let cardSlotId = `card-slot-${deck.drawnCards.length}`
    let cardId = `card-${deck.drawnCards.length}`;
    let cardToShow = deck.drawnCards[deck.drawnCards.length -1];
    let source = `/assets/images/${cardToShow}`;
    let slot = document.getElementById(cardSlotId);
    let card = new Image();
    card.src = source;
    card.classList.add("card");
    card.setAttribute("id", cardId)
    if (inverted === true){
        card.classList.add("inverted");
    } else {
        card.classList.remove("inverted");
    }
    slot.appendChild(card);
    gsap.from(`#${cardId}`, {rotationY: "90deg", duration: 0.5});
};

// resetDeck ---- Funtion for resetting the play area, reshuffling all cards

function resetDeck(){
    deck.shuffledDeck = [...fullDeck];
    deck.drawnCards = [];
    deckShuffle(deck.shuffledDeck);
    document.querySelector("#card-1").remove();
    document.querySelector("#card-2").remove();
    document.querySelector("#card-3").remove();
};

module.exports = {fullDeck, deck, drawCard, resetDeck, drawSpecificCard, deckShuffle, displayCard};