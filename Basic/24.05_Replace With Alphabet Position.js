function alphabetPosition(text) {
  const result = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Przechodzimy przez wszystkie litery
  for (let i = 0; i < text.length; i++) {
    const smallText = text[i].toLowerCase(); // Zmieniamy wszystkie litery na małe

    if (alphabet.includes(smallText)) {
      result.push(alphabet.indexOf(smallText) + 1);
    }
  }
  console.log(result.join(" "));
  return result.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock."); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight."); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
