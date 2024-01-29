// Import the function
const evaluatePostfixExpression = require('./evaluatePostfixExpression.js'); // Replace 'filename.js' with the actual filename containing your function

// Define postfix expressions for testing
const expressions = [
    "1 3 4 * + 2 -", // Result: 11
    "3 2 1 + + 2 /", // Result: 3
    "2 +"            // Malformed expression
];

// Test each expression
expressions.forEach((expression, index) => {
    try {
        const result = evaluatePostfixExpression(expression);
        console.log(`Expression ${index + 1}: ${expression} = ${result}`);
    } catch (error) {
        console.error(`Expression ${index + 1}: ${expression} - Error: ${error.message}`);
    }
});
