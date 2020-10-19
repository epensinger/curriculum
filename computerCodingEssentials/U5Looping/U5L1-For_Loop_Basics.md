# The Basics of for Loops
## Lesson Goals
- use a for loop to iterate over the letters in a string
- use a range to generate a sequence of numbers
- use a for loop to iterate over the numbers in a range


----

## Key Terms
- iterate
- iterable object
- iterator


----

## Syntaxes
- for x in y


----


## Lesson Outline


----

## Intro to a for loop
- we have a collection of data - list, string, range
- for every item in that list we will do something


----

## Syntax
- for items in iterable_object:
    do this code


----

## Components
- iterable object - some kind of collection of items
    - a list of numbers
    - a string of characters
    - a range of numbers
- items is a variable to represent the current position of the iterator within the iterable object
- for tells python to iterate over every item in the collection, and then throw the item variable away when it reaches the end of the collection.
- use the item variable to use the current item in the for loop


----

## Pseudocode Example
```python
for plate in plate_rack:
    pick up plate
    dust plate
    dust rack
    put plate back
```


----

## Pseudocode Example
```python
for desk in classroom:
    walk to desk
    spray cleaner on desk
    wipe down desk
```


----

## Pseudocode Example
```python
for num in range(0,10):
    lift weight to shoulder
    lower weight to side
    say num
```


----

## Python Example
```python
for letter in "coffee":
    print(letter * 10)
```


----

## Simple for loop exercises


----

## Ranges
- range - a way of generating numbers from a start to a stop
    - range(1, 10)
        - start at 1, stop at 10
        - 1, 2, 3, 4, 5, 6, 7, 8, 9, STOP


----

## Range in for Loop
- use a range to set how many times the for loop should repeat
```python
for number in range(1, 8):
    print(number)
```


----

## Range Loop Examples
```python
for number in range(1,11):
    print(number)
    print(number * number)

for number in range(1,20):
    print(str(number) + "I will not talk in class")
```


----

## More on Ranges
- Ranges are typically only used in for loops
- Ranges are a simple way of generating a sequence of numbers
- A range is a slice of the number line (math class?)
- A range does not include the last number (it stops at that number and doesn't run the loop again)


----

### Range Syntaxes
- range(7) - 0 is the assumed start point, lists numbers from 0 through 6
- range(1, 8) - starts at 1, last number will be 7.
- range(1, 10, 2) - third number is a step - in this case count by 2's.
- range(7, 0, -1) - negative step will count backwards - in this case from 7 to 0.


----

### Ranges Quiz

### Ranges and for Loop Exercises

