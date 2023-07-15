/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

//Solution
function panic(str) {
	return str.split(" ").join(" 😱 ").toUpperCase() + "!";
}
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// SOLUTION

function whisper(str) {
	if (str.endsWith("!")) {
		// scrimba!
		return "shh... " + str.slice(0, -1).toLowerCase();
	}
	return "shh... " + str.toLowerCase();
}
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

// SOLUTION

function altCaps(str) {
	// assemble each character back into a new string
	let newStr = "";
	// loop through the string
	for (let i = 0; i < str.length; i++) {
		// uppercase every character with an even index
		if (i % 2 === 0) {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

// SOLUTION

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
	// split sentence into an array of words
	const sentenceArr = str.split(" ");
	// loop through the arrays of words and capitalizeWord func on each word
	const capArr = sentenceArr.map((word) => capitalizeWord(word));
	// join sentence arr back into a string
	return capArr.join();
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

// SOLUTION

function awardBonuses() {
	for (let x = 1; x < 101; x++) {
		if (!(x % 3 || x % 5)) {
			console.log(x + " JACKPOT!");
		} else if (!(x % 5)) {
			console.log(x + " Bonus!");
		} else if (!(x % 3)) {
			console.log(x + " Vacation");
		} else {
			console.log(x + " :(");
		}
	}
}

awardBonuses();

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

const emojis = {
	smile: "😊",
	angry: "😠",
	party: "🎉",
	heart: "💜",
	cat: "🐱",
	dog: "🐕",
};

// SOLUTION

function emojifyWord(word) {
	if (word.startsWith(":") && word.endsWith(":")) {
		let emoji = word.slice(1, -1);

		return emojis[emoji] ? emojis[emoji] : emoji;
	} else {
		return word;
	}
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

// SOLUTION:

function emojifyPhrase(phrase) {
	const arr = phrase.split(" ");
	let newArr = [];
	for (let word of arr) {
		newArr.push(emojifyWord(word));
	}

	return newArr.join(" ");
}

//console.log(emojifyWord(":heart:"));
//console.log(emojifyWord(":flower:"));
//console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

// SOLUTION

function isAnagram(str1, str2) {
	// are the strings the same length? if yes return false.
	if (str1.length !== str2.length) return false;

	// split string into an array
	// sort
	// join the array back together as a string
	const newStr1 = str1.split("").sort().join("");

	// repeat with second word
	const newStr2 = str2.split("").sort().join("");

	// are the two words equal? true or false
	return newStr1 === newStr2;
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thing"));
console.log(isAnagram("treasure", "measure"));
