## leetcode 21
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
```bash
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

### 递归法
分而治之  
if (l1.val < l2.val) l1.next就指向(l2.val < l1.next.val ? l2.val : l1.next.val)  
同理 if (l2.val <= l1.val) l2.next就指向(l1.val < l2.next.val ? l1.val : l2.next.val)  
两个元素进行比较，选出较小元素；较大元素再和另一个元素进行比较，再次选出较小元素。