/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

var Node = function(value) {
  this.value = value || null;
  this.next = null;
};

var LinkedList = function (initialValue) {
  this.head = new Node(initialValue);
  this.tail = this.head;
  this.values = {};
  if (initialValue) {
    this.values[initialValue] = true;
  }
};

LinkedList.prototype.addToTail = function (value) {
  this.values[value] = true;
  if (this.head.value === null) {
    this.head.value = value;
    this.head = this.tail;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null
  }
  let deleted = this.head.value;
  delete this.values[this.head.value];
  if (this.head === this.tail) {
    this.tail = null;
  }
  this.head = this.head.next;
  return deleted;
};

LinkedList.prototype.contains = function (value) {
  return !!this.values[value];
};