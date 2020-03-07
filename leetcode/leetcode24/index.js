function ListNode(val) {
	this.val = val;
	this.next = null;
}
var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
n1.next=n2
n2.next=n3
n3.next=n4
console.log(n1);

var swapPairs = function (head) {
	if(head==null) return null
	var h = new ListNode(-1);
	h.next = head;
	var L=h,M=head;
	if(head.next==null) return head
	var R=head.next;
	while(M!=null && M.next!=null){
		M.next=R.next;
		R.next=M;
		L.next=R;

		L=M;
		M=L.next;
		L.next=R;
		if(M!=null){
			R=M.next;
		}
	}
	return h.next;
};
console.log(swapPairs(n1));
