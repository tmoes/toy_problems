
/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
*/

var Node = function(value) {
  return { value: value, next: null };
};

var hasCycle = function(linkedList) {
  // TODO: implement me!
    if (linkedList.value === null || linkedList.next === null) {
        return false;
    }
    let slow = linkedList.next;
    let fast = linkedList.next.next;
    while (slow !== fast) {
        slow = slow.next;
        if (fast === null || fast.next === null) {
            return false;
        }
        fast = fast.next.next;
    }
    return true;
};