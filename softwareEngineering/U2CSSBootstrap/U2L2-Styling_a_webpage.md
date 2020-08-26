# Styling a Webpage
In this lesson we are going to take a look at how CSS us used to style a webpage.  My goal is not for you to memorize CSS, but that you understand how rules are put together and how you can create and modify them.

## Lesson Goals
- Use chrome developer tools to view page resources
- Identify role of HTML and CSS in a website
- Write CSS rules using proper syntax
- Use MDN as a reference guide to CSS rules and selectors

## Key Terms to pay attention to
- CSS Rules

## Key syntaxes
- ```selector { attribute: value }```

## Lesson Activites
- Element Selectors Demo
- Add a Stylesheet to your Coding Jobs Page

## Lesson Outline
### Basic structure of CSS Rules
- ```selector {
        attribute: value;
        attribute: value;
    }```

### Selectors
- CSS Selectors are used to identify which part of the HTML to apply style rules to
- Rules will apply to all instances of the selector in your HTML
- You can use multiple selectors to apply one set of rules to multiple items.

### Element Selectors
- Select HTML elements by type
- ```p``` selects all ```<p>``` tags
- ```h1``` selects all ```<h1>``` tags
- and so on

### Star Selector
- select all the elements on the page
```* { ```

### Decedent Selector
- all the __ tags that are inside __ tags
- ex ```li a {```
    -selects all the a tags which are inside list items
- ex ```nav a {```
    -selects all the a tags which are inside list items

### Adjacent Selector
- tags that are next to a tag (come after, but not nested)
- ex ```h4 + ul {```
    - selects every ul that comes right after an h4 on the page.
- ex ```img + p {```
    - selects the p tags that come right after imgs on the page.

### nth of type 
- ```li:nth-of-type(3) {```
    - selects every 3rd in each list.
- ```li:nth-of-type(even) {```

### Class and ID selectors
- you can also select by class and by ID.  
- at this exact moment we are going to do all of our regular CSS styles by element selectors and reserve classes and ID's for Bootstrap.
- if you are highly concerned with the design of a page, of course you will create css rules for classes and ID's.  
- when you start to have lots of divs you generally will start to have lots of classes and ID's.
- the syntax is:
- For a class:
``` .goofy {```
(where goofy is the class attribute of some HTML tags in your HTML - <div class="goofy">)
- For an ID:
```#goofy {```
(where goofy is the ID attribute of some HTML tag in your HTML - <section ID="goofy">)

### A Note About Pseudoclasses
- This one might drive you mad.  You can target elements which are a specific state.
- Ex: ```a:hover```  would identify a rule for when the mouse hovers over a link.
- Ex: ```a:active``` would select all the links which are active.
- Ex: ```a:visited``` would select all the links which are visited.
- If something doesn't behave as expected, it could be because there is a rule targetting its specific state.
- Use the inspector developer tool to idenitfy what rule is being applied.

### Setting up a Stylesheet
- add a link to the stylesheet in the head of your HTMl
- save the stylesheet in your project folder (big projects use a styles folder)
- use the selectors to change an obvious attribute to test the connection.

### More Info
- Article called ["The 30 CSS Selectors You Must Memorize"](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) (I say just keep the article handy).
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS), specifically the [Selectors Reference Page](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors)
