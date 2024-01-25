function calculateMinCost() {
  var cost = 0;
  var inputArray = document.getElementById("rope-lengths").value;

  inputArray = inputArray.split(',').map(Number);

  // Use a min heap to efficiently find the two smallest ropes
  var heap = new MinHeap();
  for (let i = 0; i < inputArray.length; i++) {
    heap.insert(inputArray[i]);
  }

  // Continue until there is only one rope left in the heap
  while (heap.size() > 1) {
    // Extract the two smallest ropes from the heap
    var rope1 = heap.extractMin();
    var rope2 = heap.extractMin();

    // Calculate the sum and add it to the cost
    var sum = rope1 + rope2;
    cost += sum;

    // Insert the sum back into the heap
    heap.insert(sum);
  }

  document.getElementById("result").innerHTML = cost;
}

// MinHeap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  size() {
    return this.heap.length;
  }

  heapifyUp() {
    let current = this.size() - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.heap[current] >= this.heap[parent]) {
        break;
      }

      this.swap(current, parent);
      current = parent;
    }
  }

  heapifyDown() {
    let current = 0;

    while (true) {
      const leftChild = 2 * current + 1;
      const rightChild = 2 * current + 2;
      let smallest = current;

      if (leftChild < this.size() && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < this.size() && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest === current) {
        break;
      }

      this.swap(current, smallest);
      current = smallest;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

