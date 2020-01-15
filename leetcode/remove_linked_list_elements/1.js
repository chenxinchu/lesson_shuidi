function ListNode(val) {
    this.val = val;
    this.next = null;
}

function removeElements(head,val){
    const dummy={ // 哨兵 哨兵往后走
        // 在链表前加一位哨兵 没有值 指针指向头节点
        next:head
    }
    let current = dummy;
    while(current && current.next){
        let next=current.next;
        if(next.val==val){
            current.next=next.next;
        }
        if(next.val!=val){
            current=next;
        }
    }
    return dummy.next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
const n6 = new ListNode(5);
const n7 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
console.log(n1);
console.log(removeElements(n1,6));