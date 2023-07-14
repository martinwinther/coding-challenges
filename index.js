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
