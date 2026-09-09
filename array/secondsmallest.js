function secondSmallest(arr) {
    let smallest = Infinity;
    let second = Infinity;

    for ( let num of arr ){
        if (num < smallest){
            second = smallest;
            smallest = num;
        } else if( num < second && num !== smallest){
            second = num;
        }
    }
    return second;
}
console.log(secondSmallest([4,8,7,6]));
