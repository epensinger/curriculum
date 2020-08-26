# CSS Attributes
In this lesson I'm going to show you the most commonly used CSS attributes that will allow you to make some big changes to the look of your pages with little effort.  

## Lesson Goals
- Customize font, colors, and basic spacing using the CSS box model.
- Apply google fonts to your project

## Key terms to pay attention to
- CSS Properties

## Key Syntaxes
- ```background-color```
- ```color```
- ```border```
- ```font-family```
- ```margin```
- ```padding```

## Lesson Activities
- CSS properties Demo
- Style your Coding Jobs Page

## Lesson Outline
### A crash Course in Colors
- Colors in CSS are in hex, rgb, or rgba
- Hex is the fastest, rgba allows you to set the a which is the alpha channel, it determines how transparent the color is. [more info] (https://developer.mozilla.org/en-US/docs/Glossary/Alpha)
- For those who struggle with colors and matching:
    - [Material colors](https://www.materialui.co/colors)
    - [Colour Lovers](https://www.colourlovers.com/)
- ```background-color: ``` changes the color of the background of something - usually a div, section, or body.
- ```color: ``` changes the color of text.

### Fonts
- ```font-size```
    - px vs em
- ```font-weight```
- ```text-align```
#### Google Fonts
- pick a font
- put link in head
- Copy and paste CSS


### The CSS Box Model
- Each element in HTML is represented as a rectangular box
- 4 parts 
    - content - may be text, img, div etc.  has width and height
    - padding - between border and content
    - border - can be visible or invisible, can take up space (ex 3px) or not (ex 0px)
    - margin - between border and anything else
- Each part has 4 sides - top, right, bottom, left.
- can set each side individually or in one rule:
    - ```padding-left 4px;```
    - ```padding: 10px 20px 10px 20px```
- tic-tac-toe board code along
- [more info on the box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

### Assignment: Add CSS to your Coding Jobs Page
- Add color, google font, and spacing using the box model.
- When I look at your CSS I want to see a google font and use of padding and margins.
- **YOU MAY NOT USE CLASSES**  I want to see you do this using the ID's and elements already in the HTML.

### Other Resources
- [Here's a list of CSS Properties on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
- [Here's the CSS Home Page on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) 