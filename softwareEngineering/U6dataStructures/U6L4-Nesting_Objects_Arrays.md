# Lesson 4 - Nesting with Arrays and Objects
In this lesson you will examine common complex data structures.


----

## An Array of Objects
```javascript
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3,
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
]
```


----

## Arrays in Objects
```javascript
var player = {
    userName = 'John',
    avatar = warrior1,
    weapons = [bow, rifle, handgun]
}
```


----

# Access Data in nested things
```javascript
//work from the outside in
shoppingCart[1]
shoppingCart[1].product
player.weapons[2]
```


----

## Comments Exercise
- create a list of 3 comments
- each comment is an object with a username, text, and likes (a number)
- print out the user, text, and likes SEPARATELY for one of the comments.


