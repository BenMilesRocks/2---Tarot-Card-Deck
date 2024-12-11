// testScreenSize ---- checks if screen is large enough to display Draw Card button, then runs appropriate IntroJS script
//  TO DO - Add functions to reset deck & draw cards before tour, and reset deck after tour is finished

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
        element: document.querySelectorAll('#card-display-area')[0],
        title: "Card Display Area",
        intro: "When cards are drawn they are displayed in this area here.",
    }]).addSteps([{
        element: document.querySelectorAll('#card-slot-2')[0],
        title: "Card Slot",
        intro: "Each card can be clicked to enlarge it for a better view. Click it again to shrink it back to normal size.",
    }]).addSteps([{
        element: document.querySelectorAll('.draw-options')[0],
        title: "Draw Controls",
        intro: "These choose if the card is drawn normally or reversed. This will only change when you select a different option from this menu.",
    }]).addSteps([{
        element: document.querySelectorAll('#normal-button')[0],
        title: "Normal",
        intro: "This will draw cards the correct way up.",
    }]).addSteps([{
        element: document.querySelectorAll('#reversed-button')[0],
        title: "Reversed",
        intro: "This will draw cards reversed.",
    }]).addSteps([{
        element: document.querySelectorAll('#random-button')[0],
        title: "Draw Controls",
        intro: "This will randomly select if cards are reversed or not. This is the default option.",
    }]).addSteps([{
        element: document.querySelectorAll('.draw-card')[0],
        title: "Draw Card",
        intro: "This draws the top card from the deck.",
    }]).addSteps([{
        element: document.querySelectorAll('.draw-specific')[0],
        title: "Draw Specific Card",
        intro: "This draws a specific card from the deck (like the 42nd card, for example). If you select '1' it will draw the top card from the deck.",
    }]).addSteps([{
        element: document.querySelectorAll('#reset')[0],
        title: "Reset Button",
        intro: "This clears away all the cards on display and shuffles the deck, ready for a new reading.",
    }]).addSteps([{
        element: document.querySelectorAll('#deck-shuffle-btn')[0],
        title: "Shuffle Button",
        intro: "This will shuffle the deck *without* removing the cards on display. This way you can shuffle your deck in the middle of a reading if you wish.",
    }]).start();
}



// Limited tour for Mobile devices

function runMobileTour(){
    introJs().addSteps([{
        element: document.querySelectorAll('#card-display-area')[0],
        title: "Card Display Area",
        intro: "When cards are drawn they are displayed in this area here.",
    }]).addSteps([{
        element: document.querySelectorAll('#card-slot-2')[0],
        title: "Card Slot",
        intro: "Each card can be clicked to enlarge it for a better view. Click it again to shrink it back to normal size.",
    }]).addSteps([{
        element: document.querySelectorAll('.draw-options')[0],
        title: "Draw Controls",
        intro: "These choose if the card is drawn normally or reversed. This will only change when you select a different option from this menu.",
    }]).addSteps([{
        element: document.querySelectorAll('#normal-button')[0],
        title: "Normal",
        intro: "This will draw cards the correct way up.",
    }]).addSteps([{
        element: document.querySelectorAll('#reversed-button')[0],
        title: "Reversed",
        intro: "This will draw cards reversed.",
    }]).addSteps([{
        element: document.querySelectorAll('#random-button')[0],
        title: "Draw Controls",
        intro: "This will randomly select if cards are reversed or not. This is the default option.",
    }]).addSteps([{
        element: document.querySelectorAll('#card-number')[0],
        title: "Card Number",
        intro: "This draws a specific card from the deck (like the 42nd card, for example). If you select '1' it will draw the top card from the deck.",
    }]).addSteps([{
        element: document.querySelectorAll('#draw-card-specific')[0],
        title: "Draw Card",
        intro: "Click this to draw the card.",
    }]).addSteps([{
        element: document.querySelectorAll('#reset')[0],
        title: "Reset Button",
        intro: "This clears away all the cards on display and shuffles the deck, ready for a new reading.",
    }]).addSteps([{
        element: document.querySelectorAll('#deck-shuffle-btn')[0],
        title: "Shuffle Button",
        intro: "This will shuffle the deck *without* removing the cards on display. This way you can shuffle your deck in the middle of a reading if you wish.",
    }]).start();
}
