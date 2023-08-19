class Queue {
  itens

  constructor() {
    this.itens = []
  }

  push(elem) {
    this.itens.push(elem)
  }

  pop() {
    return this.itens.shift()
  }

  empty() {
    return !this.itens.length
  }

  top() {
    return this.itens[0]
  }
}