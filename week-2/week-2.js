
// Q1
// Create a function that returns an array of strings sorted by length in ascending order.
// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []

function sortByLength(arr){
  for (let j in arr) {
      for (let i in arr){
        if ( arr[i].length > arr[j].length){
          let temp = arr[j] ;
          arr[j] = arr[i];
          arr[i] = temp;
    }
    
  } } return arr;
} console.log(sortByLength(["apple", "pie", "shortcake"]))

// Q2
// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:
// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(arr){
    for (let j in arr) {
      for (let i in arr){
        if ( arr[i].price > arr[j].price){
          let temp = arr[j] ;
          arr[j] = arr[i];
          arr[i] = temp;
    }
    
  } } return arr;
} 
 drinks = [
   {name: "lemonade", price: 50},
   {name: "lime", price: 10}, 
   {name: "lemonade", price: 9},
   {name: "lime", price: 60},
]
console.log(sortDrinkByPrice(drinks))

// Q3
// Write a function that converts an object into an array, 
// where each element represents a key-value pair in the form of an array.
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(dict){
  Arr = []
  for ( let key in dict){
    Arr.push([key,dict[key]]);
  } 
return Arr 
}
console.log(toArray({ a: 1, b: 2 }))

// Q4
// Create a function that takes an object and returns the keys and values as separate arrays. 
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function keysAndValues(dict){
  let dict2 = Object.keys(dict).sort(); 
  arrءKey=[];
  arrValue=[];
  for (let key in dict2){
    arrءKey.push(dict2[key]);
    arrValue.push(dict[dict2[key]]);
  }
return [arrءKey,arrValue]
}
console.log(keysAndValues({ a: "Apple", c: "Google" ,b: "Microsoft"}))

// Q5
// Create a function that takes in a year and returns the correct century.
// Examples
// century(1756) ➞ "18th century"
// century(1555) ➞ "16th century"
// century(1000) ➞ "11th century"
// century(1001) ➞ "11th century"
// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

function century(year){
  let century ;
  if (year <1000){ return "the year will be between 1000 and 2010"}
    else if ( year ==1000) { return "10th century";}
      else   if ( year >=1001 && year <=1100) {  return "11th century"; }
        else   if ( year >=1101 && year <=1200) { return "12th century"; }
          else   if ( year >=1201 && year <=1300) {return "13th century"; }
            else   if ( year >=1301 && year <=1400) {return "14th century"; }
              else   if ( year >=1401 && year <=1500) {return "15th century"; }
                else   if ( year >=1501 && year <=1600) {return "16th century"; }
                  else   if ( year >=1601 && year <=1700) {return "17th century"; }
                    else   if ( year >=1701 && year <=1800) {return "18th century"; }
                      else   if ( year >=1801 && year <=1900) {return "19th century"; }
                        else   if ( year >=1901 && year <=2000) {return "20th century"; }
                          else   if ( year >=2001 && year <=2010) {return "21th century"; }
}
console.log(century(1900))

// Q6
// Number of Arrays in an Array
// Return the total number of arrays inside a given array.
// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1
// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
// numOfSubbarrays([1, 2, 3]) ➞ 0

function numOfSubbarrays(arr){
  count = 0;
  for ( let i in arr){
    if ( typeof arr[i] =='object'){
      count+=1;
    }
  } 
  return count
}
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3],'sarah']))

// Q7
// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. 
// Create a function that takes an array and returns the sum of all numbers in the array.
// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

function numbersSum(arr){
  let sum=0;
  for (let i of arr){
    if ( typeof i == 'number'){
      sum+=i;
    }
  }
  return sum
}
console.log(numbersSum([1, 2, 3, 4, 5, true]))


// Q8 Write a program to validate if the number is from multiples of 2 .
// ex: console.log(isMultiplesOfTwo(2))     output: true
// ex: console.log(isMultiplesOfTwo(512))     output: true
// ex: console.log(isMultiplesOfTwo(513))     output: false
// ex: console.log(isMultiplesOfTwo(255))     output: false

function isMultiplesOfTwo(num){
  let result = (num % 2 == 0)? true : false ;
  return result;
}
console.log(isMultiplesOfTwo(254))
