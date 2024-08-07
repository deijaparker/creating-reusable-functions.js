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

// Part 2: Thinking Methodically

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age
const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log(sortedByAge);

// Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter(person => parseInt(person.age) <= 50);
console.log(filteredByAge);

// Map the array to change the "occupation" key to "job" and increment every age by 1
const mappedData = data.map(person => {
    return {
        ...person,
        job: person.occupation,
        age: parseInt(person.age) + 1
    };
});
mappedData.forEach(person => delete person.occupation);
console.log(mappedData);

// Use the reduce method to calculate the sum of the ages
const sumOfAges = data.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log(`Sum of ages: ${sumOfAges}`);

// Part 3: Thinking Critically

// Function to take an object and increment its age field
function incrementAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age += 1;
    obj.updated_at = new Date();
}

// Function to take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyAndIncrementAge(obj) {
    const newObj = { ...obj };
    if (!newObj.age) newObj.age = 0;
    newObj.age += 1;
    newObj.updated_at = new Date();
    return newObj;
}

// Thought experiment solution to create a new Date object to avoid modifying the original object's Date
function copyAndIncrementAgeWithNewDate(obj) {
    const newObj = { ...obj };
    if (!newObj.age) newObj.age = 0;
    newObj.age += 1;
    newObj.updated_at = new Date(new Date().getTime());
    return newObj;
}