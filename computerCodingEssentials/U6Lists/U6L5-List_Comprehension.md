# Lesson 5 - List Comprehension
In this lesson you will learn some python magic for making lists.

----

## Key Syntax

```python
[___ for ___ in ___]
```


----

##Lesson Outline


----

#### List Comprehension
- syntax that allows us to make new lists and make new list 
- make direct copies of other lists
- make modified copies of other lists
- comprehension is used for lots of complex data types and it's unique to python


----

### List Comprehension Syntax
- [____ for ____ in ______]
- start with a for loop: for num in nums
- add something to do in front of the for

```python
nums = [1, 2, 3]
new_nums = [num *10 for num in nums]
print(new_nums) #==> [10, 20, 30]
```


----

### List Comp vs. Looping
```python
#for loop
numbers = [1, 2, 3, 4, 5]
doubled_numbers = []

for num in numbers:
    doubled_number = num * 2
    doubled_numbers.append(doubled_number)

print(doubled_numbers) # [2, 4, 6, 8, 10]

#List comprehension
numbers = [1, 2, 3, 4, 5]

doubled_numbers = [num * 2 for num in numbers]

print(doubled_numbers) # [2, 4, 6, 8, 10]
```


----

### List Comp Examples
```python
name = 'colt'
big_name = [char.upper() for char in name] # ['C', 'O', 'L', 'T']


friends = ['ashley', 'matt', 'michael']
new_friends = [friend[0].upper() for friend in friends] # ['Ashley', 'Matt', 'Michael']
```


----

### More Examples
```python
[num*10 for num in range(1,6)] # [10, 20, 30, 40, 50]

[bool(val) for val in [0, [], '']] # [False, False, False]

numbers = [1, 2, 3, 4, 5]
string_list = [str(num) for num in numbers]
print(string_list) # ['1', '2', '3', '4', '5']
```


----

### List Comp with Conditional Logic
```python
numbers = [1, 2, 3, 4, 5, 6]
evens = [num for num in numbers if num % 2 == 0]
odds = [num for num in numbers if num % 2 != 0]


[num*2 if num % 2 == 0 else num/2 for num in numbers] 
# [0.5, 4, 1.5, 8, 2.5, 12]

with_vowels = "This is so much fun!"
''.join(char for char in with_vowels if char not in "aeiou")
# "Ths s s mch fn!"
```


----

### List Comprehension Exercises


----




