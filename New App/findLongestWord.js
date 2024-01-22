


function findLongestWord(str) {

    var strSplit = str.split(' ')
    var longestWord = '';
    for (i = 0; i < strSplit.length; i++) {

        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i]
            
           
        }

    }
    console.log(longestWord.length)
   
}

findLongestWord('the quick brown fox jumped over the lazy dog');
