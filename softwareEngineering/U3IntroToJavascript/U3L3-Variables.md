# Variables
In this lesson you will learn how to declare and use variables in Javascript


-----

## Lesson Goals
- Use var to define variables
- Use let and const to define variables
- Use camelCase to label variables
- Understand the role of Null and Undefined as stored in variables


----

## Key Terms to pay attention to
- variable


----

## Key syntaxes
- var
- let
- const
- null
- undefined


----

## Lesson Outline


----

### Storing Data in Javascript
- Data is stored in containers called variables so we can use it throughout our code.
- Official definition: in computer programming, a variable is a storage location paired with an associated symbolic name (an identifier) which contains a value. 


----

### Variables in Action
```javascript
let name = prompt('What is your name?');

if (name === 'Adam') {
  alert('Hello Adam, nice to see you!');
} else if (name === 'Alan') {
  alert('Hello Alan, nice to see you!');
} else if (name === 'Bella') {
  alert('Hello Bella, nice to see you!');
} else if (name === 'Bianca') {
  alert('Hello Bianca, nice to see you!');
} else if (name === 'Chris') {
  alert('Hello Chris, nice to see you!');
}
```


----

### A more complex example
```html
<!--in the HTML file-->
<button>Press me</button>
```
```javascript
//in the Javascript file
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
```


----

### Kinds of Variables
- Declare the variable using a keyword and the variable name

```javascript
let name;
var address;
```
- can also declare in an assignment statement

```javascript:
let name = "Johnny";
var address = "johnny@gmail.com";
const IDnum = "058305";
``` 
- Three options in JS - var, let, const.


----

### Javascript History Lesson
- 1997 - Javascript created
- 2015 - Let & Const introduced - ECMAScript 6; aka Javascript 6
    - Javascript is technically ECMAScript as implemented by browsers (copyrights and legalese)
- There's now up to ECMAScript 10, but...
- ALL browsers can go up to 5.  
- BIG change in version 6 - introduced let and const
- All browsers accept var, MOST browsers accept let and const.
- Older code definitely only has var.


----

### Differentiating between var, let, const
#### 2 Big differences:
1. What's the scope?
2. How is it initialized?
    - initialization - the program makes space in memory for that variable.
3. To what extent can you cange it?


----

#### Var
1.  Scope is the "current execution context" either the whole function or the whole program - "global scope"
2.  Var is initialized when the program starts and is set to undefined if no value given.
    - if you try to use the variable before a value has been assigned it will return undefined rather than throwing an error
3.  You can redeclare and reassign it whenever you like.
    - score += 5.


----

#### Let
1.  Scope is the current code block and any sub-blocks- "block scope"
    - block - code set off in curly braces; sub-block - any blocks that are within that scope - a nested if statement for example.
    - if you declare it outside of a block it will scope to the whole program.
2.  Let is initialized when the program starts, will throw a reference error if no value given.
    - if you declare it inside a block, then try to use it outside a block it will throw an error.
3.  You can reassign it, but not redeclare it within it's scope.
    - score += 5 works, but once I said let score = 5, I can't say let score = 5 again - __in that scope__


----

#### Const
1.  Scope is the current code block and any sub-blocks - "block scope"
    - just like let
2.  Initialized when the program starts and must have a value at that time.
    - because you can't reassign it, it will be what it is.
3.  Cannot be reassigned or redeclared.
    - not a good way to store values that will change.
    - often used for libraries that you import into the program as JS objects
    - you may forget this exists before you use it.


----

#### General Usage Guidelines
- Use const any time you can
- Use let if you can't use const
- Use var if you can't use let, but you can usually come up with a way to use let


----

### The reality
- Lots of JS still uses var
- Lots of the examples I have in this course still use var
- You will see let and const and var and need to be comfortable with all of them.
- Ms. Pensinger's executive decision:
    - if the program works in the way we want, we aren't going to sweat whether we used let or var or const.


----

### Using Variables
- Step 1 - Declare it

```javascript
let name;
```
- Step 2 - Assign it

```javascript
name = "Fluffy";
```
- Step 1/2 (most common) - declare and assign it at once

```javascript
let name = "Fluffy";
let age = 2;
```


----

- Step 3 - Use it

```javascript
console.log("Hello " + name);
age += 1;
if (age >= 3) {
    console.log("Who's a big girl?");
} else if (age < 1) {
    console.log("What a cute little baby!");
} else {
    console.log("Are you a good kitty?");
};
```


----

### Naming Variables
- You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.
- Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
- Don't use numbers at the start of variables. This isn't allowed and causes an error.
- A safe convention to stick to is so-called "lower camel case", where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. 
- Make variable names intuitive, so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
- Variables are case sensitive — so myage is a different variable from myAge.
- One last point: you also need to avoid using JavaScript reserved words as your variable names — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like var, function, let, and for as variable names. Browsers recognize them as different code items, and so you'll get errors.  If it turns a weird color, that's a good indicator you can't use it as a variable name.
- (From MDN variables page)


----

### Examples of good variable names
```javascript
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```


----

### Examples of bad variable names
```javascript
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```


----

### Nullish Values
- Nullish is a word which covers both undefined and null values

#### Undefined
- declared by never set to a value
- not possible for const
- You can test for this and attempt to rectify the situation without having the program throw an error.
#### Null
- Explicitly empty, nothingness
- Again, something you can test for to make decisions.

```javascript
currentPlayer = null; //the player died.  there is no current player
```


----


### Variables Exercise
### Variables Quiz


----

### Further Reading
- [MDN Variables Article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [MDN Var Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN Let Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Const Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN Null Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN Undefined Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)