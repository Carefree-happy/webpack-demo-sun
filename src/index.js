// closed interval
const search = function(nums, target) {
    let mid, left = 0, right = nums.length - 1;

    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

// left open, right-closed interval
const search2 = function(nums, target) {
    let mid, left = 0, right = nums.length;

    while (left < right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

/**
 * 704. 二分查找
 * 
 * https://leetcode.cn/problems/binary-search/description/
 */

const data = [
    {
        nums: [-1,0,3,5,9,12], 
        target: 9
    },
    {
        nums: [-1,0,3,5,9,12], 
        target: 2
    }
]

for (const item of data) {
    console.log(search(item.nums, item.target));
    console.log(search2(item.nums, item.target));
}