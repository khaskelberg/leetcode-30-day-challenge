/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let diffArr = [0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            diffArr[i+1] = diffArr[i] - 1;
        } else {
            diffArr[i+1] = diffArr[i] + 1;
        }
    }
    let dict = {};
    let maxLen = 0;
    diffArr.forEach((s, i) => {
        if (dict[s] == null) {
            dict[s] = i;
        } else {
            if (maxLen < i - dict[s]) {
                maxLen = i - dict[s];
            }
        }
    });
    return maxLen;
};
