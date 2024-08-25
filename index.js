// 1) README.md file with the instructions

// 2) Show coding logic and unit test Permutations (Choose your the most skilled)
// your task is to create all permutations of a non-empty input string and remove duplicates, if present.
// 	Create as many "shufflings" as you can!

const cal = (arr, data = '', result = []) => {
    if (arr.length === 0) {
        result.push(data)
        return result
    }

    for (let i = 0; i < arr.length; i++) {
        const current = arr.slice()
        const next = current.splice(i, 1)
        cal(current, data + next, result)
    }

    return result
}

const getShuffling = (str) => [...new Set(cal(str.split('')))]

// Examples
console.log(getShuffling('a'));    // ['a']
console.log(getShuffling('ab'));   // ['ab', 'ba']
console.log(getShuffling('abc'));  // ['abc','acb','bac','bca','cab','cba']
console.log(getShuffling('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


// 3) Show coding logic and unit test Find the odd int (Choose your the most skilled)
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const findOdd = (arr) => arr.reduce((acc, num) => acc ^ num, 0)

// Examples
console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4


// 4) Show coding logic and unit test Count the smiley faces! (Choose your the most skilled)
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// - Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// - A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// - Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

const countSmileys = (arr) => {
    const valid = [':)', ':D', ';-D', ':~)']
  
    return arr.filter(item => valid.includes(item)).length
  }
  
  // Examples
  console.log(countSmileys([':)', ';(', ';}', ':-D'])); // should return 1;
  console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // should return 0;
  console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;


