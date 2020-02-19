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


var removeNthFromEnd = function (head, n) {
  let perHead = new ListNode(-1);
  perHead.next = head;
  let fast = perHead;
  let slow = perHead;
  while (n != 0){
    fast=fast.next;
    n--;
  }
  console.log(fast);
  while(fast.next){
    fast=fast.next;
    slow=slow.next;
  }
  slow.next=slow.next.next;
  return perHead.next;

  
};
console.log(removeNthFromEnd(a1, 2));

