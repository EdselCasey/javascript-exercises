const sumAll = function(firstnum, secondnum) {
    let sum = firstnum;
    if(typeof firstnum !== "number" || typeof secondnum !== "number" || firstnum < 0 || secondnum < 0){
        return "ERROR"
    }
    else if(firstnum > secondnum){
        for(i = firstnum - 1; i >= secondnum; i--){
            sum += i;
        }
    }else if(firstnum < secondnum){
        for(i = firstnum + 1; i <= secondnum; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
