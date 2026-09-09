function squarePattern(num){
    let row = ""
    for ( let i=0; i<num; i++){
        for ( let j=0; j<num; j++){
            row += "* ";
        }
        row += "\n";
    }
    return row;
}
console.log(squarePattern(5));
