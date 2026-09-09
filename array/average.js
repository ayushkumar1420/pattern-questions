function average(arr){
    let avg = 0;
    for ( let num of arr){
        avg = avg + num;
    }
    return avg / arr.length;
}
console.log(average([1,2,3,4]));
