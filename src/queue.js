const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #head;
  #last;
  constructor(){
    this.#head;
    this.#last;
  };
  getUnderlyingList() {
    return this.#head;
  }

  enqueue(value) {
    let link = {value, next: void 0};
    this.#last = this.#head ? this.#last.next = link
                            : this.#head      = link;
  }

  dequeue() {
    let first;
    return this.#head && ( first = this.#head.value
                         , this.#head = this.#head.next
                         , first
                         );
}
}

module.exports = {
  Queue
};
