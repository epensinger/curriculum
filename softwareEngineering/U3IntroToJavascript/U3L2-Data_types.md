# Lesson 2 - Data Types
In this lesson you will be learning about the 5 primitive data types - the most basic ways data can be described in Javascript.  We'll also begin working with the most common types - strings and numbers.

---

## Lesson Goals
- Introduce the 5 primitive data types
- Work with numbers and numeric operators
- Work with strings and common string methods
- Differentiate between "null" and "undefined"

---

## Key Terms to pay attention to
- numbers, strings, boolean, undefined, null 
- modulo
- concatenation

---

## Key syntaxes
- ``` + , - , * , / , %```
- ```""```
- ```string.length ```

---

## Lesson Outline
### Primitive Data Types
- Numbers
- Strings
- Booleans
- Null
- Undefined

---

### Examples:
```javascript
//Numbers:
4
9.3
-10

//Strings:
"Hello World"
"37409"
```

---

```javascript
//Booleans:
true
false

//null:
null
//undefined:
undefined
```

---

### Type Matching mini quiz

---

### Numbers
- JS doesn't care whether positive or negative, whole or fraction.
- Mathematical Operators:
```javascript
//add:
5 + 4

//subtract:
20.89 - 3.45

//Multiply:
5 * 3

//Divide:
5 / 7
```

---

### Modulo Operator
- common to many programming languages
- "remainder operator" - performs division but returns the remainder
```javascript
10 % 3 //--> 1
24 % 2 //--> 0
15 % 11 //--> 4
```

- ps.  Javascript follows the PEMDAS order of operations from math class.

---

### Math Operators mini quiz

---

### Strings
- an ordered sequence of characters
```javascript
//Single or Double quotes work
"hello world"
'hello world'
"hello world' //-->error!"

//Use quotes strategically
'He said, "I love pizza"'
"I can't get it"

//Use escape characters:
"He said, \"I can't!\""
'He said, "She\'s my friend"'
```
[Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/string)
[Cool tool to test with](https://www.freeformatter.com/javascript-escape.html)

---

### String Exercise 1

---

### String Concatenation
- combine strings using +
```javascript
"charlie" + "brown" //--> charliebrown
"charlie " + "brown" //--> charlie brown
"Welcome " + "Charlie" + ", we are glad you are here." 
//--> "Welcome Charlie, we are glad you are here.
```
---

### String Concatenation exercise

---

### String Length and Index
```javascript
//Get the length of a string
"hello world".length //--> 11
"I like cats".length //--> 11

//Use the index to find a specific character
"hello"[0] //--> "h"
"hello"[1] //--> "e"
"hello"[2] //--> "l"
"hello"[3] //--> "l"
"hello"[4] //--> "o"

"hello"[-1] //--> "o"
"hello"[-2] //--> "l"
"hello"[-3] //--> "l"
"hello"[-4] //--> "e"
"hello"[-5] //--> "h"
```
---

### String Length and Index Exercise

---