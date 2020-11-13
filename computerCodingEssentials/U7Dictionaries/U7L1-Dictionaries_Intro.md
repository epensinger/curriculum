# Lesson 1 - Dictionaries


----

## Objectives
- Understand the components of a python dictionary.
- Create python dictionaries.
- Access data in python dictionaries.


----

## Key Syntax

```python
my_dictionary = {
    "key":"value",
    "key":"value"
}
```

----

## Lesson Outline


----

### Limitations of Lists
- Can't show relationships between items.
- Limited to one value per item.



----

### Dictionary
- a data structure that consists of key value pairs
- keys describe what the data is
- values represent the data


----

### Example Dictionary
```python
book = {
    'title':'Farenheit 451',
    'author':'Ray Bradbury',
    'year':1953,
    'Dewey Decimal':'813.54 22'
    'pages':256'
}
```


----

### Syntax
```python
my_dictionary = {
    "key1":"value1",
    "key2":"value2"
}
```
- separate keys and values with a colon
- separate properties with comas
- use quotes for strings
- surround the dictionary with curly braces


----

### dict() function
```python
book2 = dict(title="Treasure Island", author = "Robert Louis Stevenson")
```
- dict() is a function that takes keys and values separated by an equals sign and turns them into a dictionary.


----

### Creating Dictionaries Activities


----

### Accessing Data in Dictionaries
- more complex than lists - do you want keys, values, or both?


----

### Accessing Individual Values
```python
my_dictionary["key"] #==> returns the value
my_dictionary["not a key"] #===> Triggers a key error
```
- you can also use a variable
- variable = "title", my_dictionary[variable]


----

### Accessing Individual Keys
```python
my_dictionary["value"] #==> returns the key
my_dictionary["not a value"] #==> ERROR
```


----

### Access Methods
```python
my_dictonary.values() #==> Returns a list of all the values
my_dictionary.keys() #==> Returns a list of all the keys
my_dictionary.items() #==> Returns a list of tuples with keys and values
```


----

### Iterating Dictionaries
```python
for value in my_dictionary.values():
    print value

for key in my_dictionary.keys():
    print key

for k,v in instructor.items():
    print(f"kehy is {k} and value is {v})
```


