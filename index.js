// Code your solution here!

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    let subStr = str.substring(1, str.length);
    printString(subStr);
  } else {
    return true;
  }
}

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
  let len = str.length;
  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

function addUpTo(arr, index) {
  return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr) {
  return arr.length === 1 ? arr[0] : Math.max(arr.pop(), maxOf(arr));
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}
