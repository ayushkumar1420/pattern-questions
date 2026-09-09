function evenodd(arr) {
    let even = 0;
    let odd = 0;
    for ( let num of arr){
        if ( num%2 === 0){
            even++
        } else {
            odd++
        }
    }
    return { even, odd };
}
console.log(evenodd([2,3,5,4,6,9]));
