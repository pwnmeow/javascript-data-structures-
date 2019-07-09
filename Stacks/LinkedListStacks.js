
class Node{
    constructor(v){
        this.val = v;
        this.next= null;
    }
}

class LinkedListStacks{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        console.log(this.top);
        return this.top;
    }
    push(v){
        const newNode = new Node(v);
        if ( this.length === 0 ){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if ( this.top ){
            const holdingPointer = this.top;
            this.top = this.top.next;
            if(this.top === this.bottom){
                this.bottom = null;
            }
            this.length--;
            console.log(this)
            return this;
        }else {
            return null;
        }
    }
}


lol.push('google');
lol.push('facebook');
lol.push('udemy');
lol.push('discord');
lol.peek();
lol.pop();
lol.pop();
lol.pop();
lol.pop();

