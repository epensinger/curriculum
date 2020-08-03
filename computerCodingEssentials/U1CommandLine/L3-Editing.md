# Moving, Renaming, and Removing files using the command line
In this lesson you will learn how to rename existing files and move files into different directories.  You will also learn how to permanently delete forever files and directories using the command line.
## Lesson Goals
- Move files using the command line
- Rename files using the command line
- Remove files using the command line
- Delete directories using the command line
## Key Terms to pay attention to
- delete
- rename
- don't overthink those, I bet you already know exactly what they mean
- arguments - you probably won't get this fully quite yet
- source
- target
## Key syntaxes
- mv
- rm
- rmdir
- rm -r
- rm -rf
## Lesson Activites
- Demonstration and code along
- Quiz
## Lesson Outline
### Moving and Renaming Files
- <code> mv </code> stands for move
- use to move and/or rename files
- takes two arguments - the source (where the file is now) and the target (where you want it to go)
- the computer will notice changes to the path (moving it) or the filename (renaming it) and make those changes
- ex: <code>mv paper.txt myPaper.txt</code> -- renames the file paper (in the current working directory) to myPaper (still in the same directory)
- ex: <code>mv dog.jpg pets </code> -- moves the file dog.jpg from the current directory to the directory pets, a child directory of the current directory (assuming it already exists)
- ex: <code>mv english/problems.jpg math/problems2.jpg</code> -- moves the file problems from the english folder to the math folder and renames it problems 2
## Important Note about deleting:
This next little bit is about deleting files.  Not moving them to the trash or delete que.  No.  Removing them forever from your computer.  No undo button.  Pay attention and use sparingly!!!
### Deleting Files with rm
- <code> rm </code> stands for remove
- use to delete files forever (not directories)
- ex: <code> rm paper.txt </code> forever deletes paper.txt and anything in it with no warning it's just gone.
- ex: <code> rm paper.txt paper2.txt math.jpg cat.jpg </code> you can list several files to delete.  It will eliminate them all, assuming they are in the working directory.
### Deleting Directories
- <code> rmdir </code> deletes an empty directory.
- <code> rm -r </code> adding the r flag which stands for recursively tells the system to go into every directory and file under that directory and get rid of it to.  You may get permission errors.  I'm not telling you how to get through them. There's a way, but it feels a little dangerous.
- Safest plan - use rm to delete all the files in the directory and then use rmdir to delete the directory.  You are less likely to have an accident.
### Closing Comments
- The power of the command line is exactly why you should have a secure password on your computers.
- The computer assumes if you are smart enough to enter the command you are smart enough to know what it does.  There are some built in warnings sometimes, but if you aren't sure what you are doing, look it up or use the GUI.
- Further learning:  if you run into something that you haven't seen before you can look it up in the command line manual.  Simply type <code>man</code> into the terminal followed by the command you want to learn about it.  It will tell you all you need to know.  Then press q when you are ready to quit and go back to the command line.