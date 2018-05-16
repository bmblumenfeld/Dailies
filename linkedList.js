var LinkedList = function(val) {
	this.head = null;
	this.tail = null;
}

var Node = function(val) {
	this.val = val;
	this.next = null;
}

linkedList.prototype.addToTail = function (val) {
	if (!this.head) {
		this.head = new Node(val);
		this.tail = this.head;	
	}
	this.tail.next = new Node(val);
}

linkedList.prototype.removeFromTail = function() {
	var looker = this.head.next;
	while (looker) {
		if (looker.next === this.tail) {
			this.tail = looker;
			looker = false;
		} else {
			looker = looker.next;	
		}
	}
}

linkedList.prototype.removeFromHead = function () {
	if (this.head) {
	  this.head = this.head.next;
	}
}

linkedList.prototype.removeVal = function (val) {
	function trav(node) {
		if (node.next.val === val) {
			node.next = node.next.next;
		}	else if (!node.next) {
			return;
		} else {
			trav(node.next);
			return;
		}
	}
	trav(this.head);
}


//implement a function to check if a linked list is a palindrom. 

var isPalindrom(linkedList) {
	var looker = linkedList.head;
	var pal = [];
	var revpal = [];
	while (looker.next) {
		pal.push(looker.val);
		revpal.unshift(looker.val)
		looker = looker.next;
	}
	if (pal.join('') === revpal.join('')) {
		return true;
	}
	return false;
}


























