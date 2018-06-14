/*
Given an integer <= 1trillion, return the english equivilent;
Example: 

Example input --> output:
1 -> ‘one’
-100 -> ‘negative one hundred’
15 -> ‘fifteen’
30 -> ‘thirty’
*/


var numberToEnglish = function (num) {
	var numString = num + '';
	var englishNum = '';

	//handle negative case
	if (numString[0] === '-') {
	  englishNum += 'negative '	
	}

//constant time lookup for numbers under 20
	var bases = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	}

	//constant time lookup for tens place
  var tens = {
  	2: 'twenty',
  	3: 'thirty',
  	4: 'forty',
  	5: 'fifty',
  	6: 'sixty',
  	7: 'seventy',
  	8: 'eighty',
  	9: 'ninety',
  }

  //constant time lookup for higher level numbers
  var catagory = {
  	2: 'thousand',
  	3: 'million',
  	4: 'billion',
  	5: 'trillion',
  	6: 'quantillion',	
  }

  //split number by magnitude of 1,000
  var places = numString.split(',');
  var size = places.length;
 
 //iterate through to name each comma seperated block
  places.forEach(function (number,index){
  	var english = '';
  	//if there is a number in the hundred place put hundred
  	if (Number(number[0])) {
  		english += bases[Number(number[0])] + ' hundred ';
  	}
  	// checks to name numbers trailing numbers for number under 20 lookup
  	if ((Number(number.slice(1)) < 20) && (bases[Number(number.slice(1))])) {
  		english += bases[Number(number.slice(1))] + ' ';
  	}
  	// goes to tens lookup if over 20
  	if (Number(number.slice(1)) >= 20) {
  		english += tens[number[1]] 
  		if (bases[number[2]]) {
  			english += bases[number[2]] + ' ';
  		} 
  	}
  	//This goes to magnitude lookup by checking to see the size of the number. Also checks to see if numbers are not just trailing zeros
    if ((size > 1) && (Number(number[0] + number[1] + number[2]))) {
    	english += catagory[size];
    	//decriments to go to the next order of magnitude
    	size--;
    } else {
    	//still need to decrement to follow the order of magnitude
    	size--	
    }
    //adds to total accumulated word
    englishNum += english + ' ';
  })
  return englishNum;
}

var assert1 = function (expected, description) {
	var actual = numberToEnglish('502,062,000');
	console.log(actual);
	// console.log(actual === expected);
}

assert1('one', 'It should make the english equivilent of the number');














