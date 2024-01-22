function whosPaying(names) {

    /******Don't change the code above*******/
    var friends = ['Angela', 'Ben', 'Jenny', 'Michel', 'Chloe'];


    var numberOfPeople = friends.length;
    var randomPersonPosition = Math.floor(Math.random()* numberOfPeople);
    var randomPerson = friends[randomPersonPosition];

    return randomPerson + ' is paying for lunch today!';
} 

console.log(whosPaying(13));