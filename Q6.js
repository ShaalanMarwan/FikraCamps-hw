/** Q6
  * Create a function that takes an array of numbers and return both
  *  the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */

 function minMax(array){
    
    var largest= 0;
    var smallest = 0 ;
    var maxMinArray = [0, 0] ;

    for (i=0; i<=largest;i++){
        if (array[i]>largest) {
            var largest=array[i];
            
        }
    }
    for (i=0; i<=largest;i++){
        if (array[i]<largest) {
            var largest=array[i];
        }
    }
    
    maxMinArray = largest + smallest ;
    
    return maxMinArray;

}

 console.log(minMax([1, 2, 3, 4, 5]));

