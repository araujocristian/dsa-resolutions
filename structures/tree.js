class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if(this.root === null) {
      root = newNode
      return
    }

    let temp = this.root

    while(temp !== null) {
      if(newNode.value === temp.value) {
        return
      } else if(newNode.value < temp.value) {
        if(temp.left){
          temp = temp.left
        } else {
          temp.left = newNode
          return
        }
      } else {
        if(temp.right){
          temp = temp.right
        } else {
          temp.right = newNode
          return
        }
      }
    }
  }
}