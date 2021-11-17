/*
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/*
  * Stack Class
*/
 var Stack = function() {
  this._storage = {};
  this._length = 0;

  this.push = function() {
    this._storage[this._length] = value;
    this._length++;
  };

  this.pop = function() {
    this._length--;
    let popped = this._storage[this._length];
    delete this._storage[this._length];
    return popped;
  };

  this.size = function() {
    return this._length;
  };
};

/*
  * Queue Class
*/
var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value) {
    var size = outbox.size();
    for (var i = 0; i < length; i++) {
      inbox.push(outbox.pop());
    }
    inbox.push(val);
  };

  this.dequeue = function() {
    var size = outbox.size();
    for (var i = 0; i < size; i++) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  this.size = function() {
    return outbox.size() + inbox.size();
  };
};