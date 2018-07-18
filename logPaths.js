var Tree = function(val){
    this.val = val;
    this.children = [];
}

Tree.prototype.addChild = function(val){
    child = new Tree(val);
    this.children.push(child);
}

Tree.prototype.logPath = function(root){
    var paths = [];
    var trav = function(node,path){
        if(!node.children.length){
            paths.push(path);
            return;
        }
        node.children.forEach(function(child){
            path.push(child.val);
            trav(child,path.slice());
        })
    }
    trav(root,[root.val]);
    console.log(paths)
}

Tree.prototype.showTree = function(root){
	var logTree = '';
	bfs(root,[]);
    function bfs(node,path){
		node.children.forEach(function(child){
			console.log(child.val)
			path.push(child);
		})
		if(!path.length){
			return 
		}
		bfs(path.unshift());
	}
}

var bush = new Tree(5);
bush.addChild(5);
bush.addChild(7);
bush.addChild(9);
bush.children[0].addChild(4);
bush.children[0].addChild(3);
bush.children[1].addChild(1);
bush.children[1].addChild(3);
bush.children[2].addChild(9);
bush.children[2].addChild(10);
bush.children[0].children[0].addChild(5);
bush.children[0].children[0].addChild(8);
bush.children[1].children[0].addChild(1);
bush.children[2].children[0].addChild(2);
bush.children[0].children[1].addChild(5);
bush.children[0].children[1].addChild(3);


// bush.logPath(bush);
bush.showTree(bush);

//         5

//     5   7   9

//   4 3  1 3  9 10

// 5 8 5 3  1    2


// 54583537113992 10



