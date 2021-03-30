/**
 * @param {number} capacity
 */
 class LRUCache {
    constructor(capacity) {
      this.size = capacity;
      this.cache = new Map(); // key -> ListNode
      this.firstNode = new ListNode(0);
      this.lastNode = new ListNode(0);
      this.firstNode.next = this.lastNode;
      this.lastNode.prev = this.firstNode;
    }
    get(key) {
      if (!this.cache.has(key)) return -1;
      const targetNode = this.cache.get(key);
      this.removeNode(targetNode);
      this.addNode(targetNode);
      return targetNode.val;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        const targetNode = this.cache.get(key);
        this.removeNode(targetNode);
      }
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this.addNode(newNode);
      if (this.cache.size > this.size) {
        const lastNode = this.lastNode.prev;
        this.cache.delete(lastNode.key);
        this.removeNode(lastNode);
      }
    }
  
    addNode(node) {
      const nextNode = this.firstNode.next;
      this.firstNode.next = node;
      node.prev = this.firstNode;
      node.next = nextNode;
      nextNode.prev = node;
    }
  
    removeNode(node) {
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
  }
  
  function ListNode(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
  