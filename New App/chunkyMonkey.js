function chunkArrayInGroup(arr, size){
    var groups = [];
    while(arr.length > 0) {
        groups.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    console.log(groups);
}

chunkArrayInGroup(['a', 'b', 'c', 'd'], 2)