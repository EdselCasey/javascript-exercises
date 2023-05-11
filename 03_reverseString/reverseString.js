const reverseString = function(string) {
    let newString = "";
    for(i = string.length - 1; i >= 0; i--) {
        let tempChar = string[i]; 
        newString += tempChar;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
