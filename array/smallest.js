function smallestElement (array) {
    let min = array[0];
    for ( let i=0; i<array.length; i++){
        if ( array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
console.log(smallestElement([5,4,2,6,8,1]));
