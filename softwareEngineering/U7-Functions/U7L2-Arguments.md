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
