const palindromes = function (str) {
    let newStr = "";
    for(i = str.length - 1; i >= 0; i--){
        let tempChar = str[i]
        newStr += tempChar
    }
    str = str.replace(/[^a-zA-Z]/g, "")
    newStr =newStr.replace(/[^a-zA-Z]/g, "")
    if(newStr.toLowerCase() === str.toLowerCase()){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
