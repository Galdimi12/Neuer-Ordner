function bouncer(arr){
   var truthies = []
   for( var element of arr){
    if(element) truthies.push(element);
    
   }
   console.log(truthies)
}
bouncer([1, 'ate', false, 9]);