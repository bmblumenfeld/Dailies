/*
checks to see whether a string is valid in the eyes of Sherlock;
A valid string has characters that show up the same amount of times;

Also, A valid string has all characters appear the same amount of times if 
the character at index [1] is remeoved;

I: string;
O: boolean, but also print out YES or NO;
C: 
E:
*/

var sherlockString = function(sherlock) {
	var letters = {};
	var sherlockApproval = 'YES';
	var allotment = false;
	for (var i = 0; i < sherlock.length; i++) {
		if (!letters[sherlock[i]]) {
			letters[sherlock[i]] = 1;
			
		} else {
			if (allotment) {
			  sherlockApproval = 'NO';
			}
			allotment = true;
			
		}
	}
	console.log(sherlockApproval);
	return sherlockApproval;
}

var assert1 = function (expected, description) {
	var word = 'abc';
	var actual = sherlockString(word)
	console.log(description);
	console.log(expected === actual);
}

assert1('YES', 'Given character occurance of 1 accross the board it should return YES');

var assert2 = function (expected, description) {
	var word = 'abcc';
	var actual = sherlockString(word)
	console.log(description);
	console.log(expected === actual);
}
assert2('YES', 'Given a string that when a character is remeoved it occurs the same number times each char');

var assert3 = function (expected, description) {
	var word = 'wahooo';
	var actual = sherlockString(word)
	console.log(description);
	console.log(expected === actual);
}

assert3('NO', 'Given a string that even when a character is removed wont have all characters occuring the same amount of times');

