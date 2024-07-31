// Part 1: Thinking Functionally

// Function to take an array of numbers and return the sum
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to take an array of numbers and return the average
function averageArray(numbers) {
    const total = sumArray(numbers);
    return total / numbers.length;
}

// Function to take an array of strings and return the longest string
function longestString(strings) {
    return strings.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}

// Function to take an array of strings and a number, and return an array of the strings that are longer than the given number
function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

// Function to take a number, n, and print every number between 1 and n without using loops (using recursion)
function printNumbers(n) {
    function recursivePrint(current) {
        if (current > n) return;
        console.log(current);
        recursivePrint(current + 1);
    }
    recursivePrint(1);
}