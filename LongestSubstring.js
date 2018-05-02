// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/*
I: string 
O: Int. length of longest substring without repeated character. That means repeated character within the string. 
C: Must be substring not subsequence
E: Ask if it is absolutely one string. Is it case sensitive. Only known characters? 
*/ 

//go fo naive solution 

var findLongestSubString = function(string) {
	//store the current character somehow
	//compare against longest substring
	//loop through the string until duplicated
	//store longest substring if longer
	//return longest substring
	var longestSub = '';
	for (var i = 0; i < string.length; i++) {
		var currentLongest = ''
		var letters = [];
		for(var k = i; k < string.length; k ++) {
			if (letters.includes(string[k])) {
				if (currentLongest.length > longestSub.length) {
				  longestSub = currentLongest;
				  break;	
				}
			} else {
				currentLongest += string[k]
				letters.push(string[k])	
			}
		}
		if (currentLongest.length > longestSub.length) {
			longestSub = currentLongest;	
		}
	}
	return longestSub;
}

console.log(findLongestSubString("abcabcbb"))