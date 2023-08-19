/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) { // [1,2,6,3,4,5,6]
  if(head === null) return null // Check empty List
  if(head.next === null && head.val === val) return null; //Check one element valid

  let ofHead = head // 1->2

  while(head.next !== null) {
      if(ofHead !==null && ofHead.val === val) {
          ofHead = ofHead.next
      } else if(head.next.val === val){
          head.next = head.next.next
      } else {
          head = head.next
      }
  }

  return ofHead
};