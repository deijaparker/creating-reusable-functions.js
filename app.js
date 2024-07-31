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