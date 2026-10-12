function average(n){
    if (n.length === 0) return undefined;
    for (let i=0; i<n.length; i++){
        avg += n[i]
    }
    return avg/n.length
}
console.log(average([]));
