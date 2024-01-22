
function getIndexToInt(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    })
    
    for(var i = 0; i < arr.length; i++){
        if(num <= arr.length){
            return i
        }
       
    }
    
    return arr.length 
}
getIndexToInt([40, 60, 5], 50);


