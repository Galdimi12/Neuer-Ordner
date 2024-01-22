

function repeatString(str, num) {
    var final = ''
    if(num < 0) return '';

    for (var i = 1; i <= num; i++) {
        final += str;
       
    }
    console.log(final + ' ')
}

repeatString('abc', 4)

