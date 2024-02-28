/*
You will be given a string and your task is to check if it is possible to 
convert that string into a palindrome by removing a single character.

If the string is already a palindrome, return "OK". If it is not, 
and we can convert it to a palindrome by removing one character, 
then return "remove one", otherwise return "not possible". 

The order of the characters should not be changed.

For example:
  solve("abba") = "OK". -- This is a palindrome
  solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
  solve("abbaab") = "not possible". 
*/


// Solution

function solve(s) {
  if (s === s.split('').reverse().join('')) {
    return 'OK'
  }
  for (let i=0;i<s.length;i++) {
    let strArr = s.split('')
    strArr.splice(i, 1)

    if (strArr.join('') === strArr.reverse().join('')) {
      return "remove one"
    }
  }
  return 'not possible'
};

// or

const solve = (str) => {
  if (isPalindrome(str)) {
    return 'OK';
  }
  return [...str].some((_, i) => {
    const modified = str.slice(0, i) + str.slice(++i);
    return isPalindrome(modified);
  }) ? 'remove one' : 'not possible';
};

const isPalindrome = (str, len = str.length) => {
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};