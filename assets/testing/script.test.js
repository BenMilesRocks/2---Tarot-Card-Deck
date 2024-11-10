/**
 * @jest-environment jsdom
 */

const {fullDeck} = require("../script");

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
});