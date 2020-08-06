# What's a Stack?
In this lesson we will discuss the technologies you will be using in this course, what you will be learning them for, and noting other technologies that could be used to do the same thing.
## Lesson Goals
- Identify different technologies that make up stacks (discussion board - research stacks)
- Identify the main roles of the technologies in stacks

## Key Terms to pay attention to
- Front End
- Back End
- Full Stack

## Key syntaxes
- none today :)

## Lesson Activites
- stack research discussion board
- stackshare.io exploration

## Lesson Outline
### Front-End, Back-End, Full-Stack?
- The components that make up a a website can be divided into parts.

#### 1. Front End - the components that are rendered on the "client side", in the browser.  
- These files are sent from the server to the browser and tell the browser what to display and how it should look.
- Each time the page loads is a new intance of the front end, nothing can be stored in the front end between sessions.
- Front end development typically includes visual design and user interface design.
    - HTML - Page Structure (Required)
    - CSS - Page Style (everyone does it)
    - CSS Frameworks - Tools to quickly add common styles and make pages adjust for screen screen size (very common)
    - Javascript - Interactivity (optional)
    - jQuery - a framework that is used to simplify interactivity (somewhat controversial)
    - Javascript Frameworks - A set of pre-written code you can use to add common features to your work.
    
#### 2. Back End - the logic that determines what happens when an HTTP request is recieved.
   - this part of the code runs to control what is sent but is not actually part of what is sent.
   - Many sites do not have custom backends - the server simply sends the file located at the address without any logic.
   - Back end work focuses on logical problem solving and usually includes very little visual design. 
   - the back end consists of programming servers and databases
    - Example Use cases
        - The server inserts data from a database into the html before sending it.
        - The server recieves an HTTP POST request from a registration form and stores data from the user.
        - The server checks a username and password against a database of users and returns a page that is customized for that user
        - The server responds to a user's request to sort items according to price, sorts the items in the database, inserts different objects into the page and sends it to the browser.
        - The server stores the uploaded file in a database and sends a "Successfully uploaded" message.
        - The server retrieves data about the user from the database and renders a personalized dashboard page.
   - The back end is typically written in one programming language with extra libraries to help with various functions
    - Javascript (requires Node.js or something to make it run)
    - Python 
    - Ruby
    - Go
    - PHP
    - ASP
    - Java
    - C++
    
#### 3. Full Stack - refers to a developer who works in both the front end and the back end.
- The front end and the back end work together constantly.
- Because of the volume of work involved in complex web applications, many developers work on either the front end team or the back end team.
- If you want to build a web app by yourself, you will need to use the full stack or hire someone to handle the front or back end for you.

## What's Your Stack?
- a stack refers to the specific technologies that are used in a project.
- technologies are often grouped into stacks because the parts are interdependent so swapping one will change how the others work.
- in some cases one part of a stack is something that is written in a particular language that you add into your files in that language - for example, Django is written in Python, Express is written in Javascript, so you couldn't just start using Django if your code is in Javascript.  
-THE POINT: when you are seeking help it's important to make sure what you find are instructions for all the technologies you are using.
- common stack combinations:
   - LAMP 
   - LEMP 
   - MEAN (And MEVN and MERN) 
   - Django stack
   - Ruby on Rails

- stacks may consist of an operating system, a web server, a database, storage, hosting, programming language, and framework.
- in this course we will be using an apache server on linux, MongoDB, gitHub hosting, Javascript, and Node with Express.
- This is a modified MEAN stack, we are dropping the A for the sake of time.

## Stack Research Discussion board
- research assigned stack and share findings in a discussion
    What parts make up this stack?
    What is each part used for?
    What are some pros and cons of using this stack?
