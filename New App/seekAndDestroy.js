function destroyer(arr) {

    var args = Array.from(arguments);
     args.splice(0, 1);
    var target = args;
    var results = [];
    
    for(var i = 0; i < arr.length; i++){
        if(target.indexOf(arr[i]) === -1){
            results.push(arr[i])
        }
    }
    console.log(results)
}

destroyer([1, 2, 3, 1, 2, 3],1, 2);