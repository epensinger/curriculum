# L4 - Methods
In this lesson we will take a look at some built in Javascript methods and learn how to use them.

## Lesson Goals
- Display messages using both console.log() and alert()
- Get input from a user using prompt()
- Write a separate JS file and attach it to your HTML file

## Key Terms to pay attention to
- alert
- console.log
- prompt

## Lesson Outline
### What is a Method?
- a method is a function which is a property of an object
- specifically we are talking about built-in methods
- a built in method is some code that comes with Javascript that I can call on and run with one command.
- the syntax for a method is to write the name of the method, then give it some more information in parenthesis.

### Alert Method
- alert() - will display whatever is in parenthesis in an alert window when run.
```javascript
alert("Welcome to my page, new friend!")
alert("Hi, there, you have to click me!")
alert("Don't you want to sign up for my newsletter?")
alert("I promise I won't sell your email address unless I really need money")
alert("Your interwebs seem broken!  Pay me money and I'll fix it for you!")
```

### Console.log method
- console.log() - will log information to the console when this line of code is run
- super helpful for developers - prints information that users don't notice.
```javascript
if err {
    console.log(err)
};

if (score >= 100){
    console.log("Score actually did reach 100");
};

if (user == undefined){
    console.log("user is undefined");
};
```

### Prompt method
- prompt() - like alert, will display what's in parenthesis in an alert window, but will also collect user input.
```javascript
let user = prompt("Hi what's your name?");
let age = prompt("How old are you?");
let favoriteColor = prompt("What's your favorite color?")
```

### Linking a JS and HTML File
- make HTML File
- make new file w/ .js filetype
- add
```html
 <script src = "file.js"></script>
```
- best practice is to add JS file right before closing body tag.

### JS Stalker Exercise

### Age Calculator Exercise