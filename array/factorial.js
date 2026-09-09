// // recursion method
// function factorial(n){
//     if(n==1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5));

//loop method
function factorial(n){
    let fact = 1;
    for ( let i=1; i<n+1; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));
