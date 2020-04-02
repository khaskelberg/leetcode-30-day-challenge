var squareSum = function(n) {
    let sum = 0;
    while (n) {
        sum = sum + (n % 10) * (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}

var isHappy = function(n) {
    let fast = slow = n;
    do {
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    } while (fast != slow);
    
    return (slow == 1);
};

console.log(isHappy(19));
