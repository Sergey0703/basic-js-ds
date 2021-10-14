const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
/*
 const originalLogFunction = console.log;
 let output;
 beforeEach(function(done) {
   output = '';
   console.log = (msg) => {
     output += msg + '\n';
   };
 });
 afterEach(function() {
   console.log = originalLogFunction; // undo dummy log function
   if (this.currentTest.state === 'failed') {
     console.log(output);
   }
 });
*/



function linkedList(arr){
  return arr.reduceRight((next, value) => ({value, next}), null);
}

module.exports = function removeKFromList( l, k ) {
  const nodes = [];

  let tmp = l;
  while (tmp) {
   if(tmp.value!==k){
   nodes.push(tmp.value);
   }
     tmp = tmp.next;
   }
  console.log('Lit=',nodes);
  return linkedList(nodes);
}
