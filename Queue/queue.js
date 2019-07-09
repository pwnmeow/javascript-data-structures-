
class Node{
    constructor(v){
        this.val = v;
        this.next= null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

peek(){
    console.log(this.first)
    return this.first;
}

enqueue(v){
    const newNode = new Node(v);
    if ( this.length === 0 ){
        this.first = newNode;
        this.last = newNode;
    }else{
        this.last.next = newNode;
        this.last = newNode;
    }
    this.length++;
}
dequeue(){
    if ( !this.first){
        return null
    }
    if ( this.first === this.last ){
        this.last = null;
    }
    this.first = this.first.next;
    this.length--;
}
}



const myQueue = new Queue();
myQueue.enqueue('joys');
myQueue.enqueue('hulk');
myQueue.enqueue('nope');
myQueue.enqueue('runaway');
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();