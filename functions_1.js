// Given a string and a non-negative int n, return a larger string that is n copies of the original string.


function stringTimes(str, n){
    return str.repeat(n)

}



// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.


function doMath(a, oper, b) {
    if  (isNaN(a) || isNaN(b)) {
        return false;
    } else if (oper === 'subtraction' || '-') {
        return a - b
    } else if (oper === 'addtion' || '+') {
        return a + b
    } else if (oper === 'divsion' || '/') {
        return a / b
    } else if (oper === 'multiplication' || '*') {
        return a * b
    } else
        return false


}



// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and - including the number of sides.


function rollDice(sides){
    var dice = Math.floor(Math.random() * sides) + 1;
    return dice
}
rollDice(5);


// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

function getRandomNumber(max, min){
    var num = Math.floor(Math.random() * max) + min;
    return num
}getRandomNumber(5, 1);