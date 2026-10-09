function invertedRight(n){
    for ( let i=0; i<n; i++){
        let row = "";
        for ( let j=1; j<n+1; j--){
            row = row + "*";
        }
        console.log(row)
    }
}
console.log(invertedRight(5))