// level 0: 2^0 = 1;
// level 1: 2^1 = 2;
// level 2: 2^2 = 4;
// level 3: 2^3 = 8;

// # number of nodes = 2^H -1; h being the height 
// log nodes = steps;

// log 100 = 2
// 10^2 = 100;

// bainary search tree - is really good with searching 
// all the right side of bst should be greater then the root node 
// and all the left should be decreaseing 
// nodes can have only two children like not odd numbers it should be a perfect bainary tree

class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      let newnode = new Node(value);
      if( this.root === null ){
        this.root = newnode;    
        return this;
      }else{
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            if (currentNode.left == null){
                currentNode.left = newnode;
                return this;
            }else {
              currentNode = currentNode.left;
            }
          }else {
            if (currentNode.right == null){
                currentNode.right = newnode;
                return this;
            }else {
              currentNode = currentNode.right;
            }
          }
        }
      }
      
    }
    lookup(value){
      //Code here
      let lookupNode = new Node(value);
      let currentNode = this.root;
      if(currentNode === null){
        console.log("no node exist");
        return false;
      }else if ( currentNode.value === lookupNode.value ){
        console.log('value exist')
        return currentNode;
      }else { while ( true ){
        if( lookupNode.value < currentNode.value ){
          if(currentNode.value === lookupNode.value){
            console.log('exists');
            return currentNode;
          }else{
            currentNode = currentNode.left;
          }
        } else { 
          if(currentNode.value === lookupNode.value){
            console.log('exists');
            return currentNode;
          }else{
            currentNode = currentNode.right;
          }
        }
        }
      }
     
    }
    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(20)
  tree.insert(6)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  tree.lookup(20)

  // JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  