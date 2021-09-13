/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

 function BestProfit(arr) {
     var len = arr.length;
     var val = arr[len];
     for (var i = 0; i < len; i++) {
        if (arr[i] > val) {
            val = arr[i];
            // console.log("It's Monday, Ti's buy day.");
        }if (arr[i] < val) {
            val = arr[i];
            // console.log("It's Wednesday, Ti's sell day.")
        } 
     }
    return arr;

 }
 var array = [150, 146, 142, 143, 145, 144]
 console.log(BestProfit(array));