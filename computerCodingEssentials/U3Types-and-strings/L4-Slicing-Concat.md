# Slicing and Concatenating Strings
In this lesson you will learn how to take strings apart and put them together.
## Lesson Goals
- Use the string index to access parts of strings
- Slice strings
- Concatenate strings

## Key Terms to pay attention to
- concatenation
- string index
- slice

## Key syntaxes
- [:]

## Lesson Activites
- String Index Demo
- String Index Quiz
- String slicing Demo
- String slicing exercise
- String concatenation Demo
- String concatenation exercise

## Lesson Outline

### String Index
- every character in a string has an index, starting at 0
- use the index to access single characters in a string
- you can also count from the end of the string using negative numbers

 h | e | l | l | o 
 --- | --- | --- | --- | ---
 0 | 1 | 2 | 3 | 4 
 -5 | -4 | -3 | -2 | -1 

 a | h | o | y |  | t | h | e | r | e 
 --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
 -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 

- to use the index put it in brackets after the variable name

```python
    last_name = "Potter"
    last_initial = last_name[0]
```

### String Length
- Python has a built in function to find the length of strings
- the last index equals the length minus 1.

```python
    msg = "Algebra is fun"
    msg_length = len(msg)
```

### String Index Quiz

### String Slicing
- Slicing means getting a portion of a string
- Use the index to indicate which characters you want
- Use the first number to indicate the first character, then a colon.
- The second number is the stop index, it will take the characters before that index

```python
    course = "Algebra"
    fist_3 = course[0:3] 
```
```python
    title = "Very long string of words that no one has time to read"
    short_title = title[0:15]
```

### String Slicing Exercise

### String Concatenation
- concatenation - combining two or more strings together
- in python, simply put them together with +

```python
    first, last = "John", "Smith"
    name = first + last
    print(name)
    print("Hello student" + last)
```
- use += when adding something to a variable

```python
    song = "twinkle"
    print(song)
    song += song
    print(song)
    song += "little"
    pring(song)
    song += "star"
    print(song)
```

### String Concatenation Exercise