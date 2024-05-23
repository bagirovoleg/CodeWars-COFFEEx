function digitize(n) {
    let result =[];
    
    let j = n.toString().split('');
    j.reverse();
    
    for (let i of j) {
        result.push(Number(i));
    }
    return result;
}

// function digitize(n) {
//     let result = n.toString().split('').reverse().map(Number);
//     return result;
// }

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]