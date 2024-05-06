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
