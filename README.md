**`split`**: The `split` method is used to divide a string into an array of substrings and returns the new array. It takes a separator as an argument, which specifies where to divide the string. The separator can be a string or a regular expression. If an empty string ("") is used as the separator, the string is split between each character.

Example: `'Hello World'.split(' ')` returns `['Hello', 'World']`.

**`reverse`**: The `reverse` method is used to reverse the order of the elements in an array. It's important to note that this method modifies the array in place.

Example: `['Hello', 'World'].reverse()` modifies the original array to `['World', 'Hello']`.

3. **`join`**: The `join` method is used to combine the elements of an array into a string. The elements are combined into one string and separated by a specified separator. If no separator is specified, the default is a comma (,).

   Example: `['Hello', 'World'].join(' ')` returns `'Hello World'`.

These methods are commonly used in JavaScript to manipulate strings and arrays. They can be used together to perform complex transformations. For example, to reverse a string, you can `split` the string into an array of characters, `reverse` the array, and then `join` it back into a string:

```javascript
let str = "Hello World";
let reversedStr = str.split("").reverse().join(""); // Returns 'dlroW olleH'
```

**`filter`**: The `filter` method is used to create a new array with all elements that pass a condition (or a test) provided by a function. This function is called for each element in the array and constructs a new array including elements where the callback function returns a truthy value (in other words, a value that is considered true when evaluated in a boolean context).

Example: `[1, 2, 3, 4, 5].filter(num => num > 3)` returns `[4, 5]`. This filters out the numbers greater than 3.

**`map`**: The `map` method is used to create a new array with the results of calling a function for every element in the array. It calls the provided function once for each element in order, and constructs a new array from the results.

Example: `[1, 2, 3, 4, 5].map(num => num * 2)` returns `[2, 4, 6, 8, 10]`. This multiplies each element in the array by 2.

**`reduce`**: The `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It takes two arguments: a reducer function (that you provide), which is called for each item in the array, and an optional initial value for the accumulator.

Example: `[1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 0)` returns `10`. This sums up the elements of the array.

**`forEach`**: The `forEach` method executes a provided function once for each array element. It's used to perform operations (or side-effects) on each item in an array. It doesn't return a new array or modify the existing array unless you do so in the callback.

Example: `['a', 'b', 'c'].forEach(element => console.log(element))` logs each element to the console.

**`push`**: The `push` method is used to add one or more elements to the end of an array, and returns the new length of the array. This is a mutable operation, as it changes the original array.

Example: `let arr = [1, 2, 3]; arr.push(4)` modifies `arr` to `[1, 2, 3, 4]`.

**`pop`**: The `pop` method is used to remove the last element from an array and returns that element. This method changes the length of the original array.

Example: `let arr = [1, 2, 3]; arr.pop()` modifies `arr` to `[1, 2]` and returns `3`.

**`shift`**: The `shift` method removes the first element from an array and returns that removed element. This method changes the length of the original array.

Example: `let arr = [1, 2, 3]; arr.shift()` modifies `arr` to `[2, 3]` and returns `1`.

**`unshift`**: The `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.

Example: `let arr = [1, 2, 3]; arr.unshift(0)` modifies `arr` to `[0, 1, 2, 3]`.
