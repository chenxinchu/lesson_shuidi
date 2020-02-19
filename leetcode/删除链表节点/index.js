function ListNode(val) {
  this.val = val;
  this.next = null;
}

var a1 = new ListNode(1);
var a2 = new ListNode(2);
var a3 = new ListNode(3);
var a4 = new ListNode(4);
var a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
console.log(a1);


var removeNthFromEnd = function (head, n) {
  let len = 0;
  let perHead = new ListNode(-1);
  perHead.next = head;
  let first = head;
  while (first) {
    len++;
    first = first.next;
  }
  console.log(len);
  len -= n;
  // console.log(first);

  first = perHead;
  while (len != 0 || first.next) {
    len--;
    first = first.next;
  }
  first.next = first.next.next;
  // console.log(head);

  return perHead.next;
};
console.log(removeNthFromEnd(a1, 2));

