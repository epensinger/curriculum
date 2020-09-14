# Lesson 1 - Environment and Setup
In this lesson we will take a look at the environment we will use to add javascript files to our work.  We will learn what a Javascript console is and how to use it.

## Lesson Goals
- Set up a front end environment in Repl.it
- Use the JS console in Google Chrome
- Use MDN as a reference for Javascript

## Key Terms to pay attention to
- console

## Key syntaxes
- 

## Lesson Outline
### Set up front end environment in Repl.it
- Make sure you have followed the instructions to join this class in Repl.it.
- Open a new repl - html/css/js -- this is a front end environment.
- Preview the repl in Google Chrome.

---

- #### Why repl?
    - sometimes JS can get messed up when running local files in a browser
    - allows you to submit a Repl with HTML, CSS, and JS all together.
    - uniformity
    - you may absolutely write files anywhere you like and load them into repl.  That's not super efficient, but acceptable.
    - repl allows me to embed JS exercises in Canvas for easy feedback.

---

### The Chrome Javascript Console
- The JS console does 2 things
    - Log information related to JS processes on a web page
    - Allows you to run JS in the web browser, interacting with the page, or just running JS.
- [Digital Ocean's JS Console tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console) gives a nice overview of what the Javascript Console is, how it works on different browsers (with pics) and some things to try out in the developer console.
- The JS Console resets when the page is reloaded.  
- useful for experimenting and debugging, not for interacting with users or actual programs.

--- 

- #### Interacting with a webpage
    - example - visit any webpage and type in the following into the console:
    ```javascript
    document.body.style.border = "25px solid pink";
    document.body.innerHTML = "<h1>I'm sorry, this page has been hacked</h1>";
    ```
    - notice what happens to the source page, then reload the page.
    - This is why my first sentence is "try reloading the page".

---

- #### Logging Information
    - Use console.log to print information that would track the process of the JS file.
    - Ex:
    ```javascript
    console.log("The JS file loaded")
    console.log("The if statement on line 5 was false")
    ```

---

### MDN as a reference for JS
- [MDN Javascript Tutorials](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [MDN Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

---

### A Word about everythingJS
- VueJS, ReactJS, PaperJS, AngularJS, jQuery, revealJS, so many JS's
- Some of these are frameworks, others are libraries, all refer to using code that was written by someone else (teams of someones actually).  Much like you used Bootstrap.
- A framework is a way of putting together a program using specific tools in specific ways.
- A library is a set of code that you pull into your project as you like.
- None of these are new languages, they are shortcuts for performing common tasks in specific applications.
- We will be using Mongoose and Express in our backend work.  We will not be using a Front end framework - Angular, React, and Vue are the big three of those.  You can add them to your stack later if you like.