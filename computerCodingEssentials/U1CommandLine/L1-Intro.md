#  Introduction to the Command Line
In this lesson you will learn how to access the command line in Repl.it and how to use it to navigate around and create files.
##  Lesson Goals
- Access the command line in Repl.it (and on chromebook for fun)
- Locate current absolute path of working directory
- Navigate the file tree absolutely and relatively
- Display the contents of a directory in the command line
## Key Terms to pay attention to
- command line
- directories
- keywords
- absolute path
- relative path
- home directory
- parent directory
- child directory
## Key syntaxes 
- pwd
- cd
- cd ..
- ls
- ls -a
- ls -l
## Lesson Activites
- Command Line Demonstration and code-along
- Zoom Show and Tell - you will share your screen via zoom and try it out while we watch.
- Quiz
## Lesson Outline
### What is the Command Line?
- the command line is a faster and more powerful way to maneuver around the operating system.
- it replaces things you do with the graphical user interface (GUI) and gives you more power.
- you give instructions to the computer using special keywords
### How do I find the command line?
- on Repl.it (in a repl) type <code>f1</code> then type "open shell" and hit enter.
- on a Mac open terminal
- in a chromebook do this: https://www.techjunkie.com/how-to-access-the-command-prompt-on-a-chromebook/ (it will be limited)
- on a PC follow these instructions: https://docs.microsoft.com/en-us/skypeforbusiness/set-up-your-computer-for-windows-powershell/download-and-install-windows-powershell-5-1 (it's going to be different)


### OS File Structure
- operating systems organize their folders in a heirarchy (a file tree)
- all files and folders are organized relative to the base root directory.
- the base root directory is the very top level on a hard disk or container (if working on a cloud environment)
- folders are nested inside a parent and the folders inside them are their child directories.

### Absolute Paths
- absolute paths are the location of a file or directory from the root.
- Each directory in a path is indicated with a slash
- example: /Users/me/Documents
### Where am I?
- use <code>pwd</code> to print the working directory
- will print the absolute path of where you currently are to the screen
- When you open the command line it will start at the home directory by default.
- This is also designated by <code>~</code> that's called a tilde
### Listing files and directories
- use <code>ls</code> to list the files and folders in the current directory.
- flags let you give more specfic instructions with a keyword
- use the flag <code>-a</code> which means all like this: <code>ls -a</code> to list all the files and directories in a directory.
- this shows the hidden files that live in a directory but are hidden by default
- generally those are the files that would break something if you mess with them.
- use the flag <code>-l</code> to list the long version of the files like this: <code>ls -l</code>.  That will show permissions, the last modified timestamp, etc.
### Moving to a different working directory
- use cd to change the working directory
1. #### Relative naviagation
- if I'm in a directory that has a child directory called stuff in it I can navigate to stuff by typing <code>cd stuff</code>
- if there's a child directory of stuff called games I could navigate there directy with <code>cd stuff/games</code> or I could navigate to stuff with <code>cd stuff</code> and then <code>cd games</code>
- to navigate from a child directory to a parent I can use <code>cd ..</code>, the two dots represent the parent.  I could go up two parents with <code>cd ../.. </code>.
2. #### Absolute navigation
- if I want to go directly to a location regardless of where I am, I can type it's absolute path, staring from the route.
- for example: <code>cd /Users/me/Documents/stuff/games </code>
#### Summary:
- Use  <code>cd</code> to move around between directions either relatively or absolutely.  Use <code>pwd</code> to print the working directory when you get lost, and <code>ls</code> to list the directories and files when you forget where you are going.

    
    
        
        

    