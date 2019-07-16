const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array){
    const length = array.length;
    for (let i = 0; i < length;i++){
        let min = 1;
        let temp = array[i];
        for ( let j = 0; j< length; j++ ){
            if( array[j] < array[j+1]){
                min =j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array
}