gsap.registerPlugin(Flip);

// --------------------------------------------------Constants & objects

// Array of all cards in the deck

const fullDeck = ["00-fool.jpg", "01-magician.jpg",
    "02-highpriestess.jpg", "03-empress.jpg", "04-emperor.jpg",
    "05-hierophant.jpg", "06-lovers.jpg", "07-chariot.jpg",
    "08-strength.jpg", "09-hermit.jpg", "10-wheeloffortune.jpg",
    "11-justice.jpg", "12-hangedman.jpg", "13-death.jpg",
    "14-temperance.jpg", "15-devil.jpg", "16-tower.jpg",
    "17-star.jpg", "18-moon.jpg", "19-sun.jpg",
    "20-judgement.jpg", "21-world.jpg", "22-wands-01.jpg",
    "23-wands-02.jpg", "24-wands-03.jpg", "25-wands-04.jpg",
    "26-wands-05.jpg", "27-wands-06.jpg", "28-wands-07.jpg",
    "29-wands-08.jpg", "30-wands-09.jpg", "31-wands-10.jpg",
    "32-wands-11.jpg", "33-wands-12.jpg", "34-wands-13.jpg",
    "35-wands-14.jpg", "36-pentacles-01.jpg", "37-pentacles-02.jpg",
    "38-pentacles-03.jpg", "39-pentacles-04.jpg", "40-pentacles-05.jpg",
    "41-pentacles-06.jpg", "42-pentacles-07.jpg", "43-pentacles-08.jpg",
    "44-pentacles-09.jpg", "45-pentacles-10.jpg", "46-pentacles-11.jpg",
    "47-pentacles-12.jpg", "48-pentacles-13.jpg", "49-pentacles-14.jpg",
    "50-cups-01.jpg", "51-cups-02.jpg", "52-cups-03.jpg",
    "53-cups-04.jpg", "54-cups-05.jpg", "55-cups-06.jpg",
    "56-cups-07.jpg", "57-cups-08.jpg", "58-cups-09.jpg",
    "59-cups-10.jpg", "60-cups-11.jpg", "61-cups-12.jpg",
    "62-cups-13.jpg", "63-cups-14.jpg", "64-swords-01.jpg",
    "65-swords-02.jpg", "66-swords-03.jpg", "67-swords-04.jpg",
    "68-swords-05.jpg", "69-swords-06.jpg", "70-swords-07.jpg",
    "71-swords-08.jpg", "72-swords-09.jpg", "73-swords-10.jpg",
    "74-swords-11.jpg", "75-swords-12.jpg", "76-swords-13.jpg",
    "77-swords-14.jpg"];

// Array describing of all cards in the deck

const fullDeckAlt = ["The Fool", "The Magician",
    "The High Priestess", "The Empress", "The Emperor",
    "The Hierophant", "The Lovers", "The Chariot",
    "Strength", "The Hermit", "The Wheel of Fortune",
    "Justice", "The Hanged Man", "Death", "Temperance",
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World", "Ace of Wands", "Two of Wands",
    "Three of Wands", "Four of Wands", "Five of Wands",
    "Six of Wands", "Seven of Wands", "Eight of Wands",
    "Nine of Wands", "Ten of Wands", "Page of Wands",
    "Knight of Wands", "Queen of Wands", "King of Wands",
    "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles",
    "Four of Pentacles", "Five of Pentacles", "Six of Pentacles",
    "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles",
    "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles",
    "Queen of Pentacles", "Kingof Pentacles", "Ace of cups",
    "Two of cups", "Three of cups", "Four of cups",
    "Five of cups", "Six of cups", "Seven of cups",
    "Eight of cups", "Nine of cups", "Ten of cups",
    "Page of cups", "Knight of cups", "Queen of cups",
    "King of cups", "Ace of Swords", "Two of Swords",
    "Three of Swords", "Four of Swords", "Five of Swords",
    "Six of Swords", "Seven of Swords", "Eight of Swords",
    "Nine of Swords", "Ten of Swords", "Page of Swords",
    "Knight of Swords", "Queen of Swords", "King of Swords"];

// deck object

let deck = {
    alt: [],
    drawnAlt: [],
    drawnCards: [],
    shuffledDeck: []
};


// --------------------------------------------------Event Listeners

// On page load, runs resetDeckFirst

document.addEventListener("DOMContentLoaded", () => {
    resetDeckFirst();
    introJs().setOptions({
        steps: [{
          intro: "Welcome to the interactive Tarot Card Deck! Click 'Take the Tour' in the menu above to learn how the app works.",
          title: "Welcome"
        }]}).start();
});

// ==Buttons

// ----tour button

let tourBtn = document.querySelector("#tour");
tourBtn.addEventListener("click", function(){
    testScreenSize();
});

// ----reset button

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function(){
    resetDeck();
});

// ----deck shuffle button

let shuffleBtn = document.querySelector("#deck-shuffle-btn");
shuffleBtn.addEventListener("click", function(){
    deckShuffle(deck.shuffledDeck, deck.alt);
    cardShuffleAnimation();
});

let specificCardIndex = document.querySelector("#specific-card-index");

// ----Invert Deck Radio Buttons

let invertSelect = "random";

function displayRadioValue() {
    let ele = document.getElementsByName("options");

    for (i = 0; i < ele.length; i+=1) {
        if (ele[i].checked)
        {invertSelect = ele[i].value;}
    }
}

// ----draw card button

let drawCardBtn = document.querySelector("#draw-card-btn");
drawCardBtn.addEventListener("click", function(){
    displayRadioValue();
    drawCard();
});

// ----draw specific card button

let drawCardSpecific = document.querySelector("#draw-card-specific");
drawCardSpecific.addEventListener("click", function(){
    displayRadioValue();
    drawSpecificCard(document.getElementById("specific-card-index").value);
});


// --------------------------------------------------Functions

// Setup the deck on loading

function resetDeckFirst(){
    // reset deck variables
deck.shuffledDeck = [...fullDeck];
deck.drawnCards = [];
deck.alt = [...fullDeckAlt];
deck.drawnAlt = [];
    // shuffle deck
deckShuffle(deck.shuffledDeck, deck.alt);
}

// checks screen size then runs appropriate IntroJS script

function testScreenSize(){
    if (window.matchMedia("(max-width: 992px)").matches){
        runMobileTour();
    } else {
        runTour();
    }
}

// Full tour for large screens

function runTour(){
    introJs().addSteps([{
        element: document.querySelectorAll("#card-display-area")[0],
        intro: "When cards are drawn they are displayed in this area here.",
        title: "Card Display Area"
    }]).addSteps([{
        element: document.querySelectorAll("#card-slot-2")[0],
        intro: "Each card can be clicked to enlarge it for a better view. Click it again to shrink it back to normal size.",
        title: "Card Slot"
    }]).addSteps([{
        element: document.querySelectorAll(".draw-options")[0],
        intro: "These choose if the card is drawn normally or reversed. This will only change when you select a different option from this menu.",
        title: "Draw Controls"
    }]).addSteps([{
        element: document.querySelectorAll("#normal-button")[0],
        intro: "This will draw cards the correct way up.",
        title: "Normal"
    }]).addSteps([{
        element: document.querySelectorAll("#reversed-button")[0],
        intro: "This will draw cards reversed.",
        title: "Reversed"
    }]).addSteps([{
        element: document.querySelectorAll("#random-button")[0],
        intro: "This will randomly select if cards are reversed"
        + " or not. This is the default option.",
        title: "Draw Controls"
    }]).addSteps([{
        element: document.querySelectorAll(".draw-card")[0],
        intro: "This draws the top card from the deck.",
        title: "Draw Card"
    }]).addSteps([{
        element: document.querySelectorAll(".draw-specific")[0],
        intro: "This draws a specific card from the deck (like the 42nd card, for example). If you select '1' it will draw the top card from the deck.",
        title: "Draw Specific Card"
    }]).addSteps([{
        element: document.querySelectorAll("#reset")[0],
        intro: "This clears away all the cards on display and shuffles the deck, ready for a new reading.",
        title: "Reset Button"
    }]).addSteps([{
        element: document.querySelectorAll("#deck-shuffle-btn")[0],
        intro: "This will shuffle the deck *without* removing the cards on display. This way you can shuffle your deck in the middle of a reading if you wish.",
        title: "Shuffle Button"
    }]).start();
}



// Limited tour for Mobile devices

function runMobileTour(){
    introJs().addSteps([{
        element: document.querySelectorAll("#card-display-area")[0],
        intro: "When cards are drawn they are displayed in this area here.",
        title: "Card Display Area"
    }]).addSteps([{
        element: document.querySelectorAll("#card-slot-2")[0],
        intro: "Each card can be clicked to enlarge it for a better view. Click it again to shrink it back to normal size.",
        title: "Card Slot"
    }]).addSteps([{
        element: document.querySelectorAll(".draw-options")[0],
        intro: "These choose if the card is drawn normally or reversed. This will only change when you select a different option from this menu.",
        title: "Draw Controls"
    }]).addSteps([{
        element: document.querySelectorAll("#normal-button")[0],
        intro: "This will draw cards the correct way up.",
        title: "Normal"
    }]).addSteps([{
        element: document.querySelectorAll("#reversed-button")[0],
        intro: "This will draw cards reversed.",
        title: "Reversed"
    }]).addSteps([{
        element: document.querySelectorAll("#random-button")[0],
        intro: "This will randomly select if cards are reversed or not. This is the default option.",
        title: "Draw Controls"
    }]).addSteps([{
        element: document.querySelectorAll("#card-number")[0],
        intro: "This draws a specific card from the deck (like the 42nd card, for example). If you select '1' it will draw the top card from the deck.",
        title: "Card Number"
    }]).addSteps([{
        element: document.querySelectorAll("#draw-card-specific")[0],
        intro: "Click this to draw the card.",
        title: "Draw Card"
    }]).addSteps([{
        element: document.querySelectorAll("#reset")[0],
        intro: "This clears away all the cards on display and shuffles the deck, ready for a new reading.",
        title: "Reset Button"
    }]).addSteps([{
        element: document.querySelectorAll("#deck-shuffle-btn")[0],
        intro: "This will shuffle the deck *without* removing the cards on display. This way you can shuffle your deck in the middle of a reading if you wish.",
        title: "Shuffle Button"
    }]).start();
}



// Function for shuffling deck

function deckShuffle(cards, alt){
    let currentIndex = cards.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] =
            [cards[randomIndex], cards[currentIndex]];
        [alt[currentIndex], alt[randomIndex]] =
            [alt[randomIndex], alt[currentIndex]];
  }
}

// drawCard ---- Function for drawing the top card of the deck

function drawCard(){
    deck.drawnCards.push(deck.shuffledDeck.shift());
    deck.drawnAlt.push(deck.alt.shift());
    invertTest(invertSelect);
    specificCardIndex.setAttribute("max", `${deck.shuffledDeck.length}`);
    specificCardIndex.value = 1;
}

// Draw a specific card from the deck



function drawSpecificCard(number){
    if (number > deck.shuffledDeck.length) {
        deckAlert(number);
    } else {
        deck.drawnCards.push((deck.shuffledDeck.splice((number - 1), 1))[0]);
        deck.drawnAlt.push((deck.alt.splice((number - 1), 1))[0]);
        invertTest(invertSelect);
        specificCardIndex.setAttribute("max", `${deck.shuffledDeck.length}`);
        specificCardIndex.value = 1;
    }
}

// Creates warning message when drawSpecificCard is out of range

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

function deckAlert(number) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible`,
        `text-center" role="alert">`,
        `   <div><strong>WARNING!</strong>`,
        `You cannot draw card number ${number}!`,
        `There are only ${deck.shuffledDeck.length} cards in the deck!</div>`,
        `   <button type="button" class="btn-close" `,
        `data-bs-dismiss="alert" aria-label="Close">`,
        `   </button>`,
        `</div>`
    ].join("");

    alertPlaceholder.append(wrapper);
}

// Check if card is reversed

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
    displayCard(output);
}

// displayCard ---- Function for displaying cards to play area

function displayCard(inverted){
        // takes values from DOM to create new img element
    let cardSlotId = `card-slot-${deck.drawnCards.length}`;
    let cardId = `card-${deck.drawnCards.length}`;
    let cardToShow = deck.drawnCards[deck.drawnCards.length -1];
    let source = `assets/images/${cardToShow}`;
    let slot = document.getElementById(cardSlotId);
    let cardBackId = `card-${deck.drawnCards.length}-back`;
    let description = deck.drawnAlt[deck.drawnAlt.length -1];
        // creates new img for front of card
    let card = new Image();
    card.src = source;
    card.classList.add("card", "card-in-play");
    card.setAttribute("id", cardId);
    card.setAttribute("alt", description);
        // tests if card should be inverted
    if (inverted === true){
        card.classList.add("inverted");
        card.setAttribute("alt", `${description}, reversed.`);
    }

        // creates img for back of card
    let cardBack = new Image();
    cardBack.src = "assets/images/card-back.jpg";
    cardBack.classList.add("card", "card-back", "card-in-play");
    cardBack.setAttribute("id", cardBackId);

        // adds img elements to DOM
    slot.appendChild(cardBack);
    slot.appendChild(card);

        // animates card flip
    flipSound();
    gsap.to(`#${cardBackId}`, {
         delay: 0.25, duration: 0.5, rotationY:"180deg"
    });
    gsap.from(`#${cardId}`, {
        delay: 0.4, duration: 0.5, rotationY: "90deg"
    });
    if (card.classList.contains("inverted")){
        setTimeout(turnSound, 1000);
        gsap.to(`#${cardId}`, {
            delay: 1, duration: 0.5, rotation: "180deg"
        });
    }
        // adds event listener to new element
    document.getElementById(cardId).addEventListener("click", function(){
        toggleZoom(this);
    });
}

// Funtion for resetting the play area

let resetInProgress = false;

function resetDeck(){
        // reset deck variables
    if (resetInProgress == true) {
        return;
    } else {
        resetInProgress = true;
        deck.shuffledDeck = [...fullDeck];
        deck.drawnCards = [];
        deck.alt = [...fullDeckAlt];
        deck.drawnAlt = [];
            // shuffle deck
        deckShuffle(deck.shuffledDeck, deck.alt);
            // marks cards for deletion
        let images = document.getElementsByClassName("card-in-play");
        let l = images.length;
        for (let i = 0; i < l; i+=1)
        {
            images[i].classList.add("to-be-deleted");
        }
            // animates cards being removed
        gsap.to(".to-be-deleted", {
            y: "40vh", opacity: "0", duration: 0.5, ease: "power2.out"
        })
            // delete images
        setTimeout(deleteImages, 500);
            // animate deck shuffling
        setTimeout(cardShuffleAnimation, 550);
        setTimeout(function() {resetInProgress = false}, 3351);
    }
};

// Removes all marked elements from the DOM

function deleteImages(){
    let images = document.getElementsByClassName("to-be-deleted");
    let l = images.length;
    for (let i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);
    }
}

// ------------------------------Audio Functions

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

// Enlarges card that has been clicked

function toggleZoom(image){
    if (image.classList.contains("inverted")){
        gsap.to(image, {rotation: "0deg", duration:0})
    }
    let state = Flip.getState(image);
    image.classList.toggle("zoomed");
    pickUpSound();
    if (image.classList.contains("inverted")){
        Flip.from(state, {
            duration: 0.75, spin: 1.5, zIndex: 4, ease: "power2.Out"
        });
        gsap.to(image, {
            rotation: "180deg", duration:0, delay: 0.75
        });
    } else {
        Flip.from(state, {
            duration: 0.75, spin: 1, zIndex: 4, ease: "power2.Out"
        });
    }

}

// Animates the deck being shuffled

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
        gsap.from("#shuffling-card-0", {
            y: "40vh", opacity: "0", duration: 0.5,
            ease: "power3.out", zIndex: 4});
        gsap.from("#shuffling-card-1", {
            y: "40vh", opacity: "0", duration: 0.5,
            ease: "power3.out", zIndex: 4
        });
        gsap.from("#shuffling-card-2", {
            y: "40vh", opacity: "0", duration: 0.5,
            ease: "power3.out", zIndex: 4
        });
        setTimeout(playShuffledCardSound, 500);
        gsap.to("#shuffling-card-1", {
            x: "30vw", duration: 0.25, delay: 0.5, zIndex: 4
        });
        gsap.to("#shuffling-card-2", {
            x: "-30vw", duration:0.25, delay: 0.5, zIndex: 4
        });
        gsap.to("#shuffling-card-2", {
            x: "30vw", duration: 0.25, delay: 0.75, zIndex: 4
        });
        gsap.to("#shuffling-card-1", {
            x: "-30vw", duration:0.25, delay: 0.75, zIndex: 4
        });
        gsap.to("#shuffling-card-1", {
            x: "30vw", duration: 0.25, delay: 1, zIndex: 4
        });
        gsap.to("#shuffling-card-2", {
            x: "-30vw", duration:0.25, delay: 1, zIndex: 4
        });
        gsap.to("#shuffling-card-1", {
            x: "0vw", duration: 0.25, delay: 1.25, zIndex: 4
        });
        gsap.to("#shuffling-card-2", {
            x: "0vw", duration:0.25, delay: 1.25, zIndex: 4
        });
        setTimeout(turnSound, 1900);
        gsap.to("#shuffling-card-0", {
            y: "40vh", opacity: "0", duration: 0.9,
            ease: "power1.out", delay: 1.9, zIndex: 4
        });
        gsap.to("#shuffling-card-1", {
            y: "40vh", opacity: "0", duration: 0.9,
            ease: "power2.out", delay: 1.9, zIndex: 4
        });
        gsap.to("#shuffling-card-2", {
            y: "40vh", opacity: "0", duration: 0.9,
            ease: "power3.out", delay: 1.9, zIndex: 4
        });
        setTimeout(endShuffleAnimation, 2800);
        setTimeout(function() {shuffleAnimationRunning = false}, 2801);
    }
}

// removes IMG elements

function endShuffleAnimation(){
    document.getElementById("shuffling-card-0").remove();
    document.getElementById("shuffling-card-1").remove();
    document.getElementById("shuffling-card-2").remove();
}


var module = module || {};
module.exports = {
    fullDeck, deck, drawCard, resetDeck,
    drawSpecificCard, deckShuffle, displayCard
};