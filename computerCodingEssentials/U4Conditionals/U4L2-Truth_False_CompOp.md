# Lesson 2 - Truthiness, Falsiness, and Comparison Operators
In this lesson we will meet some values that are inherently truthy or falsey and we'll take a look at the operators that we can use to compare values.


----

## Lesson Goals
- Identify common truthy and falsey values
- Use comparison operators to write conditional checks


----

## Key Terms to pay attention to
- truthiness 
- falsiness

## Key syntaxes
- ```==```
- ```!=```
- ```>```
- ```<```
- ```>=```
- ```>=```


----

## Lesson Outline
### Truthiness
- Some values are inherently truthy
- to test truthiness in the interpreter:

```python
name = "Lisa"
if name:
    print("Truthy")
else: 
    print("Falsey")
```


----

### What is truthy?
- Strings that aren't empty
- Numbers that aren't zero
- Most values


----

### Falsiness
- Some values are inherently falsey

```python
score = 0
if score:
    print("Truthy")
else: 
    print("Falsey")
```


----

### What is falsey?
- Empty Objects
- Empty Strings
- None
- 0


----

### The value of Truthy and Falsey
- Really helpful in determining if the user entered any value at all.
- prevents you from an error if the string is empty

```python
animal = input("enter your favorite animal")

if animal:
    print(animal + " is my favorite too!")
else:
	print("YOU DIDNT SAY ANYTHING!")
```


----

### Comparison Operators

| Operator | What it does                                  | Example | Result if X = 1 and Y = 1 | Result if X = 1 and Y = 2 |
|------------|------------------------------------------------------------|------------|------------------------------------|------------------------------------|
| ==       | Truthy if X has the same value as Y           | X == Y  | True                      | False                     |
| !=       | Truthy if X does not have the same value as Y | X!=Y    | False                     | True                      |
| >        | Truthy if X is greater than Y                 | X > Y   | False                     | False                     |
| <        | Truthy if X is less than Y                    | X < Y   | False                     | True                      |
| >=       | Truthy if X is greater than or equal to Y     | X >= Y  | True                      | False                     |
| <=       | Truthy if X is less than or equal to Y        | X <= Y  | True                      | True                      |


----

### Comparison Operators Example
```python
age = input("How old are you?")
age = int(age)

if age >= 16:
    print("Please drive safely.")
else:
    print("You need a driver.")

if age >= 25:
    print("Please drive a kid.")
else:
    print("You may not drive a kid.")

if age <= 5:
    print("You need a carseat")
else:
    print("Please buckle up!")
```


----

### Alien Score Exercise

### Life Stages Exercise

