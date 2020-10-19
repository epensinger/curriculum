# Iterating over lists
- in this lesson you will learn how to loop through all of the items in a list

# Lesson Goals
 - use a for loop to loop through all the items in a list
 - use a while loop to iterate over all the items in a list


----

# Key Syntaxes
```python
#for loop
for item in list:
    #do something
    #use item variable
```
```python
#while loop
my_list = ["a", "b", "c"]
i = 0
while i < len(my_list):
    print(my_list[i])
    i += 1
```


----

# Iterating over a list
- a list is an iterable object!  
- to iterate means to go through something once for each time in an iterable object
- this code is a bad idea:

```python
#This is ugly
print(my_list) #==> ["a", "b", "c"]

#This is rediculous
print(my_list[0])
print(my_list[1])
print(my_list[2])

#I thought I wasn't supposed to repeat myself????
```


----

# Use a for loop to iterate over a list
```python
for item in items:
    print(item)

for num in nums:
    print(num*num)

for trinket in trinkets:
    score += 5
```


----

# Use a while loop to iterate over a list
```python
colors = ["red", "yellow", "green"]
index = 0

while index < len(colors):
    print(colors[index])
    index += 1
```


----

# Use a while loop when you want to access the index
```python
tasks = ["put clothes in washer", "add soap to washer", "select wash cycle", "run washer"]
index = 0

while index < len(tasks):
    num = index +1
    print(f"{num}.  {tasks[index]}")
    index += 1
```


----

# List Iteration Exercise