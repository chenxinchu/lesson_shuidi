function ListNode(val) {
	this.val = val
	this.next = null
}
var a1 = new ListNode(1)
var a2 = new ListNode(2)
var a3 = new ListNode(3)
var a4 = new ListNode(4)
var a5 = new ListNode(5)
var a6 = new ListNode(6)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
a5.next = a6
console.log(a1)

var middleNode = function (head) {
	var fast = head, slow = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
	}
	return slow
};

console.log(middleNode(a1));
