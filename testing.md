# Tarot Card Deck-  Testing

![The Tarot Card Deck website](/assets/documentation/pages/main-page.png)

Visit the deployed site: [Tarot Card Deck](https://benmilesrocks.github.io/2---Tarot-Card-Deck/index.html)

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Linter](#linter)
  * [Lighthouse](#lighthouse)
  * [Jest](#jest)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

Testing was ongoing throughout the entire build. I utilised Chrome developer tools whilst building to pinpoint and troubleshoot any issues as I went along.

During development I made use of Google developer tools to ensure everything was working correctly and to assist with troubleshooting when things were not working as expected.

I have gone through each page using Google Chrome developer tools & Microsoft Edge inspector tool to ensure that each page is responsive on a variety of different screen sizes and devices.

- - -

## AUTOMATED TESTING

### W3C Validator

**HTML Validation**

I used [W3C's HTML validator](https://validator.w3.org/) to check my code, which showed no issues.

![W3C HTML Validation - index.html](/assets/testing/validation/html-validation.png)

![W3C HTML Validation - 404.html](/assets/testing/validation/404-html-validation.png)

**CSS Validation**

I used [W3C's Jigsaw Validator](https://jigsaw.w3.org/css-validator/) to test my site's CSS, which showed no issues.


![W3C Jigsaw Validation](/assets/testing/validation/css-validation.png)

- - -

### Linter

I used [JSLint](https://www.jslint.com/) to test my site's JavaScript code. There was only one issue that I was unable to resolve:

![JSLint Validation](/assets/testing/validation/jslint-validation.png)

The linter did not accept the syntax of this For loop, which confirms to the standards of the [w3schools](https://www.w3schools.com/js/js_loop_for.asp) 
documentation. The code works correctly, and this seems to be an issue with the Linter rather than the code itself.

- - -

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

**Home Page**

![Lighthouse overall scores - index](/assets/testing/validation/lighthouse-overall.png)

*Performance*

![Performance](/assets/testing/validation/lighthouse-performance.png)

I followed advice from [this Web.dev article](https://web.dev/articles/optimize-lcp) to reduce LCP, but there are still improvements needed in this score. 
For future versions I will research more methods to improve this score.

*Accessibility*

![Accessibility](/assets/testing/validation/lighthouse-accessibility.png)

*Best Practices*

![Best Practices](/assets/testing/validation/lighthouse-best-practices.png)

*SEO*

![SEO](/assets/testing/validation/lighthouse-seo.png)

**404 Page**

The 404 page had no issues, being a static site with limited features.

![Lighthouse overall score - 404](/assets/testing/validation/lighthouse-404.png)

- - -

### Jest

Jest testing worked earlier in development, but I encountered issues as Jest does not recognise the GSAP functions that I used for animations. 

I have tried mocking GSAP functions as detailed [in the official documentation](https://jestjs.io/docs/mock-functions), but this has not resolved the issue. I have also tried multiple other solutions with the assistance of the Code Institute 
tutor support team, with no success. Because this does not affect site functionality I decided to focus on resolving user facing issues instead, but this is an ongoing issue that I am working to resolve.

| **Test** | **Expected Outcome** | **Pass/Fail** |
| --- | --- | --- | 
| **Deck elements Exist** | --- | --- | 
| fullDeck has 78 elements | expect(fullDeck).toHaveLength(78) | **PASS** |
| fullDeck and shuffledDeck have same length | expect(fullDeck.length).toEqual(deck.shuffledDeck.length) | **PASS** |
| deck object has suffledDeck element | expect("shuffledDeck" in deck).toBe(true) | **PASS** |
| deck objext has drawnCards element | expect("drawnCards" in deck).toBe(true) | **PASS** |
| **Test drawSpecificCard function** | --- | --- | 
| drawSpecificCard draws defined value from deck | expect(deck.drawnCards[0]).toEqual(testElement) | **PASS** |
| shuffledDeck has 77 elements | expect(deck.shuffledDeck).toHaveLength(77) | **PASS** |
| drawSpecificCard removes card from shuffledDeck | expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]) | **PASS** |
| **Test drawCard function** | --- | --- | 
| shuffledDeck has 77 elements | expect(deck.shuffledDeck).toHaveLength(77) | **PASS** |
| drawCard pulls last card from deck | expect(deck.drawnCards[0]).toEqual(testElement) | **PASS** |
| drawCard removes card from shuffledDeck | expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]) | **PASS** |
| **Test deckShuffle function** | --- | --- | 
| shuffledDeck is not the same order as fullDeck | expect(deck.shuffledDeck).not.toEqual(fullDeck) | **PASS** |
| shuffledDeck has same length as fullDeck | expect(deck.shuffledDeck.length).toEqual(fullDeck.length) | **PASS** |
| shuffledDeck has same elements as fullDeck | expect(deck.shuffledDeck).toEqual(expect.arrayContaining(fullDeck)) | **PASS** |
| **Test displayCard function** | --- | --- | 
| img element should exist | expect(document.getElementById("card-1")).toBeTruthy() | **PASS** |
| img src should contain testElement | expect(document.getElementById("card-1").src).toContain(testElement[0]) | **PASS** |
| **Test deckShuffle function after cards have been drawn** | --- | --- | 
| shuffledDeck has 77 elements | expect(deck.shuffledDeck).toHaveLength(77) | **PASS** |
| shuffledDeck is not the same order as testElement | expect(deck.shuffledDeck).not.toEqual(testElement) | **PASS** |
| shuffledDeck has same elements as testElement | expect(deck.shuffledDeck).toEqual(expect.arrayContaining(testElement)) | **PASS** |
| shuffledDeck does not contain drawn card | expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]) | **PASS** |
| **Test deckShuffle function after specific cards have been drawn** | --- | --- | 
| shuffledDeck has 77 elements | expect(deck.shuffledDeck).toHaveLength(77) | **PASS** |
| shuffledDeck is not the same order as testElement | expect(deck.shuffledDeck).not.toEqual(testElement) | **PASS** |
| shuffledDeck has same elements as testElement | expect(deck.shuffledDeck).toEqual(expect.arrayContaining(testElement)) | **PASS** |
| shuffledDeck does not contain drawn card | expect(deck.shuffledDeck).not.toContain(deck.drawnCards[0]) | **PASS** |

- - -

## MANUAL TESTING

### Testing User Stories

**First Time Visitors**

| **Goals** | **How are they achieved?** |
| --- | --- |
| **I want to be able to quickly understand how to use the site** | --- |
| *I want to have an easy to understand tutorial explaining the site features* | Added interactive tour to site, explaining features to new users |
| *The site should be easy to use* | <ul><li>Kept site as simple as possible, making it intuitive to use</li> <li>Made elements large and easy to see</li> <li>Added interactive tour to help new users</li></ul>|
| *The function of each button should be clear with little explaination needed* | Used simple labels for buttons, helping make the function of each elements easy to understand |
| **I want resources to help me understand how to do tarot card readings** | Added links to external resources where the user can learn more about Tarot Card readings |
| **I want the site to be responsive to my device** | The site was designed with responsiveness in mind, and has been tested on multiple devices to ensure functionality on all devices |


**Returning Visitors**

| **Goals** | **How are they achieved?** |
| --- | --- |
| **I want to be able to jump straight into doing a tarot card reading** | <ul><li>Made the site load straight into the main page, ensuring quick access to the main functions of the site</li> <li>Ensured the introduction message is easy to dismiss, allowing users to start reading quickly</li> <li>Ensures page loads with the deck shuffled and ready to draw cards</li></ul> |
| *I want options to draw a specific card from the deck* | Added 'Draw Specific Card' button to the page, allowing the user to pick where they draw the card from in the deck |
| *I want to be able to shuffle and reset the deck in the middle of a drawing* | Added 'Shuffle' button, allowing users to shuffle the deck in the middle of a reading at will |
| **I want resources to help me understand how to do tarot card readings** | Added links to external resources where the user can learn more about Tarot Card readings |
| **I want the site to be responsive to my device** | The site was designed with responsiveness in mind, and has been tested on multiple devices to ensure functionality on all devices |


**Frequent Visitors**

| **Goals** | **How are they achieved?** |
| --- | --- |
| **I want to be able to jump straight into doing a tarot card reading** | <ul><li>Made the site load straight into the main page, ensuring quick access to the main functions of the site</li> <li>Ensured the introduction message is easy to dismiss, allowing users to start reading quickly</li> <li>Ensures page loads with the deck shuffled and ready to draw cards</li></ul> |
| *I want options to draw a specific card from the deck* | Added 'Draw Specific Card' button to the page, allowing the user to pick where they draw the card from in the deck |
| *I want to be able to shuffle and reset the deck in the middle of a drawing* | Added 'Shuffle' button, allowing users to shuffle the deck in the middle of a reading at will |
| **I want the site to be responsive to my device** | The site was designed with responsiveness in mind, and has been tested on multiple devices to ensure functionality on all devices |


- - -

### Full Testing

Full testing was performed on the following devices:

Desktop:
<ul><li>HP Envy All-in-one 32-a10</li></ul>

Mobile Devices:

<ul>
<li>Samsung Galaxy S20 FE</li>
<li>Samsung A20</li>
<li>Samsung Galaxy Z Flip 6</li>
</ul>


Each device tested the site using the following browsers:

* Google Chrome
* Microsoft Edge
* Firefox

Additional testing was taken by friends and family on a variety of devices and screen sizes. They reported no issues when using the site.


| **Feature** | **Expected Outcome** | **Testing Performed** | **Result** | **Pass/Fail** |
| --- | --- | --- | --- | --- |
| **Home Page** | --- | --- | --- | --- |
| *Navigation Bar* | --- | --- | --- | --- |
| Page Title Link | Link to the Home Page | Clicked the Page Title Link | Redirected to index.html | **PASS** |
| Home Page Link | Link to the Home Page | Clicked the Home Page Link | Redirected to index.html | **PASS** |
| Take the Tour Link | Start the interactive tour | Clicked the Take the Tour Link | Begins the interactive tour | **PASS** |
| More Reasources Tab | <ul><li>Display dropdown menu</li><li>Open link in new tab</li></ul> | <ul><li>Clicked More Resources link</li><li>Clicked each link in menu</li></ul> | <ul><li>Displays dropdown menu</li><li>Opens links in new tab</li></ul> | **PASS** |
| *Page buttons* | --- | --- | --- | --- |
| Reset Button | <ul><li>Clear cards displayed</li><li>Play animation to shuffle deck</li></ul> | Clicked reset button | <ul><li>Clears cards displayed</li><li>Plays animation to shuffle deck</li></ul> | **PASS** |
| Shuffle Deck button | Play shuffle animation | Clicked Shuffle buttom | Shuffle animation plays | **PASS** |
| Draw Card button | Draw card from deck, play animation | Draw Card buttom | Draws card from deck, plays animation | **PASS** |
| Draw Specific Card button | Draw card from deck, play animation | Draw Specific Card buttom | Draws card from deck, plays animation | **PASS** |
| Random Draw button | Cards drawn from deck will randomly be inverted, whilst others will displayed normally | Selected Random Draw button, drew multiple cards from deck | Cards randomly inverted as expected | **PASS** |
| Normal Draw button | All cards drawn will be displayed the correct way up | Selected Normal Draw button, drew multiple cards from deck | All cards drawn normally | **PASS** |
| Reversed Draw button | All cards drawn will be displayed reversed | Selected Reversed Draw button, drew multiple cards from deck | All cards drawn reversed | **PASS** |
| Card Zoom function | Selected card will zoom in and out when clicked, animation will play | Clicked cards on display | Selected card zoomed in and out when clicked, animation plays  | **PASS** |
| **404 Page** | --- | --- | --- | --- |
| Page Title Link | Redirect to the Home Page | Clicked the Page Title Link | Redirected to index.html | **PASS** |
| Home Page Link | Redirect to the Home Page | Clicked the Home Page Link | Redirected to index.html | **PASS** |
| More Reasources Tab | <ul><li>Display dropdown menu</li><li>Open link in new tab</li></ul> | <ul><li>Clicked More Resources link</li><li>Clicked each link in menu</li></ul> | <ul><li>Displays dropdown menu</li><li>Opens links in new tab</li></ul> | **PASS** |
| Go Back to Home Page button | Redirect to the Home Page | Clicked the Home Page Link | Redirected to index.html | **PASS** |

I also had to perform manual testing on some functions as I was unable to fix the issues with the Jest testing. To test these functions I altered the resetDeckFirst function, setting the deck to the fullDeck array (meaning all the cards 
are in order, allowing me to test functions based on this).

| **Feature** | **Expected Outcome** | **Testing Performed** | **Result** | **Pass/Fail** |
| --- | --- | --- | --- | --- |
| Draw Card button | Draws the top card from the deck, should display <ul><li>The Fool</li><li>The Magician</li><li>The High Priestess</li></ul> | Clicked Draw Card three times | Displayed <ul><li>The Fool</li><li>The Magician</li><li>The High Priestess</li></ul>  | **PASS** |
| Shuffle Card button | Should reorder the array, preventing the cards from being drawn in order | Clicked Shuffle, clicked Draw Card | Cards were drawn out of order as expected, confirming the deck had been shuffled | **PASS** |
| Reset button | Should clear the play area and shuffle the cards, preventing the cards from being drawn in order | Clicked Reset, clicked Draw Card | Cards were drawn out of order as expected, confirming the deck had been shuffled | **PASS** |
| **Draw Specific Card** | --- | --- | --- | --- |
| Draw Specific Card button | Draw specific card from deck, should be pulled in order from fullDeck array | Tested individual elements as detailed below | Cards displayed as expected | **PASS** |
| Draw Specific Card button | 1st card should be 'The Fool' | Selected card number 1, clicked draw specific card | Displayed 'The Fool' card | **PASS** |
| Draw Specific Card button | 78th card should be 'King of Swords' | Selected card number 78, clicked draw specific card | Displayed 'King of Swords' card | **PASS** |
| Draw Specific Card button | 14th card should be 'Temperence' | Selected card number 14, clicked draw specific card | Displayed 'Temperence' card | **PASS** |
| Draw Specific Card button | 42nd card should be '7 of Pentacles' | Selected card number 42, clicked draw specific card | Displayed '7 of Pentacles' card | **PASS** |

- - -