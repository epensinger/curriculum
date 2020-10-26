# Lesson 5 - Looping Data Structures



## Lesson Outline


----

## Looping over Arrays
- start at index 0 and continue looping until last index
ex:
```javascript
const animals = ['lions', 'tigers', 'bears']
for (let i = 0; i < animals.length; i++){
    console.log (i, animals[i]);
};
//backwards
for (let i = animlas.length - 1; i >= 0; i--){
    console.log(animals[i]);
}
```


----

## Iterating Arrays Exercise


----

## Iterating over objects
- object literals are not iterable, arrays are iterable
- no for loop
ex:
```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```


----


## Object Iteration Exercise
