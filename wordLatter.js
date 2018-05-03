// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.


// var wordLatter = function(begin, end, list) {
// 	var path = 0;
// 	var start = begin;
// 	var letters = start.split();
// 	var finish = end;
// 	if (!list.includes(end)) {
// 		return 0;	
// 	}
// 	var k = 0;
// 	while (start !== finish) {
// 		for (var i = 0; i < letters.length; i++) {
// 			if (list.includes(letters.join('')) {

// 			}
// 		}
// 	}
// }


var wordLatter = function(begin, end, list) {
	var maxTries = list.length;
	var tries = 0;
	var bucket = [];
	//how to do this without mutating list??
	var solution = false;
	var wordChange = function(word, memo) {
		var store = []
		bucket = store;
		var changed = word.split();
		for (var i = 0; i < word.length; i++) {
			changed[i] = end[i]
			if (changed.join('') === end) {
				store.push(word)
			}
			changed = word.split();
		}
		tries++
		maxTries--
		if (store.includes(begin)) {
			solution = true;	
		}
		if (maxTries === 0) {
			solution = true;
			tries = 0;	
		}
	}
	
	while (solution === false) {
		bucket.forEach(function (attempt){
			wordChange(attempt)
		})	
	}
	return tries;
}






