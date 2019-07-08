class HashTables {
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key){
        let hash = 0;
        for (let i = 0 ; i <key.length; i++){
            hash = (hash + key.charCode(i)*i) % this.data.length
        }
        return hash;
    }
    set(key, value){
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data
    }

    get(key){
        let address = this._hash(key);
        const currentBuscket = this.data[address];
        if (currentBuscket.length){
            for(let i=0; i<currentBuscket.length;i++)
            {
                if( currentBuscket[i][0] == key ){
                    return currentBuscket[i][1]
                }
            }
        }
        return undefined;
    }
    keys(){
        const keysArray = [];
        for ( let i=0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0])
            }
        }return keysArray
    }
}

const myHashtable = new HashTables(50);
myHashtable.set('grapes',10000)