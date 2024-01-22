function truncateString(str, num){
if(num <= 11)
console.log(str.slice(0, num) + '...');

}
truncateString('A-tisket a-tasket Agreen and yellow basket', 11);

