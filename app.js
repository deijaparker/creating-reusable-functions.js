// Part 1: Thinking Functionally

// Function to take an array of numbers and return the sum
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}