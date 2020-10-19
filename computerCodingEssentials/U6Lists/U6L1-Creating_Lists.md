# Creating Lists
In this lesson we will learn our first data structure - lists!  We will learn how to create and populate lists and how to access data in our lists.
## Lesson Goals
- Descripbe, create, and access a list data structure

## Key Terms to pay attention to
- List
- Index


----

## Key syntaxes
```python
my_list = [item1, item2, item3]
my_list[0]
my_list[1]
my_list[-1]
```


----


# What is a list
- a list is an ordered collection or grouping of data
- a fundamental data structure for organizing collections of data
- a data structure is a data type that stores data of various types in a structured way


----


# Bring order to data
```python
#disorganized, like a kid's bedroom
toy_1 = "red car"
toy_2 = "dump truck"
shoe_1 = "blue sneaker"
sock_1 = "blue striped sock"

#a list lines everything up in order
on_shelf = ["red car", "dump truck", "blue hat", "green army man", "buzz lightyear"]
under_bed = ["blue sneakers", "red sneakers", "yellow rainboots", "black pinchy shoes"]
```



----


# Another Example
```python
#random strings have no relationship
first_task = "install Python"
second_task = "Learn Python"
third_task = "take a break"

#lists show that strings fit together
tasks = ["install Python", "Learn Python", "take a break"]

#I can also use variables to make my list
tasks = [first_task, second_task, third_task]
```


----


# What can I put in a list?
- strings, numbers - int and float, variables
- lists - you can put lists inside of other lists.
- other data structures we haven't learned yet like dictionaries
- any comma separated values
- you can mix data types! - but you usually won't.


----

# Make a list
- define an empty list ```my_list = []```
- define a list with stuff in it ```my_list = ["thing", "another thing", "something else", "more things"]```
- use the list function ```list()``` to make a list of a range of numbers
for example:
```my_list = list(range(1,10))```


----


# Creating Lists Exercise


----

# Accessing Data in a List
- print(my_list) returns ["thing", "another thing", "something else", "more things"]
- Use the index to find individual items.

```python
on_shelf = ["red car", "dump truck", "blue hat", "green army man", "buzz lightyear"]
under_bed = ["blue sneakers", "red sneakers", "yellow rainboots", "black pinchy shoes"]

on_shelf[0] #'red car'
on_shelf[4] # 'buzz lightyear'
on_shelf[-1] # 'buzz lightyear'

under_bed[2]  # 'yellow rainboots'
```



----

# List Indexes
- each item in the list has an index that defines its position in the list
- index always starts at 0
- access the last item using -1 and can work backwords using negatives
- using the index doesn't remove anything from the list, it just let's you see it.
- trying to access an index beyond the end of the list will throw an index error


----


# Check if an item is in a list
```python
"red car" in on_shelf  #True
"red sneakers" in under_bed  #False
```
- use the condintional in to control if statements and while loops

```python
if "buzz lightyear" in on_shelf:
    print("I found Buzz mommy")
else:
    throw(full_tantrum)
```


----

# The key points
- every item has an index which starts at zero
- access items in list using brackets & the index
- if you try to use an index that is larger than the list you get an error
- go backwards using negative numbers
- use in to check for the presence of items in the list


----

# Exercise  --  Accessing list Data
