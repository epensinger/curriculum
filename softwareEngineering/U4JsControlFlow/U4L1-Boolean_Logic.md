# Boolean Logic
In this lesson you will learn to use bulean logic to control the flow of your program according to the current state of the program.


----

## Lesson Goals
- Identify Truthy and Falsey values
- Use comparison operators to write conditional statements.
- Use logical operators to create complex conditional statements.


----

## Key Terms to pay attention to
- boolean
- comparison operators
- logical operators


----

## Lesson Outline
### Boolean Logic
- Everything starts with the idea that a statement is either True or False
- Then we can combine those initial statements to create more complex statements that also evaluate to True or False




----

### Truthy and Falsey Values
- Values that aren't explicity true or false are inherently truthy or falsey when evaluated in a boolean context.
#### Falsey Values:
- false, 0, "" (empty strings), null, undefined, NaN (not a number)
- Everything else is truthy.


----

### Truthy & Falsey Example
```javascript
let name = "";
if age {
    console.log(age)
} else {
    console.log("there is no name")
}
```


----

### Not
- an exclamation mark means not.
- it's the opposite of whatever you see.

```javascript
let cat = "fluffy"

if !cat {
    console.log("there's no cat here!")
}
```


----


### Equality Operators in Javascript
```javascript
let x = 99; // x is a number

x == "99"  // this is true

x === "99" // this is false

let y = null;

y == undefined //true

y === undefined //false
```

== performs *type coercion* - it forces both to be the same type if possible
=== tests to see if both are the same type


----

### A few interesting cases
```javascript
true == 1    //==> true  
false == 0   //==> true

true === 1 //==> false
false === 0 //==> false  

// booleans are stored as 0 and 1!

NaN == NaN //==> false - it's not a value!  Weird.
```


----

### Equality Operators mini Quiz
It's important to make sure you don't skip over the difference here!


----

### Comparison Operators
- assume x = 5

| Operator |              Name             |   Example  | Result |
|:--------:|:-----------------------------:|:----------:|:------:|
|     >    |          Greater than         |   x > 10   |  false |
|    >=    |    Greater than or equal to   |   x >= 5   |  true  |
|     <    |           Less than           |   x <-50   |  false |
|    <=    |     Less than or equal to     |  x <= 100  |  true  |
|    ==    |            Equal to           |  x == "5"  |  true  |
|    !=    |          Not equal to         |  x != "b"  |  true  |
|    ===   |      Equal value and type     |  x === "5" |  false |
|   !===   | Not equal value or equal type | X !=== "5" |  true  |


----


### Comparison Operators Quiz
If you are getting these mixed up you will struggle later.
Let's make sure we know where we stand now.


----

### Logical Operators
- Logical operators are used to chain together boolean logic to make complex conditional statements
- assume x = 5 and y = 9

| Operator | Name |       Example      | Result |
|:--------:|:----:|:------------------:|:------:|
|    &&    |  And |  x < 10 && X !== 5 |  false |
|   \|\|   |  Or  | y > 9 \|\| x === 5 |  true  |
|     !    |  Not |     !(x === y)     |  true  |


---- 

### Logical Operators specifics
- && - and - if either one is false, the whole thing is false
- || - or - if either statement is true it's true (fyi, this is often refered to as "pipe")
- ! - not - the opposite of whatever comes after (usually in parenthesis)
    - find whatever is in parenthesis first, then flip to the oposite.
- parenthesis are helpful for setting off parts of the equation


----

### Logical Operators example
```
(T || F) && ! (F && T)   // read "true or false and not false and true"
  ( T )    && ! ( F )   // evaluate expressions in parentheses
    T && !F  // read "true and not false"
    T && T  // evaluate not false to true
    T   // true and true evaluates to true :)
```

### Why does she keep saying evaluates to?
That is a fantastic question.  It's because I need to be very careful with my use of the word equals.
True is a value.  expressions are not equal to the value true.
Expressions are truthy - this means they evaluate to true.
I cannot simply replace an expression that happens to be true right now with the word true, next time it may evaluate to false.  So it's not the same thing as the value true.  This is why we say it's truthy and falsey.


----

### Boolean Logic quiz

I know, I know.  Another quiz.  But, if you are mixing up symbols here, you will have a hard time recognizing your error when we move on to conditional statements.

