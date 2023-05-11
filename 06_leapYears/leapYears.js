const leapYears = function(year) {
    let isALeapYear = false;
    if(year % 4 !== 0 ){
        return isALeapYear;
    }else if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0){
        return isALeapYear;
    }else {
        isALeapYear = true;
        return isALeapYear;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
