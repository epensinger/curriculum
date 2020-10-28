# Lesson 2 Arguments


----

## Key Syntax
```javascript
my_function(argument); //function call with argument

fuction my_function(arg) {
    hi(arg)
}
```


----

## Lesson Outline


----


### Arguments
- without inputs our functions do the same thing every time
- use arguments to pass inputs to functions so they can use that info to control what they pass out.


----

### Math Class Alert

f(x) = 2x

| Input | Relationship | Output |
|-------|--------------|--------|
| 2     | *2           | 4      |
| 4     | *2           | 8      |
| 10    | *2           | 20     |


----

### Javascript version
```javascript
function doubler(x) {
    console.log(x*2)
}
```


----

## Another example and a string template literal
```javascript
function greet(person) {
    console.log('Hello there, ${person}!')
}
```

The ${variable here}  is a way of inserting a variable into a string.  It's called a string template literal.

```javascript
//call the function
greet("Elmer Fudd")
greet("Daffy Duck")
greet("Bugs Bunny")
```


----

## What if I don't?
- if you try to pass an argument to a function that doesn't want it, the function just runs and ignores it.
- if you don't pass an argument that it was expecting, it uses undefined for that value and runs normally.


----

----

## Arguments Exercises 1


----

### Functions with Multiple Arguments
- to pass multiple arguments to a function, add them one after another with commas between.
- the ORDER is what determines which is which


----

### Mutliple Args example
```javascript
function rect_area(length, width) {
    console.log(length*width;
};

rect_area(5, 10);
```

```javascript
function greet(first, last) {
    console.log("Welcome Mr. ${last}, how are you today ${first}");
}

greet("Elmer", "Fudd");
greet("Buggs", "Bunny");
greet("Daffy", "Duck");
```


----

## Multiple Arguments exercise

