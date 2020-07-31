# Converting Data Types
In this lesson you will learn how to proceed when you want to put different data types together or change the type of a variable.

## Lesson Goals
- Use f-strings to add variables of various types to strings.
- Use type functions to change the type of variables.
- Create a program to convert from one unit of measurement to another.

## Key Terms to pay attention to
- f-strings
- string interpolation

## Key syntaxes
- f({})(x)
- int()
- float()
- str()

## Lesson Activites
- f-strings demo
- f-strings exercise
- conversions demo
- mileage converter code along
- converter project (whoohoo!  first project!)

## Lesson Outline

### F-strings
- String Interpolation - inserting data of different types into strings without changing the type of the original data

```python
score = 0
score += 10
msg = "you scored " + score + " points!"
pring(msg) # ==> ERROR
```

- F-strings perform string interpolation in python 3.6 and up (repl is on 3.8)

```python
score = 0
score += 10
msg = f "you scored {score} points!"
print(msg) # ==> you scored 10 points!
```

- fyi, format method used in python 3.5 and below.

```python
score = 0
score += 10
msg = "you scored {} points!".format(score)
print(msg) # ==> you scored 10 points!
```

### String interpolation coding exercise

### Converting data types
- type functions allow you to convert the type of a variable
- this is why you should not ever use data types as variable names!
- int() - converts the data to an integer (throws an error if not a number)

```python
x = 10.2
int(x)  # ==> 10
y = "15"
int(y) # ==> 15
oops = "three"
int(oops) # ==> ERROR
```

- str() - converts the data to a string

```python
x = 10.2
str(x) # ==> "10"
y = 15
str(y) # ==> "15"
oops = "three"
str(oops) # ==> "three"
```

- float() - converts the data to a float

```python
x = 10
float(x)  # ==> 10.0
y = "15"
float(y) # ==> 15.0
oops = "three"
float(oops) # ==> ERROR
```

- type() - returns the type of a variable

```python
x = 10
type(x)  # ==> <class 'int'>
y = "15.0"
type(y) # ==> <class 'float'>
oops = "three"
type(oops) # ==> <class 'str'>
```

### Mileage Converter Code Along
- we will make a python program to convert km to miles.
- you will learn to get user input in this code along!

### Converter Project
- you will use what you learned from the code along to make a program to convert between different units.

### Unit 3 Quiz