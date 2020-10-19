# Lesson 3 - List Methods
- In this lesson you will learn to use list methods to modify your lists.

# Lesson Goals
- Use list methods to add and remove items from your lists.
- Select the apropriate method for the task


----

# Key Syntaxes
```python
my_list.append('new_thing')
my_list.extend('new_thing1', 'new_thing2', 'new_thing3')
my_list.insert(index, 'new_thing')
my_list.clear()
my_list.pop()
my_list.remove("new_thing")
```


----

# List Methods
- list methods are a kind of function that is attached to an object
- they work specifically with a certain type of object
- b/c they are functions, they require (), but they are attached to the object with a .


----

# Append
- add one item to the end of the list

```python
my_list.append("new_thing")
#if passed a list, will nest the list inside the list
my_list = [1, 2, 3]
my_list.append([4, 5, 6]) #==> my_list is now [1,2,3,[4,5,6]]
my_list[3] #==> [4,5,6]
```


# Extend
- add multiple things to the end of the list

```python
my_list = [1,2,3]
my_list.extend([4,5,6])
my_list #==> [1,2,3,4,5,6]
my_list[3] #==> 4
```


----

# Insert
- inserts an item at a specified index
- any items at or after the specified index go up one in index

```python
my_list.insert(2, "hi") #inserts hi at index 2

my_list.insert(-1, "bye") #inserts by BEFORE the last item
```


----

# Exercises List Methods 1


# Clear
- remove all items from the list
- nothing to put in the parenthesis

```python
my_list.clear()
```

- why?  empty a shopping cart, reset something when user dies or at a new level


----

# Pop
- Remove the item at a given position and return it
- If no index is specified, remove & return the last item in the list

```python
last_item = my_list.pop()
third_toy = my_toys.pop(2)
#don't have to store in variable
my_toys.pop()
```


----

# Remove
- Remove the first item in a list whose value matches a given value
- Does not return the value (but you know it, so)
- Throws a value error if the item is not found
```python
my_list = [1,2,3,4,4,4,5]
my_list.remove(2) #==> removes 2 from my list
my_list.remove(2) #==> throws value error because 2 is now gone from my_list
my_list.remove(4) #==> removes the first 4 from the list
my_list.remove(4) #==> removes the second 4 from the list
```



----

# Exercises - List Methods 2
# List Quiz


----




