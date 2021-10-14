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
const { assert } = require('chai');
const { testOptional, ListNode } = require('../extensions/index.js');
const removeKFromList = require('../src/st-remove-from-list.js');
console.log('1234');
//it.optional = testOptional;
let l = [3, 1, 2, 3, 4, 5];
let k = 3;


function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
  
      return new ListNode(cur);
    }, null);
  }
const f = function removeKFromList( list, k ) {
 console.log('eqweeq=',list);
    const nodes = [];

    let tmp = list;

    while (tmp) {
        if(tmp.value!==k){
     nodes.push(tmp.value);
        }
       tmp = tmp.next;
  }
   console.log('nn=',nodes);
    
    return arrK;

 }
 ll=convertArrayToList(l);
console.log('ll=',ll);
f(ll , k);
an=convertArrayToList([1, 2, 4, 5]);
console.log('an=',an);