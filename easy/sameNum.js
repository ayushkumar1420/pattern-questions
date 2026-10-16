function sameNum(n){
    for ( let i=1; i<=n; i++){
        let row = " "
        for ( let j=0; j<i; j++){
            row += i;
        }
        console.log(row);
    }
}
console.log(sameNum(10));
