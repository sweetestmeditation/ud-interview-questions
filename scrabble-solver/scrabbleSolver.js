const fs = require('fs');

// Function to calculate the score of a word
function calculateScore(word) {
    const letterScores = {
        'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4,
        'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3,
        'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8,
        'Y': 4, 'Z': 10
    };
    return word.toUpperCase().split('').reduce((score, letter) => score + (letterScores[letter] || 0), 0);
}

// Function to find valid words from the rack
function findValidWords(rack, wordList) {
    const validWords = [];
    const rackCount = rack.split('').reduce((count, letter) => {
        count[letter] = (count[letter] || 0) + 1;
        return count;
    }, {});

    for (const word of wordList) {
        const wordCount = word.split('').reduce((count, letter) => {
            count[letter] = (count[letter] || 0) + 1;
            return count;
        }, {});

        if (Object.keys(wordCount).every(letter => (wordCount[letter] || 0) <= (rackCount[letter] || 0))) {
            validWords.push(word);
        }
    }

    return validWords;
}

// Function to solve Scrabble
function scrabbleSolver(rack) {
    const wordList = fs.readFileSync('sowpods.txt', 'utf8').split('\n');

    const validWords = findValidWords(rack, wordList);
    const sortedWords = validWords.sort((a, b) => calculateScore(b) - calculateScore(a));

    for (const word of sortedWords) {
        console.log(`${calculateScore(word)} ${word}`);
    }
}

module.exports = scrabbleSolver;

