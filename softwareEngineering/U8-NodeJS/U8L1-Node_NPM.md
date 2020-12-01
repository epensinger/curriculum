# Lesson 1 - Node JS
## Lesson Outline


----

### What is NodeJS?
- a Javascript Runtime
- allows JS to be run on an operating system outside of the browser
- allows us to write code to be run by a server with JS instead of Python, Ruby, C, etc


----

### What can Node be used for?
- Web Servers
- Command Line Tools
- Native Applications
- Video Games
- Drone Software


----

### Who actually uses it?
- Netflix, Uber, NASA (not exclusively)
- VS Code, Slack
- Crosscode video game
- Node use has grown exponentially since 2011


----

### WHY?
- unified language in code base
- lots and lots of modules
- understand server side (back-end) coding without learning new syntax
- fastest way to get from total noob to full project
- "Everyone" knows JS


----

### Why not?
- Ruby and Python have simpler syntax
- The C languages and Java have more power without as many dependencies
- Codebases before like 2010 are most likely not in Node, not worth switching
- Python is more eloquent for big data and complex statistics, physics, etc.


----

### Node JS environment
#### On an OS
- Check for node: open Terminal, Command line, type node - if version shows up you have it, if not go get it.
- Visit nodejs.org, download latest version
- Install on your machine
- Go back to terminal/command line and type node, if version shows up it's ready.

#### On REPL.it
- Make sure you are running a Node.js repl.


----

### The Node REPL
- Read Evaluate Print Loop 
- When you run the node command in a command line, it listens for JS commands and runs them.
- Like the JS console in the browser except no HTML file involved


----

### Running Node Files
- Write code in JS file
- Open the command line shell in REPL (ctrl-shift-p then type Open Shell)
- In the command line type node filename.js
- (In an OS command line navigate to the correct folder and type node filename.js)

----

### How is Node different from what we have been doing???
- no DOM, no browser
- lots of built in modules
- ability to add modules
- ABILITY TO SAVE DATA ON THE SERVER OR LOCAL MACHINE!!!


----

### NPM - Node Package Manager
- NPM is a library of thousands of packages published by other developers
- code someone else wrote that you can use for free!
- NPM is also a command line tool to easily install & manage these packages
- Automatically comes with Node

----

### Process:
1. Run npm init
2. Run npm install <thing> 
3. Include the module in your JS file
- That was a lot, we'll break each one down.


----

### Run npm init
- Open the shell (navigate to the project folder if in the OS)
- Type npm init
- Go through the process, hit enter to accept suggestions or fill in your own.
- creates package.json file to organize dependencies (packages you need)

----

### Run npm install
- all packages are indexed by npm according to a name
- the name is usually in the docs of the package's website
- type npm install followed by the name
- anything after a dash is a flag that gives npm specific instructions
- if the docs say to use flags, use them


----

### Use the module in your JS file
```javascript
//include the module at the top of the file
const my_package = require('the_package')
//use the module as an object according to the documentation for the package
my_package.their_method()
```

[Here's a example repl.it](https://repl.it/@EmilyPensinger/npmExamplePackages)


----

### Where do I find these packages???
- [npmjs.com](https://www.npmjs.com/) - search for the package by name
- Google node packages
- A software engineer / developer spends a decent chunk of time researching libraries, modules, and packages
- most often you search how to do something in Node.js and the answer points you to a package

----

### Package.json
- lists metadata about the project
- lists dependencies
- each module has a package.json with it's own dependencies
- prevents you from piling up multiple copies of the same module
- allows you to share code without sharing all the modules
- npm install with no package name will install anything in the package.json file that is missing


----

### Language Guesser Challenge
### Use a Package!


----

### More than you ever wanted to know

[awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs) is a fantastic resource on github for exploring npm, and node.js
