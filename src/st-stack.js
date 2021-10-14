const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
 // const stack = [];
 constructor(){
  this.data= [];
  this.top=0;
 }
 
  push(element) {
  
    this.data.push(element);
    this.top=this.top+1;
    // remove line with error and write your code here
  }

  pop() {
    //const stack = []; 
    ///const Stack = new Stack();
    //const Stack = [];
    this.top=this.top-1;
    return this.data.pop();
    
  }

  peek() {
     return this.data[this.top-1];   
  }
}
