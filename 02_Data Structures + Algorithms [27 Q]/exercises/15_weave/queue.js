// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
    this.index=0;
  }

  add(record) {
    this.data.unshift(record);
    this.index++
  }

  remove() {
    if(this.data.length){
    this.index--
    return this.data.pop();
    }
  }
  peek(){
    return this.data[this.index-1]
  }
}

module.exports = Queue;
