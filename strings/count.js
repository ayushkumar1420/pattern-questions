function countVowelsConsonants(str){
    let vowels = 0;
    let consonants = 0;
    for ( let char of str.toLowerCase()) {
        if ("aeiou".includes(char)){
            vowels++;
        } else if ( char >= "a" && char <= "z"){
            consonants++;
        }
    }
    return { vowels, consonants }
}
console.log(countVowelsConsonants("ayush"));
