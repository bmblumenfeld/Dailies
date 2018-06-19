* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @param {number} sum
* @return {number[][]}
*/
var pathSum = function(root, target) {
  var paths = [];
  var stack = [];

  var current = {
    node: root,
    path:[],
    sum:0
  };

  stack.push(current);
  while(stack.length) {
    if (!current.node.left && !current.node.right) {
      if(current.sum === target) {
        paths.push(current.path)
      }
      //do something with stack fosho
    }
    if (current.node.left) {
      
    }
    if (current.node.left) {

    }
  }
};