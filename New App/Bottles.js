
var count = 100;
function allBottles() {

    while (count > 1) {




        count--;

        if (count > 1) {
            console.log(count + ' bottles of beer on the wall, ' + count + ' bottles of beer on the wall. Take 1 down, pass it around ' + (count - 1) +
            ' bottles of beer on the wall')
           
        } else {
            console.log(' No more bottles of beer on the wall ')
           
        }

    }



}
allBottles()


