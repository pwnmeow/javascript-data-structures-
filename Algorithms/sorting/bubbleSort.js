let array = [5,3,1,2,4];

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);


// function bubbleSort(a){
//     const length = array.length;
//     for ( let i = 0; i < length; i++){
//         for ( let j = 0; j < length ;j++){
//             if ( a[j]  > a[j + 1]){
//                 let store = a[j];
//                 a[j] = a[j+1];
//                 a[j+1] = store;
//             }
//         }
//     }
// }
