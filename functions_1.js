// Given a string and a non-negative int n, return a larger string that is n copies of the original string.


function stringTimes(str, n){
    str = str + " ";

    return str.repeat(n);

}

console.log(stringTimes('test', 4));



// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and - including the number of sides.


function rollDice(sides){
    var dice = Math.floor(Math.random() * sides) + 1;
    return dice
}

console.log(rollDice(6));


// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

function getRandomNumber(max, min){
    var num = Math.floor(Math.random() * max) + min;
    return num
}

console.log(getRandomNumber(5, 1));