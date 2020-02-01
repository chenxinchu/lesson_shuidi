# 2020 名企前端面试

## 算法核心 
  + leetcode 
  + 剑指offer 

## 有效括号 leetcode20
  + 简单算法题，左括号入栈，右括号出栈  1.js  
  时间复杂度O(n)  
  空间复杂度O(n)   

  + 优化一下？  2.js  
  时间复杂度O(n)  
  空间复杂度O(1)  
    

## 最长有效括号 leetcode32
  + 困难题，暴力法  3.js  
  使用嵌套循环  
  时间复杂度O(n^2)    

  + 优化一下？动态规划 4.js  
  左右括号匹配的下标的减法  
  ())(())  最大有效长度为4  
&ensp; &ensp;-1&ensp;(&ensp;)&ensp;)&emsp;&emsp;(&ensp;(&ensp;)&ensp;)  
下标 &ensp;0 1 2&emsp;&emsp; 3 4 5 6  
&ensp;&ensp;&ensp;&ensp;  1-(-1)=2&emsp;5-3 + 6-4=4  
  时间复杂度O(n)  
  空间复杂度O(n)  

  + 继续优化？ 
  
  时间复杂度O(n)  
  空间复杂度O(1)  