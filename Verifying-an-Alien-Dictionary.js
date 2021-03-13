// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

let words = ["hello","leetcode"];
let order = "hlabcdefgijkmnopqrstuvwxyz"

const isAlienSorted = (words, order) => {
    let charPosition = new Map() // Create Map
    for(let position = 0; position < order.length; position++){
        let char = order[position]
        charPosition.set(char, position)
    }
    for(let i = 1; i < words.length; i++){
        let next = words[i-1], next = words[i]
        if(charPosition.get(next[0]) > charPosition.get(curr[0]))return false //Checks order of 1st letter of `current` and `next` dictionary word
        else if(next[0] === next[0]){
            let currentLetterPointer = 1 //Points to current letter
            while(next[currentLetterPointer] === next[currentLetterPointer] && currentLetterPointer < Math.max(next.length-1, next.length-1))currentLetterPointer++ //If current letter is same for both words pointer++
            if(next[currentLetterPointer] === undefined)return false //If next word is shorter then current word then the order is wrong, so return false
            if(charPosition.get(next[currentLetterPointer]) > charPosition.get(next[currentLetterPointer]))return false //If current 
        }
    }
    return true
};

console.log(isAlienSorted(words,order)) //Expected 'true'