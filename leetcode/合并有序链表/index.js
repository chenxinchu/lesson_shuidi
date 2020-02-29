function ListNode(val) {
  this.val = val;
  this.next = null;
}
var l1 = new ListNode(1)
var l1_2 = new ListNode(2)
var l1_3 = new ListNode(4)
l1.next = l1_2
l1_2.next = l1_3
// console.log(l1)

var l2 = new ListNode(1)
var l2_2 = new ListNode(3)
var l2_3 = new ListNode(4)
l2.next = l2_2
l2_2.next = l2_3
// console.log(l2)

var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  // console.log(l1, l1.val)
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
  }
}
  console.log(mergeTwoLists(l1, l2))
