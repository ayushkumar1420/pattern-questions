function rightPattern(n){
    for ( let i=0; i<5; i++){
        let row = " "
        for ( let j=0; j<i; j++){
            row += row + "*"
        }
        console.log(row);
    }
}
console.log(rightPattern(5))