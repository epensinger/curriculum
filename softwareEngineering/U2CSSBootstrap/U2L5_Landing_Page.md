# Landing Page
In this lesson I'll show you how to make a bootstrap style landing page for a website.  You will make one of your own to add to your collection.

## Lesson Goals
- Use the jumbotron feature.
- Combine a custom CSS page with Bootstrap.
- Center Content on a page using flex.

## Key Terms to pay attention to
- jumbotron
- flex
- align
- justify

## Key syntaxes
- 
## Lesson Activites
- Landing Page Code Along
- Use navbars to bring your technologies table, coding jobs page, and form together into a "site"

## Lesson Outline
### Set Up New HTML Page
- Use HTML:5 to load boilerplate
- Add Bootstrap CSS CDN from getbootstrap.com
- Add Bootstrap JS CDN from getbootstrap.com (right above closing body tag)
- Test Bootstrap
    - add an h1, load in browser, check for BS font.
    - add a class of "display-1" to h1, reload and check for update

### Add a Custom CSS Page
- create landing.css in same folder
- add link
- set ```body {background: red}```
- reload in browser

### Add Navbar
- open navbars in bootstrap docs (components)
- paste in a navbar that most closely meets your needs
- replace with your text

### Add Icon to Navbar
- Open Icons in bootstrap docs
- search code to match example
- copy SVG and paste inside `a` tag
    - SVG is scalable vector graphic which can be represented completely by code

### Add Signup Button To Navbar
- add bootstrap button classes to an `a` element.

### Use Flex to align content
- All Navs in bootstrap are flex elements
- refer to Bootstrap Flex Utility in docs
- Pull the items in the navbar to the left by adding flex-row-reverse to the div around the ul
- More on flexbox later.

### Add a message box with some content
- Create a div with no classes for the moment
- Inside a div put an H1, a P, and a P with 2 buttons.

### Center the div horizontally
- add a div around the message div - a box for it to be centered in.
- give the box a class of "d-flex" (see the flex utility page again)
- justify is for horizontal alignment - add "justify-content-center"

### Center the div vertically
- add "align-content-center"
- inspect the element in the browser to see what went wrong.
- Look at the sizing utility in Bootstrap
- add class of "h-100" to the div with the d-flex class to make it the full size of the parent.
- check the size of the parent (body)
- give the body a class of "h-100"
- check the size of the parent (html)
- give the html a class of "h-100"
- inspect again
- give the message div a class of "h-25"
- remove "align-content-center"
- add "align-self-center" to the message div
- vow never to make fun of front end engineers.

### Center the text in the message
- check out bootstrap text utility
- add classes of "text-center" to each line.

### Add image from unsplash (shift to custom CSS file)
- make sure to right click to copy the image address
- add the url to the background of the body element
- by default it will tile on really big screens that you might not have which is why developers have big screens.
- check out the CSS background page on MDN
- look at the background size page on MDN
- add a background-size: cover;
- look at the background position page on MDN
- add background-position: center;

### Customize the Navbar
- add background: #607D8B (a nice gray from materialUI) to nav element
- inspect to see why it doesn't work
- remove the offending class from your code

### Fix Nav Links
- all the links should be active
- add active class where necessary

### Make the text visible in front of the picture
- Add and ID of #msg to the div that contains the text elements
- grab a lighter shade fo the color of the navbar in RGBA
- set the background of #msg to that color, and adjust the A to .75
- add 25px of padding
- set the border-radius to 10px

### Font
- Hop on Google Fonts, filter for monospace for a "techy" font.
- copy the link
- use the universal selector to change the font family for all text on the page

