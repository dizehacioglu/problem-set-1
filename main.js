// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string.

var letterCapitalize = function(s) {
	var words = s.split(" ");
	var result = "";

	for(var i = 0; i < words.length; i++)
	{
		var current = words[i];
		current = current.charAt(0).toUpperCase() + current.substring(1, current.length);
		result += current + " ";
	}

	return result;
};

console.log(letterCapitalize("Let's see if this works."));

// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains 

var wordCount = function(s) {
	var words = s.split(" ");

	return words.length;
};

console.log(wordCount("Never eat shredded wheat."));

// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false.

var primeTime = function(num) {
	var isPrime = true;

	for(var i = 2; i < num; i++)
	{
		if(num % i === 0) {

			isPrime = false;
		}
	}

	return isPrime;
};

console.log(primeTime(9));
console.log(primeTime(47));





