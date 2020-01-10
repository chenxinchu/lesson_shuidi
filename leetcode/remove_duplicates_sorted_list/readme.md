##  删除有序数组中的重复项

读题:sortedArr[1,1,2,3],不使用额外空间 O(1)
删除重复数据，return length 3


- 一次遍历
  res[] 空间复杂度O(n)
  for 
  排好序，后面的项一定会大于前一项 如果相等就原地删除
  return length
  抽象，数理逻辑
- 两个指针 pre cur 
  cur 一直往前跑 一次循环的每一项遍历
  pre 后面追
  per cur arr 前一个，后一个
  不等于时 pre+1
  相等时 pre不走
  如果cur pre不一样，那么pre +1 ，值为cur

- 快慢指针
  1. 一次循环 cur++ 
  2. cur pre arr[] 不等的话，
     pre++
     相等的话 pre 不动
  3. cur 再走的时候，继续比较
     新的cur 跟旧的pre
     不等时，

- 利用数据结构，链表LinkedList
  1 1 2 1的指针指向1，让其指向2

  