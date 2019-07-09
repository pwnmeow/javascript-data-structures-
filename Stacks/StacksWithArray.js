class Stacks{
    constructor(v){
      this.data = [];
    }


insert(v){
    const newmem = v;
    this.data.push(newmem);
}

remove(){
    this.data.pop();
    this.length--;
}

peek(){
    const len = this.data.length - 1 ;
    console.log(this.data[len]);
    return this.data[len];
}

}



let lol = new Stacks();

lol.insert('google')
lol.insert('node')
lol.insert('java')
lol.insert('cpp')
lol.insert('udemy')
lol.peek();
