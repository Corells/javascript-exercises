/**
 * 
 * @param {string} str 
 * @returns 
 */
const palindromes = function (str) {
    str = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "")

    return str === str.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
