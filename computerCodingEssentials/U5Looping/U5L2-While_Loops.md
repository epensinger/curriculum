# While Loops
In this lesson we will learn a second way of looping using a condition rather than an iterable object.
## Lesson Goals
- Use while loops to control the flow of your program
- Plan carefully to avoid infinite loops

## Key Terms to pay attention to
- Infinite Loop
- Exit Condition


----

## Key syntaxes
```python
while boolean expression:
    do something
```


----

## Lesson Outline
### While Loop
- uses a boolean expression to control the flow of a program.
- while the boolean expression is truthy, the code in the loop will repeat.
- when the boolean expression is falsey, the program will move on to the code after the loop


----

### Inside the loop vs. outside the loop
- code that is indented under the while line is the code that will repeat
- code that is not indented won't run until after the loop is finished, it is not in the loop


----


### Example
```python
user_response = None
while user_response != "please":
    user_response = input("Ah, ah, ah, you didn't say the magic word")
```

### Exit Condition
- The condition that makes the boolean false and ends the loop
- Sometimes also called a termination condition
- In a while loop there must be a way within the loop to reach the exit condition


----

### What's the Exit Condition?
```python
game_over = False
magic_number = 7
while !game_over:
    guess = input("Guess a number between 0 and 10")
    if guess == magic_number:
        game_over = True
        print("Game over, you win!")
    else
        print("Nope, try again")
print("This prints after the loop is finished")
```


----

### Infinite Loops
- If the exit condition is not met, THE LOOP NEVER ENDS
- The program cannot move on to other instructions, even instructions like quit or exit
- If you have a program that "freezes", it could be that the exit condition has not been met
- Quitting the program (force quit, restart computer) resolves the issue so you can fix the bug.


----

### Another Example
```python
msg = input("What's the secret password?")
while msg != "bananas":
    print("That is wrong")
    msg = input("What's the secret password?")
print("Correct!")
```


----

### Translating between for and while loops
```python
#for version
for num in range (1,11):
    print(num)

#while version
num = 1
while num < 11:
    print(num)
    num += 1
```


---

### For vs While
- Most for loops can be turned into while loops, but some while loops cannot be turn into for loops.
- For loops require a collection to iterate over, while loops are more flexible in how they are controlled.
- While loops are more dangerous because you have to make sure the exit condition is attainable.
- Generally, if you can use a for loop you should use a for loop.


----

### Emoji Art Exercise

### Stop Copying Me


----

### The Break Keyword
- allows you to stop a loop whenever you want
- works in both for loops and while loops


----

### Break Examples
```python
# breaking a while loop
while True:
    command = input("Type exit to exit: ")
    if command == "exit":
        break
```
```python
# breaking a for loop
for x in range (1,101):
    print("Type I will not talk in class")
    msg = input(x)
    if msg == "I'm sorry":
        break
```


----

### Adding a break
```python
times = int(inpu("How many times do I have to tell you?"))
for time in range(times):
    print("Clean up your room!")
    if time >= 5:
        print("Do you even listen anymore?")
        break
```


----

### Take a Break Exercise


----

### Loops Quiz