/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0)
  
  let current = dummy
  let carryOn = 0
  let sum = 0
  
  while(l1 !== null || l2 !== null) {
      sum = (l1?.val || 0) + (l2?.val || 0) + carryOn

      if(sum>=10) {
          carryOn = 1
      } else {
          carryOn = 0
      }

      current.next = new ListNode(sum%10)

      current = current.next
      l1 = l1?.next || null
      l2 = l2?.next || null
  }

  if(carryOn) current.next = new ListNode(1)

  return dummy.next
};