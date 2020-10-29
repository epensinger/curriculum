# Lesson 4 - More List Methods
- in this lesson you will learn to use a few more helpful list methods and how to extract parts of your lists.


----

## Lesson Outline


----

## Index
- returns the index of the specified item in the list

ex:
```python
numbers = [5, 6, 7, 8, 9, 10]

numbers.index(6) #==> 1
numbers.index(9) #==> 4

names = ['Joe', 'Sharon', 'Steve']

names.index('Joe') #==> 0
names.index('Steve') #==> 2

```


----

## Limit index
- add arguments to limit the start and end of possible indexes

ex:
```python
characters = ['Daffy', 'Elmer', 'Bugs', 'Porky', 'Daffy', 'Bugs', 'Elmer']

#get the index of the first Bugs
characters.index('Bugs')
#get the index of the first Bugs starting at index 3
characters.index('Bugs', 3) #==> 

names = ["Johnny", "Steve", "Johnny", "Steve", "Johnny", "Steve",  "Johnny", "Steve", "Johnny", "Steve", "Johnny" ]

names.index("Johnny", 3, 4)
```


----

## Count
- return the number of times x appears in a list

```python
names = ["Johnny", "Steve", "Johnny", "Steve", "Johnny", "Steve",  "Johnny", "Steve", "Johnny", "Steve", "Johnny" ]

names.count("Johnny")
```


----

## Another count example
```python
numbers = [1, 2, 3, 4, 3, 2, 1, 4, 10, 2]

numbers.count(2) # 3
numbers.count(21) # 0
numbers.count(3) # 2
```


----

## Reverse 
reverse the elements of the list (in-place)

```python
first_list = [1, 2, 3, 4]

first_list.reverse()

print(first_list) # [4, 3, 2, 1]
```


----

## Sort
sort the items in the list (in place)
```python
another_list = [6, 4, 1, 2, 5]

another_list.sort()

print(another_list) # [1, 2, 4, 5, 6]
```


----

## Join
- a string method - takes an iterable argument (like a list)
- concatenates a copy of each string in the iterable object
- the thing you put before .join is what goes between the strings.

```python
words = ['Coding', 'Is', 'Fun!']

' '.join(words) # 'Coding is Fun!'

name = ['Mr', "Steele"]

'. '.join(name) # 'Mr. Steele'
```


----

## Slicing
- make a new list using part of the old list

```python
some_list[start:end:step]
```


----

## The start parameter
what index to start slicing from
```python
first_list = [1, 2, 3, 4]

first_list[1:] # [2, 3, 4]

first_list[3:] # [4]
```


----

## Negative start
starts the slice at the end and works backward

```python
first_list[-1:] # [4]

first_list[-3:] # [2, 3, 4]
``` 


----

## The end parameter
The index to stop at  (not inclusive)
Always after the colon

```python
first_list = [1, 2, 3, 4]

first_list[:2] # [1, 2]

first_list[:4] # [1, 2, 3, 4]

first_list[1:3] # [2, 3]
```


----

## Negative End
will stop that many before the end
```python
first_list[:-1] # [1, 2, 3]

first_list[1:-1] # [2, 3]
```


----

## Step Parameter
step is the number to count by
if empty will count by one
2 would take every other, 3 every third, and so on.

```python
first_list = [1, 2, 3, 4, 5, 6]

first_list[1::2] # [2, 4, 6]

first_list[::2] # [1, 3, 5]
```


----


## Negative Step
reverse the order
```python
first_list[1::-1] # [2, 1]

first_list[:1:-1] # [6, 5, 4, 3]

first_list[2::-1] # [3, 2, 1]
```


----

## Slicing Tricks
### reversing lists (or strings)

```python
string = "This is fun!"

string[::-1]
```


----

### modifying portions of lists
```python
numbers = [1, 2, 3, 4, 5]
numbers[1:3] = ['a','b','c']

print(a) # [1, 'a', 'b', 'c', 4, 5]
```


----







