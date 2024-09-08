/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function add(a, b) {
    return a + b;
  }
  
  console.log(add(5, 7)); // 12
  
  /**
   * @param {number} number
   * @return {boolean}
   */
  function isEven(number) {
    return number % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
  /** 
   * @type {{name: string, age: number, isStudent: boolean, greet: function(): void}} 
   */
  let person = {
    name: "John",
    age: 25,
    isStudent: true,
    greet: function() {
      console.log(`Привіт, мене звати ${this.name}`);
    }
  };
  
  person.greet();
  
  /** 
   * @type {number[]} 
   */
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  let evenNumbers = numbers.filter(isEven);
  console.log(evenNumbers); // [2, 4, 6, 8, 10]
  
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  let incrementedNumbers = numbers.map(num => num + 1);
  console.log(incrementedNumbers);
  
  /**
   * @param {number[]} arr
   * @return {number}
   */
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  console.log(findMax(numbers)); // 10
  
  /**
   * @param {number} n
   * @return {number}
   */
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120
  
  /**
   * @param {string} str
   * @return {boolean}
   */
  function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  function subtract(a, b) {
    return a - b;
  }
  
  console.log(subtract(10, 4)); // 6
  
  /** 
   * @type {string[]} 
   */
  let fruits = ["Apple", "Banana", "Orange"];
  
  /**
   * @param {string[]} arr
   * @param {string} fruit
   * @return {string[]}
   */
  function addFruit(arr, fruit) {
    arr.push(fruit);
    return arr;
  }
  
  console.log(addFruit(fruits, "Mango"));
  
  /**
   * @param {string[]} arr
   * @param {string} fruit
   * @return {string[]}
   */
  function removeFruit(arr, fruit) {
    let index = arr.indexOf(fruit);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  console.log(removeFruit(fruits, "Banana"));
  
  /**
   * @param {number} a
   * @return {number}
   */
  function square(a) {
    return a * a;
  }
  
  console.log(square(5)); // 25
  
  /** 
   * @type {boolean} 
   */
  let isActive = true;
  
  /**
   * @param {boolean} status
   * @return {string}
   */
  function checkStatus(status) {
    return status ? "Active" : "Inactive";
  }
  
  console.log(checkStatus(isActive)); // Active
  
  /** 
   * @type {number[]} 
   */
  let moreNumbers = [10, 20, 30, 40, 50];
  
  /**
   * @param {number[]} arr
   * @return {number}
   */
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumArray(moreNumbers)); // 150
  
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  function multiply(a, b) {
    return a * b;
  }
  
  console.log(multiply(6, 7)); // 42
  
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  function doubleArray(arr) {
    return arr.map(num => num * 2);
  }
  
  console.log(doubleArray(numbers)); // [2, 4, 6, 8, ...]
  
  /**
   * @param {string} str
   * @return {string}
   */
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  
  /**
   * @param {number[]} arr
   * @return {number}
   */
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  console.log(findMin(numbers)); // 1
  
  /** 
   * @type {{firstName: string, lastName: string, age: number}} 
   */
  let user = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
  };
  
  /**
   * @param {{firstName: string, lastName: string}} person
   * @return {string}
   */
  function getFullName(person) {
    return person.firstName + " " + person.lastName;
  }
  
  console.log(getFullName(user)); // "Jane Doe"
  
  /** 
   * @type {string[]} 
   */
  let colors = ["Red", "Green", "Blue"];
  
  /**
   * @param {string[]} arr
   * @param {string} color
   * @return {boolean}
   */
  function containsColor(arr, color) {
    return arr.includes(color);
  }
  
  console.log(containsColor(colors, "Green")); // true
  
  /**
   * @param {string[]} arr
   * @return {string[]}
   */
  function sortColors(arr) {
    return arr.sort();
  }
  
  console.log(sortColors(colors)); // ["Blue", "Green", "Red"]
  
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  console.log(filterOddNumbers(numbers)); // [1, 3, 5, 7, 9]
  
  /** 
   * @type {Array<{name: string, score: number}>} 
   */
  let students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 70 }
  ];
  
  /**
   * @param {Array<{name: string, score: number}>} arr
   * @return {number}
   */
  function averageScore(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].score;
    }
    return total / arr.length;
  }
  
  console.log(averageScore(students)); // 80
  