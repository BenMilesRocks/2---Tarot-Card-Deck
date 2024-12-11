// --------------------------------------------------Event Listeners

// On page load, runs resetDeckFirst function to ensure deck object is ready for play

document.addEventListener("DOMContentLoaded", () => {
    resetDeck();
    introJs().setOptions({
        steps: [{
          title: 'Welcome',
          intro: 'Welcome to the interactive Tarot Card Deck! Click "Take the Tour" in the menu above to learn how the app works.'
        }]}).start();
});

// ==Buttons

// ----tour button

tourBtn = document.querySelector("#tour");
tourBtn.addEventListener("click", function(){
    testScreenSize();
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

let resetInProgress = false;

function resetDeckButton(){
    // reset deck variables
    if (resetInProgress == true) {
        return
    } else {
        resetInProgress = true;

        resetDeck();
            // marks cards for deletion
        let images = document.getElementsByClassName('card-in-play'); 
        let l = images.length;
        for (let i = 0; i < l; i++) {             
            images[i].classList.add("to-be-deleted");           
        }
            // animates cards being removed
        clearCardsAnimation();
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
};