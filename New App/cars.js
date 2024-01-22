function reverseString(str) {

    var finalWord = ''
    for (i = str.length - 1; i >= 0; i--) {

        finalWord += str[i];
        finalWord += str[i];
        finalWord += str[i];
    }
    return finalWord
}
console.log(reverseString('hello'))

// i = 4 | true | str [4] = 'o' add to finalWord = o
// finalWord = oo
// finalWord = ooo