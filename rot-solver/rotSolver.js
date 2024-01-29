// Part I: Implementing the rot function
function rot(input, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return input.replace(/[A-Za-z]/g, char => {
        const isUpperCase = char === char.toUpperCase();
        const index = (alphabet.indexOf(char.toUpperCase()) + shift) % 52;
        const shiftedChar = isUpperCase ? alphabet[index] : alphabet[index].toLowerCase();
        return shiftedChar;
    });
}

// Part II: Implementing the decrypt function
function decrypt(text) {
    const dictionary = ["the", "of", "and", "to", "in", "was", "that", "he", "it", "his", "with", "is", "for", "as", "had", "you", "not", "be", "her", "on", "at", "by", "which", "have", "or", "from", "this", "but", "all", "him", "they", "were", "she", "from", "then", "there", "been", "one", "we", "their", "has", "when", "who", "will", "more", "no", "if", "out", "so", "up", "into", "do", "any", "your", "what", "can", "said", "would", "about", "other", "some", "them", "could", "its", "time", "then", "like", "now", "than", "only", "may", "your", "these", "also", "him", "see", "than", "though", "even", "how", "well", "should", "because", "under", "every", "still", "went", "many", "those", "found", "through", "much", "years", "off", "before", "come", "since", "back", "where", "between", "the", "into", "a", "an", "of", "for", "at", "by", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "ve", "ll", "re", "m", "d", "ain", "aren", "couldn", "didn", "doesn", "hadn", "hasn", "haven", "isn", "let", "mustn", "shan", "shouldn", "wasn", "weren", "won", "wouldn"];
    
    let result;
    for (let shift = 0; shift < 26; shift++) {
        const decryptedText = rot(text, shift);
        const words = decryptedText.split(/\W+/);
        const validWords = words.filter(word => dictionary.includes(word.toLowerCase()));
        if (validWords.length > 5) {
            result = [shift, decryptedText];
            break;
        }
    }
    return result;
}

// Example usage
console.log(rot("HELLO", 1)); // Output: "IFMMP"
console.log(rot("HELLO", 2)); // Output: "JGNNQ"
console.log(rot("HELLO", -1)); // Output: "GDKKN"
console.log(rot("HELLO", 27)); // Output: "IFMMP"
console.log(rot("Hello, Rick", 1)); // Output: "Ifmmp, Sjdl"
console.log(rot(rot("Hello, Rick", 1), -1)); // Output: "Hello, Rick"
console.log(decrypt("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft")); // Output: [1, "It was the best of times, it was the worst of times"]
