# Lesson 6 Nested Lists
In this lesson you will learn how to put lists inside of lists, and get stuff out of them.


----

## Lesson Outline


----

### Nested Lists
- nested Lists are just lists inside other lists

```python
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```


----

### WHYYYYY???
- complex data structures like matrices
- Game Boards / Mazes
- Rows and Columns for visualizations, tabulation and grouping data
- a way of showing tables in code
- ex: a list of playlists - list of a list of songs


----

###  Access Nested Lists
```python
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
nested_list[0][1] # 2
nested_list[1][-1] # 6
```


----

### Iterating through Nested Lists
```python
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for list in nested_list:
    for val in list:
        print(val)
```


----

### Nested List Comprehension
```python
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

[[print(val) for val in list] for list in nested_list]

# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
```


----

### Another Example
```python
board = [[num for num in range(1,4)] for val in range(1,4)]

print(board) # [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

[["X" if num % 2 != 0 else "O" for num in range(1,4)] for val in range(1,4)]

# [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']]
```


----

### Nested List Exercises

----


### Swapping Values
```python
names = ["James", "Michelle"]
names[0], names[1] = names[1], names[0]
print(names) # ['Michelle', 'James']
```


----

### When do we swap
- shuffling
- sorting
- algorithms


----

## List Recap
- lists are fundamental data structures for ordered information
-lists can be include any type, even other lists!
- we can modify lists using a variety of methods
- slices are quite useful when making copies of lists