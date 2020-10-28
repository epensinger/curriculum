# Lesson 1 Intro to Functions
## Objectives
- Define a Function
- Call A function


----

## Key Syntaxes
```javascript
function funcName(){
    //do something
}

funcName();
```


----

## Lesson Outline


----

## What is a Function?
- Functions are reusable procedures
- Functions allow us to write reusable modular code
- We define a chunk of code that we can execute at any point in our program
- Functions add flexibility and DRY -er code
**We use functions all the time**


----

# Function Example
```javascript
//Roll a die
let die1 = Math.floor(Math.random() * 6 + 1);
//Roll two dice
let die1 = Math.floor(Math.random() * 6 + 1);
let die2 = Math.floor(Math.random() * 6 + 1);
//Roll 6 dice
//a better way: 
let die1 = rollDie(6);
```


----

## How to Use a Function
1. ### Define
2. ### Run
(or try to run, get error, then define it)

---


## How to Define a Function
```javascript
function funcName() {
    //do things
};
```


---

## Example Definition
```javascript
function repellStudent(){
    let status = prompt('have you restarted the browser?');
    if (status == "no"){
        alert("go restart your browser")
    } else {
        status = prompt('Have you turned the device off and back on?')
        if (status == "no"){
            alert("go turn it off and back on");
        } else {
            status = prompt("have you turned it off and let it sit for an hour before turning it back on?")
            if (status == "no"){
                alert("go do that");
            } else {
                alert("go away");
            };
        };
    };
};
```


---

## Example that might actually fit on the screen
```javascript
function repelStudent(){
    console.log("restart the browser");
    console.log("restart the device");
    console.log("go play outside");
}
```


----

## Functions do not run until called!
- check for existence in console.

----

## How to call a function
```javascript
functionName();

repelStudent();
//can call it again
repelStudent();
//must use parentheses
repelStudent;
```


----

## Heart Function Exercise


----





