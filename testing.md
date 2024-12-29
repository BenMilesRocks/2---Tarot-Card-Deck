# Tarot Card Deck-  Testing

![The Ben Miles Rocks site shown on a variety of screen sizes](/assets/documentation/pages/home-1.png)

Visit the deployed site: [Ben Miles Rocks](https://benmilesrocks.github.io/1---Ben-Miles-Rocks/index.html)

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Linter](#linter)
  * [Lighthouse](#lighthouse)
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

### Linter

I used [JSLint](https://www.jslint.com/) to test my site's JavaScript code. There was only one issue that I was unable to resolve:

![JSLint Validation](/assets/testing/validation/jslint-validation.png)

The linter did not accept the syntax of this For loop, which confirms to the standards of the [w3schools](https://www.w3schools.com/js/js_loop_for.asp) 
documentation. The code works correctly, and this seems to be an issue with the Linter rather than the code itself.

- - -

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

![Lighthouse overall scores](/assets/testing/validation/lighthouse-overall.png)

**Performance**

![Performance](/assets/testing/validation/lighthouse-performance.png)

I followed advice from [this Web.dev article](https://web.dev/articles/optimize-lcp) to reduce LCP, but there are still improvements needed in this score. 
For future versions I will research more methods to improve this score.

**Accessibility**

![Accessibility](/assets/testing/validation/lighthouse-accessibility.png)

**Best Practices**

![Best Practices](/assets/testing/validation/lighthouse-best-practices.png)

**SEO**

![SEO](/assets/testing/validation/lighthouse-seo.png)


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




- - -