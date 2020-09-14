# Lesson 1 - Introduction to Conditionals
In this unit you will learn what conditional statements are and explore some conditional tests.  But before that we will take another look at getting User Input.
## Lesson Goals
- write code to get user input
- identify the parts of a conditional statement
- write a program using conditional checks

---

## Key Terms to pay attention to
- conditional
- boolean 

---

## Key syntaxes
```python
if condition is True: 
    run this code
elif another condition is True:
    run this code
else:
    run this code
```

---

## Lesson Outline
### User Input
- there is a built in function ```input()``` that will prompt the user for input
- be sure to store the result in a variable :)
```python
name = input("Enter your name here:")

#for a two-line approach:
print("Enter your name here:")
name = input()
```

---

### User Input Example
```python
data = input("What's your favorite color?")
print("You said " + data)

print("What's your favorite color?")
data = input()
print("You said " + data)
```

---

### User Input Exercise

---

### Intro to Conditionals
- conditionals let us make decisions based on whether things are true or false
- allows our program to take multiple paths to achieve different outcomes

---

### Conditional Statement
- conditional logic using if statements to represent different paths a program can take based on some type of comparison of inputs.
- pseudocode - using plain english to plan or demonstrate logic
```python
Conditonal Statement in Pseudocode
if some condition is True:
    do this
otherwise if some other condition is True: #optional or could have many
    do this
otherwise
    do this
```
---

### Conditonal Checks
- determine whether something is true or false
```python
if name == "Mario" :
    print("Save the Princess!")
elif name == "Link":
    print("Rescue Zelda!")
else: 
    print("Move along")
```

---

### If Statement Syntax
```python
# Equals Equals means is equal to
if name == "Mario" :
# Code to be executed if condition is true is indented one time
    print("Save the Princess!")
# elif means else if and will only execute if previous conditions are false
elif name == "Link" :
    print("Rescue Zelda!")
# The colon at the end of each conditional check is essential
else:
    print("Move along")
```
---

### Multiple if Statements Example
```python
color = input("What's your favorite color?")
if color == 'blue':
	print("excellent choice!")
elif color == 'teal':
    print("not bad!")
elif color == 'seafoam':
    print("mediocre")
elif color == 'pure darkness':
    print("well, that's dark")
else: 
	print("WHY!!!!!") 
```

---

### Coding Exercise - Lucky Number 7
