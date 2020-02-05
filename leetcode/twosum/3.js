function ListNode(val) {
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(2);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
n1.next = n2;
n2.next = n3;
// console.log(n1);

const m1 = new ListNode(5);
const m2 = new ListNode(6);
const m3 = new ListNode(4);
m1.next = m2;
m2.next = m3;
// console.log(m1);

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(null);
  var nextRst = result;
  // 进位
  var params = 0 // 传给下一节点的值
  var val = 0 // 赋给给当前节点的值

  while (l1 || l2) {
    //如果当前节点不为空，节点值返回当前节点值，如果为空，节点值返回0，并把值赋给x,y;
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    val = (x + y + params) % 10;
    params = Math.floor((x + y + params) / 10);  //对值取整

    nextRst.next = new ListNode(val)   //新建节点
    nextRst = nextRst.next

    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
    if (params) {
      nextRst.next = new ListNode(params)
    }
    return result.next;
}
console.log(addTwoNumbers(n1,m1));