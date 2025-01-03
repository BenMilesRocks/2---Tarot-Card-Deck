/**
 * @jest-environment jsdom
 */

const {fullDeck, deck, drawCard, resetDeck, drawSpecificCard, deckShuffle, displayCard} = require("../script");
const $ = require('jquery');
const gsap = require('gsap');
const Flip = require('gsap/Flip');

jest.mock('gsap');

let testElement;

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

describe("Test drawSpecificCard function", () => {
    beforeAll(() => {
        resetDeck();
        testElement = deck.shuffledDeck[10]
        drawSpecificCard(10);
    });
    test("drawSpecificCard draws defined value from deck", () => {
        expect(deck.drawnCards[0]).toEqual(testElement);    
    });
    test("shuffledDeck has 77 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(77);
    });
    test("drawSpecificCard removes card from shuffledDeck", () => {
        expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]);    
    });
})

describe("Test drawCard function", () => {
    beforeAll(() => {
        resetDeck();
        testElement = deck.shuffledDeck[0];
        drawCard();
    });
    test("shuffledDeck has 77 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(77);
    });    
    test("drawCard pulls last card from deck", () => {
        expect(deck.drawnCards[0]).toEqual(testElement);
    });
    test("drawCard removes card from shuffledDeck", () => {
        expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]);    
    });
});

describe("Test deckShuffle function", () => {
    beforeAll(() => {
        resetDeck();
        deckShuffle(deck.shuffledDeck);
    });
    test("shuffledDeck is not the same order as fullDeck", () => {
        expect(deck.shuffledDeck).not.toEqual(fullDeck);
    });
    test("shuffledDeck has same length as fullDeck", () => {
        expect(deck.shuffledDeck.length).toEqual(fullDeck.length);
    });
    test("shuffledDeck has same elements as fullDeck", () => {
        expect(deck.shuffledDeck).toEqual(expect.arrayContaining(fullDeck));
    });
});

describe("Test displayCard function", () => {
    beforeAll(() => {
        resetDeck();
        drawCard();
        testElement = [...deck.drawnCards]
        displayCard();
    });
    test("img element should exist", () => {
        expect(document.getElementById("card-1")).toBeTruthy();
    });
    test("img src should contain testElement", () => {
        expect(document.getElementById("card-1").src).toContain(testElement[0]);
    });
});

describe("Test deckShuffle function after cards have been drawn", () => {
    beforeAll(() => {
        resetDeck();
        drawCard();
        testElement = [...deck.shuffledDeck]
        deckShuffle(deck.shuffledDeck);
    });
    test("shuffledDeck has 77 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(77);
    });
    test("shuffledDeck is not the same order as testElement", () => {
        expect(deck.shuffledDeck).not.toEqual(testElement);
    });
    test("shuffledDeck has same elements as testElement", () => {
        expect(deck.shuffledDeck).toEqual(expect.arrayContaining(testElement));
    });
    test("shuffledDeck does not contain drawn card", () => {
        expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]);
    });
});

describe("Test deckShuffle function after specific cards have been drawn", () => {
    beforeAll(() => {
        resetDeck();
        drawSpecificCard(10);
        testElement = [...deck.shuffledDeck]
        deckShuffle(deck.shuffledDeck);
    });
    test("shuffledDeck has 77 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(77);
    });
    test("shuffledDeck is not the same order as testElement", () => {
        expect(deck.shuffledDeck).not.toEqual(testElement);
    });
    test("shuffledDeck has same elements as testElement", () => {
        expect(deck.shuffledDeck).toEqual(expect.arrayContaining(testElement));
    });
    test("shuffledDeck does not contain drawn card", () => {
        expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]);
    });
});