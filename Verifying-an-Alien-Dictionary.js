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
        let curr = words[i-1], next = words[i]
        if(charPosition.get(curr[0]) > charPosition.get(curr[0]))return false //Checks order of 1st letter of `current` and `next` dictionary word
        else if(curr[0] === next[0]){
            let pointer = 1 //Points to current letter
            while(curr[pointer] === next[pointer] && pointer < Math.max(curr.length-1, next.length-1))pointer++ //If current letter is same for both words pointer++
            if(next[pointer] === undefined)return false //If next word is shorter then next word then the order is wrong, so return false
            if(charPosition.get(curr[pointer]) > charPosition.get(next[pointer]))return false //If current 
        }
    }
    return true
};

console.log(isAlienSorted(words,order)) //Expected 'true'