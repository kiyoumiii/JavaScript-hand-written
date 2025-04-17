class MinMaxStack {
    constructor() {
      this.stack = [];
      this.maxStack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
  
      // Update maxStack
      if (this.maxStack.length === 0 || val >= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(val);
      }
  
      // Update minStack
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      if (this.stack.length === 0) return undefined;
  
      const val = this.stack.pop();
  
      // Update maxStack if popped value was the current max
      if (val === this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.pop();
      }
  
      // Update minStack if popped value was the current min
      if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return val;
    }
  
    getMax() {
      if (this.maxStack.length === 0) return undefined;
      return this.maxStack[this.maxStack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) return undefined;
      return this.minStack[this.minStack.length - 1];
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // 测试用例
  const stack = new MinMaxStack();
  stack.push(3);
  stack.push(5);
  stack.push(2);
  stack.push(1);
  
  console.log(stack.getMax()); // 5
  console.log(stack.getMin()); // 1
  
  stack.pop(); // 1
  console.log(stack.getMax()); // 5
  console.log(stack.getMin()); // 2
  
  stack.pop(); // 2
  console.log(stack.getMax()); // 5
  console.log(stack.getMin()); // 3
  
  console.log(stack.isEmpty()); // false
  stack.pop(); // 5
  stack.pop(); // 3
  console.log(stack.isEmpty()); // true