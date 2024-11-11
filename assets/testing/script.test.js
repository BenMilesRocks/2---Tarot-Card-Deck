/**
 * @jest-environment jsdom
 */

const {fullDeck, deck} = require("../script");

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
});

// describe("functions to shuffle, draw and display cards work correctly", () => {
//     test("shuffleDeck rearranges array order", () => {
//         ;
//     });
// });