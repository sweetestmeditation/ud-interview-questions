function evaluatePostfixExpression(expression) {
    const tokens = expression.split(' ');
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(token)) { // Check if token is a number
            stack.push(parseFloat(token));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            
            if (operand1 === undefined || operand2 === undefined) {
                throw new Error("Malformed expression: insufficient operands");
            }

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    if (operand2 === 0) {
                        throw new Error("Division by zero");
                    }
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error("Invalid operator: " + token);
            }
        }
    }

    if (stack.length !== 1) {
        throw new Error("Malformed expression: too many operands");
    }

    return stack.pop();
}

// Example usage
console.log(evaluatePostfixExpression("1 3 4 * + 2 -")); // Output: 11
console.log(evaluatePostfixExpression("3 2 1 + + 2 /")); // Output: 3
