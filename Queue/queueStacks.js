class Node{
    constructor(v){
        this.val = v;
        this.next= null;
    }
}

class StacksQueue{
    constructor(v){
        this.data = []
    };

    enqueue(v){
        const newnode = new Node(v);
        this.data.push(newnode);
        console.log(this)
}
    dequeue(){
        this.data.splice(0,1);
    }
    peek(){
        console.log(this.data)
    }
}

let lol = new StacksQueue;
lol.enqueue('udemy');
lol.enqueue('google');
lol.enqueue('youtube');
lol.enqueue('golang');
lol.enqueue('koriala');
lol.dequeue()
lol.peek()
console.log("-----------------------------------------")
lol.dequeue()
lol.peek()
console.log("-----------------------------------------")

lol.dequeue()
lol.peek()
console.log("-----------------------------------------")

lol.dequeue()
lol.peek()
console.log("-----------------------------------------")

lol.dequeue()
lol.peek()