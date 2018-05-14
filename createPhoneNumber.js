/*
I: 10int values between 0 and 9 (arr of int)
O: phone number string of format "(123) 456-7890"
C:
E:
*/

function createPhoneNumber(numbers){
	return numbers.reduce(function (acc, element, index){
		if (index <= 2) {
			if (index === 0) {
				acc += '(' + element;
			} else if (index === 2) {
				acc += element + ') ';
			} else {
				acc += element;	
			}	
		} else if (index === 5) {
			acc += element + '-'; 
		} else {
			acc += element;	
		}
		return acc;
	},"")
}

// another implementation non-itterative, but maybe under the hood with Array.prototype.join()
// no this is slower as it is using splice which is O(n) at every operation, but way way more readable

function createPhoneNumber(numbers) {
	numbers.unshift('(');
	numbers.splice(4,0,') ');
	numbers.splice(8,0,'-');
	return numbers.join('');
}