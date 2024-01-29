function containsProhibitedStrings(prohibitedStrings, username) {
    // Convert username and prohibited words to lowercase
    const lowerUsername = username.toLowerCase();
    const lowerProhibitedStrings = prohibitedStrings.map(word => word.toLowerCase());

    // Define letter substitutions
    const substitutions = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0'
    };

    // Function to apply substitutions to a string
    function applySubstitutions(str) {
        return str.replace(/[aeio]/g, match => substitutions[match]);
    }

    // Check if username contains any prohibited string
    for (const word of lowerProhibitedStrings) {
        const modifiedWord = applySubstitutions(word);
        if (lowerUsername.includes(modifiedWord)) {
            return true;
        }
    }

    return false;
}

// Export the function to use it in other files
module.exports = containsProhibitedStrings;
