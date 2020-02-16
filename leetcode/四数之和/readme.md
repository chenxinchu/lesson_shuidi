# leetcode 18

给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：
```bash
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 思路
  本题与3数之和类似，可以用类似的方法
  1. 先找出所有符合的四元组
  2. 去重

- 找出所有符合的四元组
  1. 先来两重循环，i确定第一个元素，j确定第二个元素。  
  2. 再来两个指针，L=j+1确定第三个元素，R=nums.length-1确定第四个元素
  3. L<R，遍历所有元素，

- 去重与优化
  1. 排序后，重复的可能性：
    + nums[i]==nums[i-1]
    + nums[j]==nums[j-1]
  2. 优化的地方
    - 对i层循环
      + nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target , 本层循环最小的数相加就大于target
      + nums[i]+nums[len-1]+nums[len-2]+nums[len-3] , 本层循环最大的数都小于target
    - 对j层循环
      + nums[i]+nums[j]+nums[j+1]+nums[j+2]>target 本层循环最小的数相加就大于target
      + nums[i]+nums[j]+nums[len-1]+nums[len-2] 本层循环最大的数都小于target
    - 对R L
      + nums[R]==nums[R+1] , num[L]==nums[L-1] , R--,L++  

