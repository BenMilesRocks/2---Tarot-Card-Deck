/**
 * @jest-environment jsdom
 */

const {fullDeck, deck, drawCard, resetDeck, drawSpecificCard} = require("../script");

let firstElement = fullDeck.slice(0, 1);

beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("deck elements exist", () => {
    beforeAll(() => {
        resetDeck();
    });
    test("fullDeck has 78 elements", () => {
        expect(fullDeck).toHaveLength(78);
    });
    test("fullDeck and shuffledDeck have same length", () => {
        expect(fullDeck.length).toEqual(deck.shuffledDeck.length);
    });
    test("deck object has suffledDeck element", () => {
        expect("shuffledDeck" in deck).toBe(true);
    });
    test("deck objext has drawnCards element", () => {
        expect("drawnCards" in deck).toBe(true);
    });
});

describe("Test drawSpecificCard functions", () => {
    beforeAll(() => {
        resetDeck();
        drawSpecificCard(10);
    });
    test("drawSpecificCard draws defined value from deck", () => {
        expect(deck.drawnCards[0]).toEqual(fullDeck[10]);    
    });
    test("shuffledDeck has 77 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(77);
    });
    test("drawSpecificCard removes card from shuffledDeck", () => {
        expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]);    
    });
})

describe("functions to shuffle, draw and display cards work correctly", () => {
    beforeAll(() => {
        resetDeck();
        drawCard();
    });
    test("shuffledDeck has 77 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(77);
    });    
    test("drawCard pulls last card from deck", () => {
        expect(deck.drawnCards).toEqual(firstElement);
    });
    test("drawCard removes card from shuffledDeck", () => {
        expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]);    
    });
});



