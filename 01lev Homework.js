
  //Given an array of numbers. Print frequency of each unique number. (Frequency is the
//count of particular element divided by the count of all elements)
let arr = [1, 1, 2, 2, 3];
let result = {};
arr.forEach(function(a){
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
});
for (let key in result)
 console.log ( 'Число ' + key + ' : ' + result[key] / arr.length );

 //2.Given an array of strings and numbers. Print the number of integers and the number of
//strings in the array.
 function strOrNum (arr) {
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if (typeof(arr[i]) === 'number') {
           ++count

      }
    }
    return `Numbers: ${count}, Strings: ${arr.length - count}`
   }
   console.log(strOrNum([1, '10', 'hi', 2, 3]))

  /* 4.Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ If there are several words which are the longest ones, print the
last word(words can be separated by space, comma or hyphen).*/


   function longest(str) {

    let words = str.split(' ');
    let longest = '';

    for (let i = 0; i< words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
    }
    console.log (longest(`A revolution without dancing is a revolution not worth having.`))



   */ 5.Write a function to find longest substring in a given a string without repeating characters except space character.If there are several, return the last one. Consider that all letters are lowercase.*/


    function sort (sentence) {
      string="";
      any="";
      sentencestring=sentence.split("");
      for(j=0; j<sentencestring.length; j++) {
          for(i=j; i<sentencestring.length; i++) {
              if(string.includes(sentencestring[i]))
                  break;
              else
                  string+=sentencestring[i];
           }
           if(any.length<string.length)
               any=string;
           string="";
      }
      return any;
  }
  console.log(sort(`there are no two words in the english
  language more harmful than "good job".`));

  //6.Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
//subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

  function compute(str) {
    str2 = "";
    for(let i=0; i<str.length-2; i+=3) {
        str2 = str2+str.substring(i+1,i+3)+str.charAt(i);
    }
    return str2;
}
console.log (compute(`dfgjkloyp`))

//7.Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers.If
//there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.

function filter (arr) {
    let result = [];
    for (let i=0; i< arr.length; i++) {
      if (Array.isArray(arr)) { 
        if (Math.min(arr) <0) {
           result.push(arr[i])
        } return arr[i] *=

    }else return 'No negatives' ;
    } else return 'Invalid Argument';
  }

  //8. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.
  //es es taski vra shat em tanjve verche stacvec)))

  let arr1 = [5, 9, 23, 0, -2, -1];

function getCombination(arr){
    let arr2 = [];
    if (arr1.length<3) {
       return arr1
    }
     else for(let i=0; i<arr.length; i++){
           for(let j=i; j<arr.length; j++){
            for(let k=j; k<arr.length; k++){
              if (arr[i] !== arr[j] && arr[j] !==arr[k]) {
                 arr2.push([arr[i],arr[j],arr[k]]);
              }
            }   
        }
    }
    return arr2;
}

console.log(getCombination(arr1));
