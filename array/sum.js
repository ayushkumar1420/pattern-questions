function sum(arr){
    let total = 0;
    for ( let num of arr){
        total = total + num;
    }
    return total;
}
console.log(sum([3,2,4]));
