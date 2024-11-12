/**
 * @jest-environment jsdom
 */

const {fullDeck, deck, drawCard, resetDeck} = require("../script");

let lastElement = fullDeck.slice(-1);

beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("deck elements exist", () => {
    test("fullDeck has 78 elements", () => {
        expect(fullDeck).toHaveLength(78);
    });
    test("deck object has suffledDeck element", () => {
        expect("shuffledDeck" in deck).toBe(true);
    });
    test("deck objext has drawnCards element", () => {
        expect("drawnCards" in deck).toBe(true);
    });
});

describe("functions to shuffle, draw and display cards work correctly", () => {
    beforeAll(() => {
        resetDeck();
    });
    test("shuffledDeck has 78 elements", () => {
        expect(deck.shuffledDeck).toHaveLength(78);
    });    
    test("drawCard pulls last card from deck", () => {
        expect(deck.drawnCards[-1]).toEqual(lastElement[-1]);
    });
}); 
