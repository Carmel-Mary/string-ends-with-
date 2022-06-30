//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

//SOLUTION 1
function solution(str, ending){
    return str.endsWith(ending); }

  

//SOLUTION 2
  const solution = (str, ending) => str.endsWith(ending);

//SOLUTION 3
function solution(str, ending){
    return str.substr(-ending.length) == ending;
  }