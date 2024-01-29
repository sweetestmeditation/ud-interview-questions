// Import the function
const checkBrackets = require('./checkBrackets');

// Define strings of brackets for testing
const strings = [
    "{[()]}",
    "{}[]()",
    "[(){()}]",
    "{[(])}",
    "{}][()",
    "[(){()}"
];

// Test each string
strings.forEach((str, index) => {
    console.log(`String ${index + 1}: "${str}" → ${checkBrackets(str)}`);
});
