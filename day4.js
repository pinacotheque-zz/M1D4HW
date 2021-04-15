/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function(l1,l2){
    return l1*l2
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (n1,n2) {
    if (n1===n2){
        return (n1+n2)*3
    } else {
        return n1+n2
    }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (num1){
    calc = Math.abs(num1-19)
    if (calc>19){
        return calc*3
    } else {
        return calc
    }
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
    if ((20<=n && n<=100)|| n ===400){
        return true
    } else {
        return false
    }

}
console.log(boundary(21))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(string) {
    sentence = 'Strive' + string
    if (string.slice(0,6)=== 'Strive'){
        return sentence = string
    } else{
        return  sentence
    }
}
console.log(strivify(' gamze'))
console.log(strivify('Strive gamze'))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (number1) {
    if (number1%3=== 0 || number1 %7===0)
    return true
    else {
        return false
    }
}
console.log(check3and7(7))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (str) {
    let newWord = ""
    for (let i=str.lenght-1; i>=0 ; i--){
        newWord += str[i]
    }
    return newWord
}

reverseString('gamze')


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (stringCapital) {
    return stringCapital.charAt(0).toUpperCase() + stringCapital.slice(1).toLowerCase()
}

console.log(upperFirst('gamze guneri'))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(fullWord) {
    let slicedWord = fullWord.slice(1,-1)
    return slicedWord
}

console.log(cutString('strive'))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let arr = []
    for (let i=0; i<n+1; i++){
        arr.push(Math.random())
    }
    return arr
}

console.log(giveMeRandom(7))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/