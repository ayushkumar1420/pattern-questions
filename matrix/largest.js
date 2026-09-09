function largestMatrix(matrix) {
    let max = matrix[0][0];
    for ( let i=0; i<matrix.length; i++){
        for ( let j=0; j<matrix[i].length; j++){
            if (matrix[i][j] > max) {
                max = matrix[i][j]
            }
        }
    }
    return max;
}
console.log(largestMatrix([
    [3,6,7],
    [9,8,4],
    [1,2,5]
]));
