# Logical Operators
In this lesson we will write more complex logical statements that perform multiple conditional checks at once.
## Lesson Goals
- Use and, or, and not to write complex conditional statements.


----

## Key Terms to pay attention to
- (you don't need to memorize the fancy names)

## Key syntaxes
- and
- or
- not


----

## Lesson Outline
### Logical Operators

| Fancy Name          | Syntax | What it Does                        | Example                                                             |
|----------------------------|:--------:|-------------------------------------------------|--------------------------------------------------------------------------------------------|
| Logical conjunction |   and  | Truthy if both A & B are true       | if is_wake_time and is_school_day:    print("get out of bed silly") |
| Logical disjunction |   or   | Truthy if either A or B are true    | if am_tired or is_bedtime:    print("go to sleep")                  |
| Logical negation    |   not  | Truthy if the opposite of A is true | if not is_weekend:    print("go to work")                           |


----

### Example - AND
```python
age = input("what is your age? ")
age = int(age)
if age > 2 and age < 8:
  print("You get the child price")
elif age <= 2:
  print("You are free unless you cry and then you leave")
else:
  print("Pay up sucker")
```


----

### Example - OR
```python
course = input("What class are you in? ")
if course.lower() == "science" or course.lower() == "math":
  print("That is a STEM course")
else:
  print("What kind of class is that?")
```


----

### Example - Not
- only works with one statement (no double negatives here!)

```python
if not is_weekend:
  print("go to work")
```


-----

### More complex nots:
```python
if not 1>2:  #==> True - 1>2 is false, so not false is true
if not 6 == 6: #==> False - 6 == 6 is true, so not is false
if not (1 > 3 and 5 == 5) #==> True - 1>3 is false and 5 == 5 is true, so that's false, opposite of false is true
```
WHYYYY?????  - programmers are all about efficiency.  
If I already typed a complex conditional test, I can just copy and paste and use not.


-----

