// function quickSort(arr){
//        if(arr.length <= 1){
//         return arr;
//        }
//        let pivot = arr[arr.length - 1]
//        let left = []
//        let right = []

//        for ( let i=0; i<arr.length-1; i++){
//         if( arr[i] < pivot ){
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//        }
//        return [ ...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort([5,6,4,7,6,8,3,0,2,9]));


function quickSort(num){
    if (num.length <= 1){
        return num;
    }

    let pivot = num[num.length-1]
    let left = []
    let right = []

    for ( let i=0; i<num.length-1; i++){
        if (num[i] < pivot){
            left.push(num[i])
        } else {
            right.push(num[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4,5,2,5,7,8,9,1]));
