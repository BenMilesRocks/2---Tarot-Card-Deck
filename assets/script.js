gsap.registerPlugin(Flip);

// --------------------------------------------------Constants & objects

// fullDeck - complete array of all cards in the deck, in order. References file names of relevant images 

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

// fullDeckAlt - array describing of all cards in the deck, in order. Index matches fullDeck for ease of reference

const fullDeckAlt = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", 
    "The Lovers", "The Chariot", "Strength", "The Hermit", 
    "The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", 
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World", "Ace of Wands", "Two of Wands", "Three of Wands", 
    "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands",
    "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", 
    "King of Wands", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles",
    "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", 
    "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "Kingof Pentacles",
    "Ace of cups", "Two of cups", "Three of cups", "Four of cups", "Five of cups", 
    "Six of cups", "Seven of cups", "Eight of cups", "Nine of cups", "Ten of cups",
    "Page of cups", "Knight of cups", "Queen of cups", "King of cups", "Ace of Swords", 
    "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords",
    "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", 
    "Knight of Swords", "Queen of Swords", "King of Swords"];

// deck object - an object containing the state of the cards in play. This allows for the object's attributes to be manipulated in place

let deck = {
    shuffledDeck: [],
    alt: [],
    drawnCards: [],
    drawnAlt: [],
};


// --------------------------------------------------Event Listeners

// On page load, runs resetDeckFirst function to ensure deck object is ready for play

document.addEventListener("DOMContentLoaded", () => {
    resetDeckFirst();
});

// ==Buttons

// ----tour button

tourBtn = document.querySelector("#tour");
tourBtn.addEventListener("click", function(){
    introJs().start();
});

// ----reset button

resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function(){
    resetDeck();
});

// ----deck shuffle button

shuffleBtn = document.querySelector("#deck-shuffle-btn");
shuffleBtn.addEventListener("click", function(){
    deckShuffle(deck.shuffledDeck, deck.alt);
    cardShuffleAnimation();
});

let specificCardIndex = document.querySelector("#specific-card-index");

// ----Invert Deck Radio Buttons

let invertSelect = "random";

function displayRadioValue() {
    var ele = document.getElementsByName("options");

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            invertSelect = ele[i].value;
    }
}

// ----draw card button

drawCardBtn = document.querySelector("#draw-card-btn");
drawCardBtn.addEventListener("click", function(){
    displayRadioValue();
    drawCard();
});

// ----draw specific card button

drawCardSpecific = document.querySelector("#draw-card-specific");
drawCardSpecific.addEventListener("click", function(){
    displayRadioValue();
    drawSpecificCard(document.getElementById("specific-card-index").value);
});


// --------------------------------------------------Functions

// resetDeckFirst ---- Funtion for setting up the deck on loading. Prevents resetDeck from deleting images as they are being loaded, allowing for animations to play

function resetDeckFirst(){
    // reset deck variables
deck.shuffledDeck = [...fullDeck];
deck.drawnCards = [];
deck.alt = [...fullDeckAlt];
deck.drawnAlt = [];
    // shuffle deck
deckShuffle(deck.shuffledDeck, deck.alt);
}

// deckShuffle ---- Function for shuffling deck
// ---- Shuffles the array passed to it, allowing it to be used multiple times without resetting the deck

function deckShuffle(cards, alt){
    let currentIndex = cards.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
        [alt[currentIndex], alt[randomIndex]] = [alt[randomIndex], alt[currentIndex]];
  }
};

// drawCard ---- Function for drawing the top card of the deck

function drawCard(){
    deck.drawnCards.push(deck.shuffledDeck.shift());
    deck.drawnAlt.push(deck.alt.shift());
    invertTest(invertSelect);
    specificCardIndex.setAttribute("max", `${deck.shuffledDeck.length}`);
    specificCardIndex.value = 1;
};

// drawSpecificCard ---- Function for drawing a specific card from the deck

function drawSpecificCard(number){
    deck.drawnCards.push((deck.shuffledDeck.splice((number - 1), 1))[0]); 
    deck.drawnAlt.push((deck.alt.splice((number - 1), 1))[0]);       
    invertTest(invertSelect);
    specificCardIndex.setAttribute("max", `${deck.shuffledDeck.length}`);
    specificCardIndex.value = 1;
};

// invertTest ---- Function to check if card is inverted, pushing boolean value to displayCard function

function invertTest(rule){
    let output;
    if (rule === "inverted"){
        output = true;
    } else if (rule === "normal"){
        output = false;
    } else {
        // randomises card status
        let random = Math.floor(Math.random() * 50);
        if (random >= 30){
            output = true;
        } else {
            output = false;
        }
    }
    displayCard(output)
};

// displayCard ---- Function for displaying cards to play area

function displayCard(inverted){
        // takes values from DOM to create new img element
    let cardSlotId = `card-slot-${deck.drawnCards.length}`
    let cardId = `card-${deck.drawnCards.length}`;
    let cardToShow = deck.drawnCards[deck.drawnCards.length -1];
    let source = `assets/images/${cardToShow}`;
    let slot = document.getElementById(cardSlotId);
    let cardBackId = `card-${deck.drawnCards.length}-back`;
    let description = deck.drawnAlt[deck.drawnAlt.length -1];
        // creates new img for front of card
    let card = new Image();
    card.src = source;
    card.classList.add("card");
    card.setAttribute("id", cardId);
    card.setAttribute("alt", description);
        // tests if card should be inverted
    if (inverted === true){
        card.classList.add("inverted");
        card.setAttribute("alt", `${description}, inverted.`);
    }

        // creates img for back of card
    let cardBack = new Image();
    cardBack.src = "assets/images/card-back.jpg";
    cardBack.classList.add("card", "card-back");
    cardBack.setAttribute("id", cardBackId);

        // adds img elements to DOM
    slot.appendChild(cardBack);
    slot.appendChild(card);

        // animates card flip
    flipSound();    
    gsap.to(`#${cardBackId}`, {rotationY: "180deg", duration: 0.5, delay: 0.25});
    gsap.from(`#${cardId}`, {rotationY: "90deg", duration: 0.5, delay: 0.4});
    if (card.classList.contains("inverted")){
        setTimeout(turnSound, 1000);
        gsap.to(`#${cardId}`, {rotation: "180deg", duration: 0.5, delay: 1});
    }

        // adds event listener to new element
    document.getElementById(cardId).addEventListener("click", function(){
        console.log(this);
        toggleZoom(this);
    })
    
};

// resetDeck ---- Funtion for resetting the play area, reshuffling all cards

let resetInProgress = false;

function resetDeck(){
        // reset deck variables
    if (resetInProgress == true) {
        return
    } else {
        resetInProgress = true;

        
        deck.shuffledDeck = [...fullDeck];
        deck.drawnCards = [];
        deck.alt = [...fullDeckAlt];
        deck.drawnAlt = [];
            // shuffle deck
        deckShuffle(deck.shuffledDeck, deck.alt);
            // animate cards resetting
        let images = document.getElementsByTagName('img'); 
        let l = images.length;
        for (let i = 0; i < l; i++) { 
            // marks cards for deletion
            images[i].classList.add("to-be-deleted");
            // animation
            gsap.to(images[0].nodeName, {y: "40vh", opacity: "0", duration: 0.5, ease: "power2.out"});
        }
            // delete images
        setTimeout(deleteImages, 500);
            // animate deck shuffling
        setTimeout(cardShuffleAnimation, 550); 

        setTimeout(function() {resetInProgress = false}, 3351);
    }
       
    
};

// deleteImages ---- removes all marked elements from the DOM, resetting the play area

function deleteImages(){
    let images = document.getElementsByClassName("to-be-deleted"); 
    let l = images.length;
    for (let i = 0; i < l; i++) { 
        images[0].parentNode.removeChild(images[0]);
    }
}

// ------------------------------Audio Functions
// Allows audio to be called multiple times, ensuring audio is always played even if an animation is in progress

function pickUpSound(){
    const pickUp = new Audio("assets/audio/pick-up-card.mp3")
    pickUp.play();
}

function turnSound(){
    const slideSound = new Audio("assets/audio/card-slide.mp3");
    slideSound.play();
} 

function flipSound(){
    const flipSound = new Audio("assets/audio/card-flip.mp3")
    flipSound.play();
}

function playShuffledCardSound(){
    const shuffleAudio = new Audio("assets/audio/cards-shuffle.mp3");
    shuffleAudio.play();
}

// ------------------------------Animation Functions

// toggleZoom ---- Enlarges a card that has been clicked on, making it fill the screen

function toggleZoom(image){
    if (image.classList.contains("inverted")){
        gsap.to(image, {rotation: "0deg", duration:0})
    }
    let state = Flip.getState(image);
    image.classList.toggle("zoomed");
    pickUpSound();
    // Flip.from(state, {duration: 0.75, spin: 1, zIndex: 4, ease: "power2.Out"});
    if (image.classList.contains("inverted")){
        Flip.from(state, {duration: 0.75, spin: 1.5, zIndex: 4, ease: "power2.Out"});
        gsap.to(image, {rotation: "180deg", duration:0, delay: 0.75});
    } else {
        Flip.from(state, {duration: 0.75, spin: 1, zIndex: 4, ease: "power2.Out"});
    }
     
}

// cardShuffleAnimation ---- animates the deck being shuffled for the player, making it clear that the deck has been shuffled

let shuffleAnimationRunning = false;

function cardShuffleAnimation(){
    if (shuffleAnimationRunning == true){
        return
    } else {shuffleAnimationRunning = true
        for (let i = 0; i < 3; i++){        
            let card = new Image();
            card.src = "assets/images/card-back.jpg";
            card.classList.add("card");
            card.setAttribute("id", `shuffling-card-${i}`);
            card.setAttribute("alt", "Cards being shuffled");
            document.getElementById("card-slot-2").appendChild(card);
        }
        pickUpSound();
        gsap.from("#shuffling-card-0", {y: "40vh", opacity: "0", duration: 0.5, ease: "power3.out", zIndex: 4});
        gsap.from("#shuffling-card-1", {y: "40vh", opacity: "0", duration: 0.5, ease: "power3.out", zIndex: 4});
        gsap.from("#shuffling-card-2", {y: "40vh", opacity: "0", duration: 0.5, ease: "power3.out", zIndex: 4});
        setTimeout(playShuffledCardSound, 500);    
        gsap.to("#shuffling-card-1", {x: "30vw", duration: 0.25, delay: 0.5, zIndex: 4});
        gsap.to("#shuffling-card-2", {x: "-30vw", duration:0.25, delay: 0.5, zIndex: 4});
        gsap.to("#shuffling-card-2", {x: "30vw", duration: 0.25, delay: 0.75, zIndex: 4});
        gsap.to("#shuffling-card-1", {x: "-30vw", duration:0.25, delay: 0.75, zIndex: 4});
        gsap.to("#shuffling-card-1", {x: "30vw", duration: 0.25, delay: 1, zIndex: 4});
        gsap.to("#shuffling-card-2", {x: "-30vw", duration:0.25, delay: 1, zIndex: 4});
        gsap.to("#shuffling-card-1", {x: "0vw", duration: 0.25, delay: 1.25, zIndex: 4});
        gsap.to("#shuffling-card-2", {x: "0vw", duration:0.25, delay: 1.25, zIndex: 4});
        setTimeout(turnSound, 1900);
        gsap.to("#shuffling-card-0", {y: "40vh", opacity: "0", duration: 0.9, ease: "power1.out", delay: 1.9, zIndex: 4});
        gsap.to("#shuffling-card-1", {y: "40vh", opacity: "0", duration: 0.9, ease: "power2.out", delay: 1.9, zIndex: 4});
        gsap.to("#shuffling-card-2", {y: "40vh", opacity: "0", duration: 0.9, ease: "power3.out", delay: 1.9, zIndex: 4});
        setTimeout(endShuffleAnimation, 2800);
        setTimeout(function() {shuffleAnimationRunning = false}, 2801);
    }
}

// endShuffleAnimation - removes img elements, preventing them from slowing down the page

function endShuffleAnimation(){
    document.getElementById("shuffling-card-0").remove();
    document.getElementById("shuffling-card-1").remove();
    document.getElementById("shuffling-card-2").remove();
}


var module = module || {};
module.exports = {fullDeck, deck, drawCard, resetDeck, drawSpecificCard, deckShuffle, displayCard};