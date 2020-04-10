/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = Number.MAX_VALUE;
  this.items = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.items.push(x);
  if (x < this.min) {
      this.min = x;
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const val = this.items.pop();
  if (val === this.min) {
      this.min = Math.min(...this.items)
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.items[this.items.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/