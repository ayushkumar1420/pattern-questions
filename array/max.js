function largestElement(array) {
    let max = array[0];
    for ( let i=1; i<array.length; i++){
        if ( array[i] > max){
            max = array[i];
        }
    }
    return max;
} 
console.log(largestElement([4,5,3,6,7,8]));
