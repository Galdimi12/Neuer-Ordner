var score = 55
var grade;


if (score > 50 && score <= 60) {
    grade = 'E'
}
else if (score > 60 && score <= 70) {
    grade ='D'
}
else if (score > 70 && score <= 80) {
    grade = 'C'
}
else if (score > 80 && score <= 90) {
   grade = 'B'
}
else { grade = 'A'}

console.log('Grade: ' + grade)