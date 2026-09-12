
// 01. Isomorphic Strings

var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    let b = t[i];

    if (map1[a] && map1[a] !== b) {
      return false;
    }

    if (map2[b] && map2[b] !== a) {
      return false;
    }

    map1[a] = b;
    map2[b] = a;
  }

  return true;
};



// 02. Word Pattern

var wordPattern = function(pattern, s) {
  let words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < pattern.length; i++) {
    let a = pattern[i];
    let b = words[i];

    if (map1[a] && map1[a] !== b) {
      return false;
    }

    if (map2[b] && map2[b] !== a) {
      return false;
    }

    map1[a] = b;
    map2[b] = a;
  }

  return true;
};


// 03. Find the Difference

var findTheDifference = function(s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result = result ^ s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    result = result ^ t.charCodeAt(i);
  }

  return String.fromCharCode(result);
};


// 04. Reverse Linked List

var reverseList = function(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    let next = current.next;

    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
};


// 05. Middle of the Linked List

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};


// 06. Product of Array Except Self

var productExceptSelf = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
    }

    result.push(product);
  }

  return result;
};


// 07. Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {
  let dummy = {
    next: head
  };

  let first = dummy;
  let second = dummy;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};


// 08. Find First and Last Position

var searchRange = function(nums, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) {
        first = i;
      }

      last = i;
    }
  }

  return [first, last];
};


// 09. Permutation in String

var checkInclusion = function(s1, s2) {

  let target = s1.split("").sort().join("");

  for (let i = 0; i <= s2.length - s1.length; i++) {

    let part = s2.substring(i, i + s1.length);

    let sortedPart = part.split("").sort().join("");

    if (sortedPart === target) {
      return true;
    }
  }

  return false;
};


// 10. Find All Anagrams in a String

var findAnagrams = function(s, p) {

  let answer = [];

  let target = p.split("").sort().join("");

  for (let i = 0; i <= s.length - p.length; i++) {

    let part = s.substring(i, i + p.length);

    let sortedPart = part.split("").sort().join("");

    if (sortedPart === target) {
      answer.push(i);
    }
  }

  return answer;
};



//================ output ====================

console.log(isIsomorphic("egg", "add"));
// true

console.log(wordPattern("abba", "dog cat cat dog"));
// true

console.log(findTheDifference("abcd", "abcde"));
// e

console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// [3, 4]

console.log(checkInclusion("ab", "eidbaooo"));
// true

console.log(findAnagrams("cbaebabacd", "abc"));
// [0, 6]


