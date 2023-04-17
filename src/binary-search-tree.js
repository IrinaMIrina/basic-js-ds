const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.rootNode = null;
  }
}
class BinarySearchTree {

  root() {
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addWithin(this.rootNode,value);
    function addWithin(node,value){
      if(!node){
        return new Node(value);
      }
      if(node.value===value){
        return node;
      }
      if(value<node.value){
        node.left=addWithin(node.left,value);
      }else{
        node.right=addWithin(node.right,value);
      }
      return node;
    }
  }

  has(value) {
    return searchWithin(this.rootNode,value);

    function searchWithin(node, value){
      if(!node){
        return false;
      }
      if(node.value===value){
        return true;
      }
      return value<node.value ?
      searchWithin(node.left, value) :
      searchWithin(node.right, value);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(value) {
    this.rootNode = removeNode(this.rootNode, value);

    function removeNode(node, value){
      if(!node) {
        return null;
      }
      if (value<node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }else if(node.value<value){
        node.right = removeNode(node.right, value);
      return node;
      }else{
        if(!node.left&& !node.right) {
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;
        node.right = removeNode(node.right,minFromRight.value);
        return node;
      }
    }
  }

  min() {
    if(!this.rootNode){
      return;
    }
    let node = this.rootNode;
    while(node.left){
      node = node.left;
    }
    return node.value;
  }

  max() {
    if(!this.rootNode){
      return;
    }
    let maxRootNode = this.rootNode;
    while(maxRootNode.right !==null) {
      maxRootNode = maxRootNode.right;
    }
    return maxRootNode.value;
  }
}

module.exports = {
  BinarySearchTree
};
