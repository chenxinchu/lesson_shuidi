function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(n1);

var oddEvenList = function(head){
    if(!head || !head.next) return head
    // while(head.next){
    //     var next = head.next;
    //     head.next=head.next.next;
    //     head=next;
    // }
    

    // var p,q;
    // p=head,q=head.next
    // while(p.next==null||q.next==null){
    //     p.next=p.next.next;
    //     q.next=q.next.next;
    //     p=p.next;
    //     q=q.next;   
    // }
    // p.next=head.next;
    return ;
}
console.log(oddEvenList(n1));
