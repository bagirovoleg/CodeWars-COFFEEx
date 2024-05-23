function solution(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }

  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2));
  }

  console.log(result);
  return result;
}

solution("abcdef");
solution("abcde");

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']