function checkBrackets(str) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of str) {
        if (char in bracketPairs) { // Opening bracket
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') { // Closing bracket
            const lastOpenBracket = stack.pop();
            if (!lastOpenBracket || bracketPairs[lastOpenBracket] !== char) {
                return false; // Unbalanced brackets
            }
        }
    }

    return stack.length === 0; // Check if all brackets were balanced
}

module.exports = checkBrackets;
