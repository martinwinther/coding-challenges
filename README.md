---

### Table of Contents
- [Table of Contents](#table-of-contents)
- [Array Methods:](#array-methods)
- [String Methods:](#string-methods)

---

### Array Methods:

- **CRUD Operations**:

  - **`push`**: Adds one or more elements to the end of an array.
    _Example_: `let arr = [1, 2, 3]; arr.push(4)` results in `arr` being `[1, 2, 3, 4]`.
  - **`pop`**: Removes the last element from an array.
    _Example_: `let arr = [1, 2, 3]; arr.pop()` modifies `arr` to `[1, 2]`.

  - **`shift`**: Removes the first element from an array.
    _Example_: `let arr = [1, 2, 3]; arr.shift()` results in `arr` being `[2, 3]`.

  - **`unshift`**: Adds one or more elements to the beginning of an array.
    _Example_: `let arr = [1, 2, 3]; arr.unshift(0)` results in `arr` being `[0, 1, 2, 3]`.

- **Iterative Methods**:

  - **`forEach`**: Executes a function for each array element.
    _Example_: `['a', 'b', 'c'].forEach(element => console.log(element))` logs each element.

  - **`map`**: Creates a new array with the results of calling a function on every element.
    _Example_: `[1, 2, 3].map(num => num * 2)` returns `[2, 4, 6]`.

  - **`filter`**: Creates a new array with elements that pass the test provided by a function.
    _Example_: `[1, 2, 3, 4].filter(num => num > 2)` returns `[3, 4]`.

  - **`reduce`**: Applies a function against an accumulator and each element in the array to reduce it to a single value.
    _Example_: `[1, 2, 3].reduce((acc, val) => acc + val, 0)` returns `6`.

- **Utility Methods**:

  - **`includes`**: Determines whether an array contains a certain value.
    _Example_: `['apple', 'orange', 'banana'].includes('apple')` returns `true`.

  - **`some`**: Tests whether at least one element in the array passes a test function.
    _Example_: `[1, 2, 3, 4, 5].some(num => num > 3)` returns `true`.

  - **`every`**: Tests whether all elements in the array pass a test function.
    _Example_: `[1, 2, 3, 4, 5].every(num => num > 3)` returns `false`.

  - **`indexOf`**: Returns the first index at which a certain element can be found.
    _Example_: `['apple', 'orange', 'banana'].indexOf('orange')` returns `1`.

  - **`lastIndexOf`**: Returns the last index at which a certain element can be found, searching from the end.
    _Example_: `['apple', 'orange', 'banana', 'apple'].lastIndexOf('apple')` returns `3`.

  - **`isArray`**: Determines whether the passed value is an array.
    _Example_: `Array.isArray([1, 2, 3])` returns `true`.

  - **`from`**: Creates a new array from an array-like or iterable object.
    _Example_: `const set = new Set(['apple', 'orange', 'banana']); Array.from(set)` returns `['apple', 'orange', 'banana']`.

  - **`toString`**: Returns a string representing the array and its elements.
    _Example_: `['apple', 'orange', 'banana'].toString()` returns `'apple,orange,banana'`.

  - **`fill`**: Changes all elements in an array to a static value, from a start to an end index.
    _Example_: `[1, 2, 3, 4, 5].fill(0, 2, 4)` returns `[1, 2, 0, 0, 5]`.

- **Sorting and Manipulation**:

  - **`sort`**: Sorts the elements of an array in place.
    _Example_: `const fruits = ['apple', 'banana', 'cherry']; fruits.sort()` returns `['apple', 'banana', 'cherry']`.

  - **`slice`**: Returns a shallow copy of a portion of an array.
    _Example_: `['apple', 'orange', 'banana', 'grape'].slice(1, 3)` returns `['orange', 'banana']`.

  - **`splice`**: Changes the contents of an array by removing, replacing, or adding elements.
    _Example_: `let numbers

= [1, 2, 4]; numbers.splice(2, 0, 3)`results in`numbers`being`[1, 2, 3, 4]`.

### String Methods:

- **Manipulation Methods**:

  - **`split`**: Splits a string into an array of substrings.
    _Example_: `'apple-orange-banana'.split('-')` returns `['apple', 'orange', 'banana']`.

  - **`join`**: Joins all elements of an array into a string.
    _Example_: `['apple', 'orange', 'banana'].join(', ')` returns `'apple, orange, banana'`.

  - **`repeat`**: Constructs a new string which contains the specified number of copies of the original string.
    _Example_: `'Hello'.repeat(3)` returns `'HelloHelloHello'`.

- **Informational Methods**:

  - **`charCodeAt`**: Returns a number indicating the Unicode value of the character at a certain index.
    _Example_: `'A'.charCodeAt(0)` returns `65`.

  - **`indexOf`**: Returns the first index at which a certain character or substring can be found, or `-1` if it's not present.
    _Example_: `'Hello, world!'.indexOf('world')` returns `7`.

  - **`lastIndexOf`**: Returns the last index at which a certain character or substring can be found, searching from the end, or `-1` if it's not present.
    _Example_: `'Hello, world! Hello again!'.lastIndexOf('Hello')` returns `13`.

- **Transformation Methods**:

  - **`toUpperCase`**: Converts all the alphabetic characters in a string to uppercase.
    _Example_: `'hello'.toUpperCase()` returns `'HELLO'`.

  - **`toLowerCase`**: Converts all the alphabetic characters in a string to lowercase.
    _Example_: `'HELLO'.toLowerCase()` returns `'hello'`.

  - **`trim`**: Removes whitespace from both ends of a string.
    _Example_: `'  Hello, world!  '.trim()` returns `'Hello, world!'`.

  - **`replace`**: Returns a new string with some or all matches of a pattern replaced by a replacement.
    _Example_: `'Hello, world!'.replace('world', 'Mars')` returns `'Hello, Mars!'`.

---
