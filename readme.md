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

### Accessibility

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

### Known Bugs

## Credits

### Code used

### Media

### Acknowledgements

I would like to acknowledge the following people

- Jubril Akolade - my Code Institute mentor

- Mia Edris for helping with the Media sources

- The Code Institute Slack channel Peer Code Review - thank you to everyone who tested the site and offered feedback

- Amilie Miles for 'Rubber Duck' debugging