function ListNode(val) {
  this.val = val;
  this.next = null;
}
var n1 = new ListNode(1)
var n2 = new ListNode(4)
var n3 = new ListNode(5)
n1.next = n2
n2.next = n3

var n1 = new ListNode(1)
var n2 = new ListNode(4)
var n3 = new ListNode(5)
n1.next = n2
n2.next = n3

var m1 = new ListNode(1)
var m2 = new ListNode(3)
var m3 = new ListNode(4)
m1.next = m2
m2.next = m3

var k1 = new ListNode(2)
var k2 = new ListNode(6)
k1.next = k2


var mergeKLists = function (lists) {
  if (lists.length == 0) {
    return null
  } else if (lists.length == 1) {
    return lists[0]
  } else if (lists.length == 2) {
    return mergeTwoLists(lists[0], lists[1])
  } else {
    let middle = Math.floor(lists.length / 2)
    let left = lists.slice(0, middle)
    let right = lists.slice(middle)
    return mergeTwoLists(mergeKLists(left), mergeKLists(right))
  }
};

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

console.log(mergeKLists([n1, m1, k1]));