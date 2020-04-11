/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // we have to explicitly set maxDiameter to 0 because, it looks like, 
    // leetcode preserves value of global variables between tests
    maxDiameter = 0;
    traverseTree(root);
    return maxDiameter;
};

var maxDiameter = 0;

var traverseTree = function(node) {
    if (node == null) {
        return -1;
    }
    
    let lh = traverseTree(node.left);
    let rh = traverseTree(node.right);
    
    if (lh + rh + 2 > maxDiameter) {
        maxDiameter = lh + rh + 2;
    }
    
    return Math.max(lh, rh) + 1;
}