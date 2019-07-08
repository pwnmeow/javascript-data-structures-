let array = [1,2,0,2,4,3,3,4];

function firstRecurringChar(input){
    for( i=0; i< input.length; i++){
        for( j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                console.log(input[i]);
                return input[i];
            }
        }
    }
    return undefined;
}


firstRecurringChar(array)


function firstRecurringChar2(input){
    let map = {};
    for ( i =0; i < input.length; i++){
        if( map[input[i]] !== undefined ){
            return input[i]
        }else {
            map[input[i]] = 1;
        }
    }return undefined;

}