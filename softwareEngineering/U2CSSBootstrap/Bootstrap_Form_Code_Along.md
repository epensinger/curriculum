# Bootstrap Form Code Along

## Bootstrap Setup on the page
- CSS link in the head
- JS in the bottom

## Add the Form
- components > form
1. Add the form
```<form></form>```
2. Add the form group div
```<div class="form-group"></div>```
3. Paste in the email address group
```<label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>```
4. Adjust the email address group
```<label for="user_email">Email address</label>
    <input type="email" class="form-control" id="user_email" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>```
5. Add a button
```<button type="submit" class="btn btn-primary">Submit</button>```
6. Play with button options (bootstrap's color system)
```class="btn btn-primary"
class="btn btn-secondary"
class="btn btn-success"
class="btn btn-danger"
class="btn btn-warning"
class="btn btn-info"
class="btn btn-light"
class="btn btn-dark"```
7.  Add a file input
```<form>
  <div class="form-group">
    <label for="profile_upload">Profile Uploadt</label>
    <input type="file" class="form-control-file" id="profile_upload">
  </div>
</form>```
8.  Add a check box
```<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="signUp">
  <label class="form-check-label" for="signUp">
    Join the Mailing List
  </label>
</div>```
9.  Get the user's password
```  <div class="form-group">
    <label for="user_password">Password</label>
    <input type="password" class="form-control" id="user_password">
  </div>```
## Add a Navbar while we are at it.
1.  Add the navbar wrapper
```<nav class="navbar navbar-light bg-light"></nav>```
2.  Add the menu items
```  <div class="navbar-nav">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">Services</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link" href="#">Meet The Team</a>
      </div>```
3.  Add a Dropdown
``` <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
        </div>
      ```
4.  Make it go away on narrow screens
- add this around the "navbar nav" to make whatever is inside this div collapse then the navbar collapses
```<div class="collapse navbar-collapse" id="navbarNav">```
- add ```navbar-expand-lg``` to the nav element to make it expand when it hits the large breakpoint.
- breakpoints are listed in the layout overview page in the bootstrap docs.
5.  Add a toggler to expand the menu on smaller screens.
```  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>```
- bootstrap is using its grid system to stack the items in the nav on a small screen and have them unstacked on a wider screen.  You will learn how to use that grid soon.
- the data target matches the ID of the "navbarNav" so it will open the navbarNav
5.  Add a Navbar Brand to show up on all screens
```<a class="navbar-brand" href="#">Navbar</a>```====================================