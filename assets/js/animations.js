gsap.registerPlugin(Flip);

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
            card.src = "../assets/images/card-back.jpg";
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

// clearCardsAnimation - animates cards being taken off the table

function clearCardsAnimation(){
    gsap.to(".to-be-deleted", {y: "40vh", opacity: "0", duration: 0.5, ease: "power2.out"});
}

// cardFlipAnimation - animates cards being displayed for the first time

flipSound(cardBack, cardFront);    
    gsap.to(cardBack, {rotationY: "180deg", duration: 0.5, delay: 0.25});
    gsap.from(cardFront, {rotationY: "90deg", duration: 0.5, delay: 0.4});
    if (card.classList.contains("inverted")){
        setTimeout(turnSound, 1000);
        gsap.to(cardFront, {rotation: "180deg", duration: 0.5, delay: 1});
    }