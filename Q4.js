// done 
/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */


 function HowManyLetters(word) {
    if(word){
        var obj={};
        for(let x = 0; x < word.length; x++) {
            
            if(obj[word[x]]){
               obj[word[x]] ++;
            }else{
                obj[word[x]] = 1;
            }
            
            // obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
        }
        return obj;
    }
}
 console.log(HowManyLetters("kkssffoos"));


//  function HowManyLetters(word) {
//     var obj={}
    
//     for(x = 0; x < word.length; x++) {
//         var l = word.charAt(x);
//         obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
//     }
//     return obj;
//  }
//  console.log(HowManyLetters("kkssffoos"));


