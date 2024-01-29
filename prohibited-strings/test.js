// Import the function
const containsProhibitedStrings = require('./containsProhibitedStrings.js'); // Replace 'filename.js' with the actual filename containing your function

// Define prohibited strings and usernames for testing
const prohibitedStrings = ['darn', 'heck'];
const usernames = [
    'D4RN_y0u_T0_h3ck', // Contains prohibited strings
    'myUsername123',    // Does not contain prohibited strings
    'anotherUser',      // Does not contain prohibited strings
];

// Test each username
usernames.forEach(username => {
    const containsProhibited = containsProhibitedStrings(prohibitedStrings, username);
    console.log(`Username: ${username}, Contains Prohibited Strings: ${containsProhibited}`);
});
