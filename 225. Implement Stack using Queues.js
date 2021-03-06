/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.q = [];
    this.tempq = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    var tmp;
    while (this.q.length > 0) {
        tmp = this.q.pop();
        this.tempq.unshift(tmp);
    }
    this.q.unshift(x);

    while (this.tempq.length > 0) {
        tmp = this.tempq.pop();
        this.q.unshift(tmp);
    }

    return;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.q.length > 0) {
        return this.q[this.q.length-1];
    }
    else {
        return null;
    }

};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 /**
  * Initialize your data structure here.
  */
 var MyStack = function() {
     this.main = [];
     this.helper = [];
 };

 /**
  * Push element x onto stack.
  * @param {number} x
  * @return {void}
  */
 MyStack.prototype.push = function(x) {
     var main = this.main;
     var helper = this.helper;
     if (main.length === 0) {
         main.unshift(x);
         return;
     }

     var tmp;
     while (main.length !== 0) {
         tmp = main.pop();
         helper.unshift(tmp);
     }
     main.unshift(x);
     while (helper.length !== 0) {
         tmp = helper.pop();
         main.unshift(tmp);
     }
     return;

 };

 /**
  * Removes the element on top of the stack and returns that element.
  * @return {number}
  */
 MyStack.prototype.pop = function() {
     var main = this.main;
     return main.pop();
 };

 /**
  * Get the top element.
  * @return {number}
  */
 MyStack.prototype.top = function() {
     var main = this.main;
     return main[main.length-1];
 };

 /**
  * Returns whether the stack is empty.
  * @return {boolean}
  */
 MyStack.prototype.empty = function() {
     var main = this.main;
     return (main.length === 0);
 };

 /**
  * Your MyStack object will be instantiated and called as such:
  * var obj = Object.create(MyStack).createNew()
  * obj.push(x)
  * var param_2 = obj.pop()
  * var param_3 = obj.top()
  * var param_4 = obj.empty()
  */
