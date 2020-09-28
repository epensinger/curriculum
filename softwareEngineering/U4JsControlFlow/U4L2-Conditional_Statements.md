# Lesson 2 - Conditional Statements
In this lesson you will learn to apply the boolean logic you learned in the last lesson to control the flow of your programs.  You will learn how to write one, two, and multi- part conditional statements in javascript.


----

## Learning Goals
- Apply boolean logic to single part conditional statements
- Apply boolean logic to two part conditional statements
- Apply boolean logic to multi part conditional statements


----

## Key Syntax
```javascript
if (boolean expression){
    //execute this code;
} else if (boolean expression) {
    //execute this code;
} else {
    //execute this code;
};
```


----

## Lesson Outline


----

### Conditional Statements
- Allow for a variety of outcomes based on a choice that must be made
- Example:
- Outcome: Player wins or player loses
- Options: 
    - player guessed the right number
    - player guessed the wrong number
    - player didn't guess anything at all
- A good program has a plan to handle all possible options


----

### Single Part Conditional Statement
```javascript
if (submitted){
    alert("Your submission was successful!")
};
```
- not very common, but it does work
- the alert will only show if the boolean expression is truthy


----

### 2-Part Conditional Statement
```javascript
if (submitted){
  alert("Submission Successful");
} else {
  alert("Something went wrong, please resubmit");
};
```
- if the first boolean is truthy, the code under else will not run.
- if the first boolean is falsey, the code under else will run.


----

### Multi-Part Conditional Statement
```javascript
if (guess == 23){
  console.log("That's my number!  You win!");
} else if (guess > 23){
  console.log("Sorry, your guess is too high");
} else if (guess < 23){
  console.log("Sorry, your guess is too low");
} else {
  console.log("hmm. Something went wrong");
};
```
- this will evaluate each boolean expression until it finds one that is truthy
- it will run without an else, but the else is often useful for error checking at least.


----

# And now for the exercises!



