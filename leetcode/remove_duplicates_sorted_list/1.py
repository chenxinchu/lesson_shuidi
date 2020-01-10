from typing import List


class Solution:
    def removeDuplicates(slef, nums: List[int]) -> int:
        if nums:
            slow = 0
            for fast in range(1, len(nums)):
                if nums[fast] != nums[slow]:
                    slow += 1
                    nums[slow] = nums[fast]
            return slow+1
        else:
            return 0


x = Solution()
print(x.removeDuplicates([1, 1, 2, 3]))

print('----------------')
print(len([1, 2, 3]))
print(range(1, len([1, 1, 3])))

print('----------------')
for i in range(1, 10):
    print(i)
