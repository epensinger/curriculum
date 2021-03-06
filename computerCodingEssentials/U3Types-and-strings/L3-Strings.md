# Using strings
In this lesson you will learn how to use strings in some more complicated scenarios, like when there are quotes in the string, and how to take more control over the appearance of printed strings.
## Lesson Goals
- Store strings with quotation marks and apostrophes.
- Use escape sequences to manipulate string formatting.

## Key Terms to pay attention to
- escape sequences

## Key syntaxes

     \n
     \\
     \t
     \"
     
## Lesson Activites
- Escape sequences demo
- Escape Sequences exercise

## Lesson Outline

### String Methods
- methods are functions that you can call on a specific item in Python.
- call a method by putting a `.` followed by the method name and ()

```python
   msg = "You are amazing"
   print(msg.upper())
   print(msg.lower())
   print(msg.capitalize())
```
There are tons of string methods, and most people memorize the ones they use frequently and look up the ones they don't.  The full list is on the
[String Methods page](https://docs.python.org/3/library/stdtypes.html#string-methods) of the Python documentation site.

### Double vs. Single Quotes
- when you use a single quote `'` python will treat everything that comes next as a string until it comes to another single quote.
- same is true for double quotes
- best practice - consistenly use either double or single quotes throughout your code.
- To store a string with an apostrophy use double quotes  

	```
msg = "Jim's book"  
```  

	```
msg = "I can't do it!"
```
    
- To store a string with quotes, use single quotes

   `msg =  'He said, "RUN!"' `  
   
   `msg =  'I'll show you "funny"' `  
   
### Escape sequences
- special cases require special handling:
- How do you include a new line?  Indent? What if you want quotes and an apostrphe?
- escape sequences are "metacharacters" - python interprets them to do something special when printed.  
	`\n` - new line  
	`\\` - backslash  
	`\t` - TAB  
	`\"` - Double quotes

### Escape sequence exercise

    
