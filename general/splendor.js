// Quest 1
class Card {
  constructor(color, gems) {
    this.color = color
    this.gems = new Map(gems)
  }
}

class Player {
  constructor(cards, gems) {
    this.cards = cards || []
    this.gems = new Map(gems)
  }

  canPurchase(card) {
    for(const [color, quantity] of card.gems) {
      if(!this.gems.has(color)) return false
      if(this.gems.get(color) < quantity) return false
    }

    return true
  }
}

//------------
//Quest 2
class Player {
  purchase(card) {
    if(this.canPurchase(card)) {
      for(const [color, quantity] of card.gems) {        
        this.gems.set(color, this.gems.get(color) - quantity)
        
        // if(this.gems.get(color) === 0) {
        //   this.gems.delete(color)
        // }

        this.cards.push(card)
        this.cardsColor.set(card.color, discount + 1)
      }
      return true
    } else {
      return false
    }
  }
}

//-- 
// Quest 3


class Player {
  constructor(cards, gems) {
    this.cards = cards || []
    this.gems = new Map(gems)
    this.cardsColor = new Map()
  }

  canPurchase(card) {
    for(const [color, quantity] of card.gems) {
      const discount = this.cardsColor.get(color) || 0
      console.log('discount', discount)
      if(!this.gems.has(color)) return false
      if(this.gems.get(color) < (quantity - discount) ) return false
    }

    return true
  }

  purchase(card) {
    if(this.canPurchase(card)) {
      for(const [color, quantity] of card.gems) {
        const discount = this.cardsColor.get(color) || 0
        
        this.gems.set(color, this.gems.get(color) - Math.max(quantity - discount, 0))
        
        // if(this.gems.get(color) === 0) {
        //   this.gems.delete(color)
        // }

        this.cards.push(card)
        this.cardsColor.set(card.color, discount + 1)
      }
      return true
    } else {
      return false
    }
  }
}   


let card1 = new Card('W', [['W', 1]])
let player1 = new Player([], [['B', 1], ['W', 1], ['G', 1], ['R', 1], ['Y', 1]])
// let card2 = new Card('W', 0, 2, 2, 1, 0)

console.log(player1.canPurchase(card1))
console.log(player1.purchase(card1))
console.log(player1.canPurchase(card1))

// console.log(player1.colorOfCards())