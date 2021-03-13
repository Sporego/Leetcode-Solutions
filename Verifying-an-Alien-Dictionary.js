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
    let charPosition = new Map()
    for(let position = 0; position < order.length; position++){
        let char = order[position]
        charPosition.set(char, position)
    }
    for(let i = 1; i < words.length; i++){
        let prev = words[i-1], curr = words[i]
        if(charPosition.get(prev[0]) > charPosition.get(curr[0]))return false
        else if(prev[0] === curr[0]){
            let pointer = 1
            while(prev[pointer] === curr[pointer] && pointer < Math.max(prev.length-1, next.length-1))pointer++
            if(curr[pointer] === undefined)return false
            if(charPosition.get(prev[pointer]) > charPosition.get(curr[pointer]))return false
        }
    }
    return true
};

console.log(isAlienSorted(words,order))