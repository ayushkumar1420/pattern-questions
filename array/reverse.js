// backward loop
function reverseArray(arr) {
    let result = [];

    for( let i=arr.length; i>=0; i--){
        result.push(arr[i])
    }
    return result;
}
console.log(reverseArray([1,2,3,4,5]));

// //swap (two pointer)
function reverseArray (arr){
    let left = 0;
    let right = arr.length - 1;
    
    while ( left < right ) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([2,3,4,5,6]));
