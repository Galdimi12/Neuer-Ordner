function bmiCalculator(weight, height){

    var bmi = weight / (height*height);
    return Math.round(bmi);

}
var value = bmiCalculator(80, 1.75);
console.log(Math.round(value))