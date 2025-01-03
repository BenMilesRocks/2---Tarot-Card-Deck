# Tarot Card Deck

![Tarot Card Deck homepage](/assets/documentation/pages/main-page.png)

## Project Goals

This project is to create an interactive tarot card deck, allowing users to perform a basic tarot card reading online without the need for a physical deck of cards.

[The deployed version of the site is available here](https://benmilesrocks.github.io/2---Tarot-Card-Deck/)

The main priority is to make a site that is easy to use. Buttons should be clearly labled, intuitive and easily readable on a wide range of devices.

It should respond quickly and intuitively to user input, with clear feedback for the user to make sure they know when a function is being performed.

The site should also contain links to external resources, allowing the user to learn more about Tarot Card readings at their convenience. 



## Contents

* [User Experience](#user-experience)
    - [User Stories](#user-stories)
* [Design](#design)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframe](#wireframe)
* [Features](#features)
* [Accessibility](#accessibility)
* [Credits](#credits)
* [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
* [Deployment and Local Development](#deployment-and-local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
* [Testing](#testing)
    - [Solved Bugs](#solved-bugs)
    - [Known Bugs](#known-bugs)
* [Credits](#credits)
    - [Code Used](#code-used)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)


## User Experience


### User Stories


**First Time Visitor Goals**

* I want to be able to quickly understand how to use the site
    - I want to have an easy to understand tutorial explaining the site features
    - The site should be easy to use
    - The function of each button should be clear with little explaination needed
* I want resources to help me understand how to do tarot card readings
* I want the site to be responsive to my device

**Returning Visitor Goals**

* I want to be able to jump straight into doing a tarot card reading
    - I want options to draw a specific card from the deck
    - I want to be able to shuffle and reset the deck in the middle of a drawing
* I want resources to help with tarot card readings
* I want the site to be responsive to my device

**Frequent Visitor Goals**

* I want to be able to jump straight into doing a tarot card reading
    - I want options to draw a specific card from the deck
    - I want to be able to shuffle and reset the deck in the middle of a drawing
* I want the site to be responsive to my device

## Design

### Color Scheme

The color palette for this site was mostly chosen by keeping Bootstrap's 'Light' class defaults, as this provided a clean aesthetic that kept out of the way of the rest of the site. 

During user testing one piece of feedback I received was the desire for a bacground that worked well with the mystical themes of Tarot. I settled on this bacground image of stars, which 
works well with the mystical themes whilst not being too obtrusive or distracting for the user.

![The Background Image](/assets/images/blue-background.webp)

![Site Color Palette](/assets/documentation/pages/tcd-color-palette.png)

### Typography

Because I wanted the focus of the site to be the Tarot Cards, I wanted a font family that would not be too much of a distraction for the user.

I decided to keep the Bootstrap default font family which uses Helvetica and Arial. Both are sans-serif fonts, making them clear and easy to read.

### Imagery

Imagery plays a huge part in Tarot, as interpreting the images of the cards is a key factor in how many people perform readings.

I decided to use the classic [Rider-Waite Tarot Card deck](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot) for the cards, primarily because it is the most easily identifiable 
of the Tarot Card decks. This makes it simple for newer users and intuitive for people more familiar with Tarot Cards, and improves the overall usability of the site.

![The Death Card](/assets/images/13-death.jpg)

For the rest of the site I wanted to keep a clean aesthetic, to keep from making the site layout too cluttered or difficult to understand. To this end I kept most of the Bootstrap's 
'Light' class settings, which provided an unobtrusive User Interface allowing the focus to remain on the cards in play.

### Wireframe

Wireframes were created for Mobile, Tablet and Desktop using Affinity Designer.

![Desktop Wireframe](/assets/documentation/wireframe/laptop-wireframe.jpg)

![Tablet Wireframe](/assets/documentation/wireframe/tablet-wireframe.jpg)

![Mobile Wireframe](/assets/documentation/wireframe/mobile-wireframe.jpg)

As you can see, the Desktop version of the site is almost identical to the wireframe.

![Laptop Homepage](/assets/documentation/pages/laptop-page.jpg)

The tablet version of the site was not large enough to accomodate the 'Draw Card' section, so this was removed to make it easier to view on smaller screens.

![Tablet Homepage](/assets/documentation/pages/tablet-page.jpg)

The mobile version of the site was amended to stack the 'Draw Options' and the 'Draw Specific Card' sections on top of each other, making it easier to display 
on extra small screens.

![Mobile Homepage](/assets/documentation/pages/mobile-page.jpg)

### Features

**Home Page**

The website is a single page, to keep navigation simple and intuitive. The page has

* a favicon in the browser tab

![Favicon](/assets/documentation/pages/favicon.png)

* a navigation bar

![Navbar](/assets/documentation/pages/nav-bar.png)

* An interactive tour, explaining how to use the site

![Tour](/assets/documentation/gif/tour.gif)

* Buttons to reset the play area and to shuffle the deck of cards

![Reset and Shuffle buttons](/assets/documentation/pages/reset-and-shuffle.png)

* An area to display cards that have been played

![Card Display Area](/assets/documentation/pages/card-display-area.png)

* Cards that have been displayed can also be clicked to enlarge them, making it easier to see the cards on smaller screens

![Card Zoom Animation](/assets/documentation/gif/card-zoom.gif)

* Radio Buttons to select if the card is drawn Normally or Reversed, or to Randomize this choice (default)

![Draw Options](/assets/documentation/pages/draw-options.png)

* Buttons to reset the play area and to shuffle the deck of cards

![Reset and Shuffle buttons](/assets/documentation/pages/reset-and-shuffle.png)

* A button to draw the top card of the deck

![Draw Card button](/assets/documentation/pages/draw-card.png)

* A section to draw a specific card from the deck (ie, the 12th card in the deck rather than the top card)

![Draw Specific Card](/assets/documentation/pages/draw-specific-card.png)

The site also features a 404 page, in case of mis-navigation by the user.

![404 Page](/assets/documentation/pages/404-page.png)

**Animations**

An essential part of this site is making sure the user has ample feedback for actions that are being performed. This not only lends an air of verisimilitude, but also 
makes it clear when functions are being performed. This is especially important for functions that do not relate to displaying cards (such as shuffling the deck), as 
otherwise the user might not think that the function is being performed. This is why I added animations using GSAP for:

* Drawing the cards

![Drawing Cards](/assets/documentation/gif/normal-draw.gif)

* Reversing the cards

![Reversing Cards](/assets/documentation/gif/reverse-draw.gif)

* Zooming cards in and out

![Drawing Cards](/assets/documentation/gif/card-zoom.gif)

* Shuffling the deck

![Shuffling the deck](/assets/documentation/gif/shuffle.gif)

* Resetting the deck

![Resetting the deck](/assets/documentation/gif/rest-deck.gif)

**Audio**

It was important to include audio elements in this site, as it increases the level of user feedback while animations are playing. All the sounds were sourced from  
[ZapSplat.com](https://www.zapsplat.com/), and used in accordance with their standard license.

**Future Implementations**

There are a number of additional features that I would like to implement in future versions of the site, in particular:

* Add options for different types of Tarot Reading

Although the 'Three Card Reading' is seen as the simple default reading for most Tarot Card users, there are many different 'Spreads' (or patterns) for reading cards like 
[The simple Five Card Spread](https://www.thetarotguide.com/simple-five-card-spread/), [The Caltic Cross](https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/the-celtic-cross-tarot-spread-exploring-the-classic-10-card-tarot-spread?srsltid=AfmBOorouK9hUTr60I2SayLXth_Il2KGnDadHestefhssDgBoPrSpqO0) and 
[The Twelve Houses of the Zodiac](https://www.llewellyn.com/journal/article/1748?srsltid=AfmBOoo5CGuJd_wWuVmYod6zX_0n2YNRn7gQWSUVwLON9D1N6ZltJmaH). Adding options 
for different spreads in future versions would increase the usability of the site and make users more likely to return.

* Add the ability to draw additional 'clarification' cards

Some people like to draw additional cards when performing a Tarot Card Reading, to clarify the meaning of the cards they have drawn or to ask specific questions about 
related topics. This would be a simple but important feature to add to the site.

* Allow users to choose what cards are included in the deck before shuffling

Tarot Cards are split into five different suits - The Major Arcana, and the Minor Arcana (Swords, Cups, Wands and Pentacles). Some users may wish to draw cards 
only from the Major Arcana, for example; so the ability to choose which cards are included in the shuffle would be a valuable addition.

### Accessibility

I have worked hard to ensure the website is as easy to navigate and as accessible to disabled people as possible. To achieve this I:

* Used semantic HTML elements
* Added Aria tags to all links, buttons and content to ensure Screen Readers are able to comprehend it
* Used a San-Serif font for site navigation, to make it as easy to read as possible
* Used as little text as possible, to make sure the site is accessible to people who do not speak or read English
* Ensured contrasting colors were used throughout the site to keep elements easily idenitfiable and readable.

I also tested the site with the Chrome extension [Web Disability](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) Simulator 
to ensure the user experience was friendly to those with color blindness, parkinsons and dyslexia.

**Yellow-Blue Colorblindness**

![Yellow-Blue Colorblindness](/assets/documentation/pages/yellow-blue-colorblind.png)

**Red-Green Colorblindness**

![Red-Green Colorblindness](/assets/documentation/pages/red-green-colorblind.png)

## Technologies Used

### Languages Used

This website is built with HTML 5, Javascript and styled using CSS.

### Frameworks, Libraries & Programs Used

I used [Bootstrap 5](https://getbootstrap.com/) framework to make use of its responsive elements. I also used [GSAP](https://gsap.com/core/) for animations, and [introJS](https://introjs.com/) 
for the Introduction and Take The Tour features.

## Deployment and Local Development

### Deployment

The site is deployed using GitHub Pages - [Tarot Card Deck](https://github.com/BenMilesRocks/2---Tarot-Card-Deck)

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [BenMilesRocks/2---tarot-card-deck](https://github.com/BenMilesRocks/2---Tarot-Card-Deck).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

**How to fork**

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [BenMilesRocks/2---tarot-card-deck](https://github.com/BenMilesRocks/2---Tarot-Card-Deck).
3. Click the Fork button in the top right corner.

**How to clone**

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [BenMilesRocks/2---tarot-card-deck](https://github.com/BenMilesRocks/2---Tarot-Card-Deck).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please refer to [testing.md](/testing.md) for all testing carried out.

### Solved Bugs

| **Issue** | **Action Performed** | **Result** |
| --- | --- | --- |
| Sounds will not play if a sound is already being played | Created functions for each audio file, declared the constant for the audio file *inside* the function | Sounds now play even if the page is already playing that audio clip |
| Card Zoom animations for Reversed cards do not display correctly | <ul><li>Created 'if' statement in toggleZoom function</li><li>Reversed cards are reverted back to normal</li><li>added additional 1/2 rotation to animation, flipping the card upside down in the process</li></ul> | Reversed cards now display correctly when Zoomed in and out |
| If clicked quickly, it is possible to delete cards in play with the 'Reset' button | Added new class to assign elements for deletion in the resetDeck function, preventing cards in play from being targeted | Cards in play will not be deleted in this way |
| If clicked quickly, the Reset function interrupts the Shuffle animation | Added shuffleAnimationRunning variable to test if animation is playing. If true, resetDeck does not interrupt this animation | Animations are no longer interrupted |

### Known Bugs

* Site does not display correctly on the front facing display of the Samsung Galaxy Z Flip 6

This screen does not allow for scrolling, as it is intended for previews of sites and not full operation. It is highly unlikely a user would actually try to use the site this way, and the site works correctly on the main screen. I was unable to find 
a resolution for this, as it is a very specific edge case that is unlikely to be encountered during normal site usage.

* Automated Jest testing does not function

Although Jest testing worked correctly earlier in development, I am no longer able to get the testing to function correctly. This is because Jest does not recognise the GSAP functions, causing it to raise an error and abandon the testing.

I have tried mocking GSAP functions as detailed [in the official documentation](https://jestjs.io/docs/mock-functions), but this has not resolved the issue. I have also tried multiple other solutions with the assistance of the Code Institute 
tutor support team, with no success. Because this does not affect site functionality I decided to focus on resolving user facing issues instead, but this is an ongoing issue that I am working to resolve.

## Credits

### Code used

I used code from [this Stack Overflow post](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) that how to implement the 
[Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) in JavaScript. 

I also took inspiration from this Stack Overflow post about [Enlarging and Shrinking images](https://stackoverflow.com/questions/71034865/zoom-in-and-out-of-image-on-click-using-event-listeners) 
which was used in the toggleZoom function. 

For getting the value of the Draw Specific Card input field I used code from [this article on Shecodes.io](https://www.shecodes.io/athena/77658-how-to-get-the-value-of-an-input-in-javascript#:~:text=To%20get%20the%20value%20of%20an%20input%20in%20JavaScript%2C%20you,user%20in%20the%20input%20field.&text=%2F%2F%20HTML%20%3Cinput%20type%3D%22,%22).

To create the image elements [I used code from this post on Tutorialspoint.com](https://www.tutorialspoint.com/how-to-create-an-image-element-dynamically-using-javascript) to dynamically create 
images as cards are drawn.

Finally there was [this forum post on sololearn.com](https://www.sololearn.com/en/Discuss/2672663/how-to-write-a-js-code-to-remove-all-img-tags-from-html-page) which explains how to delete images 
on the DOM. I decided to use a different method to remove the card images when clicking the 'Reset' button, but it still uses part of this code to iterate through the elements tagged with the 
'to-be-deleted' class.

### Media

All sounds were sourced from [ZapSplat.com](https://www.zapsplat.com/).

I decided to use the classic [Rider-Waite Tarot Card deck](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot) for the cards, and the images were taken from 
[Tarotcardmeanings.net](https://www.tarotcardmeanings.net/).

The background image and the Card Back image was sourced from [Freepik.com](https://www.freepik.com/), used under their license agreement.

### Acknowledgements

I would like to acknowledge the following people

- Jubril Akolade - my Code Institute mentor

- Ashley Wolf for explaining how Tarot Card readings are performed, and answering questions to help with user requirements

- Eliza Chang & Ashley Wolf for site testing on mobile devices

- The Code Institute Slack channel Peer Code Review - thank you to everyone who tested the site and offered feedback

- The Code Institude Tutor Support team for assisting with fixing issues

- Amilie Miles for 'Rubber Duck' debugging