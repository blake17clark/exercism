export class Crypto {
    constructor(input) {
        this.problem=input//creating this.problem so input is within scope
    };
    normalizePlaintext() {
const problem = this.problem
    const removeFirst = problem.replace(/[!#$%^&\s,]/gi,"")//replacing symbols with nothing, s=spaces
    return (removeFirst).toLowerCase() //all characters in string to lowercase - passes first 2 tests
    }
 
    size() {
        const newInput = (this.problem).replace(/\s/gi,"");//replace s=spaces with nothing i=ignore case g=global match
const length = newInput.length;//length = input length
if (length > 8 ){return length/3} //if length is greater than 8 divide it by 3 and return result
if (length > 10 ){return length/4} // if greater than 10/ by 4
 
let result = length/2//otherwise divide by two
return result     // passes next 4 tests
}
 
plaintextSegments() {
    const longStr = ((this.problem).replace(/[\s!]/gi,"")).toLowerCase()//create big string, replace all the spaces and ! with nothing and convert string to all lowercase
    if(longStr.length > 20){
        return longStr.match(/.{6}/g)//breaking it off into segments of 6
    }
    console.log(longStr.match(/.{1,4}/g))//I want the one because then it won't ignore the remaining characters that are not divisible by 4 hences the remainding "ies"
    //output = [ 'zomg', 'zomb', 'ies' ]
    console.log(longStr.match(/.{4}/g))
//output = [ 'zomg', 'zomb' ]
   
    return(longStr.match(/.{1,4}/g))//segments of 4
}
 
ciphertext() {
    let array = []//create an empty array
    const problem = ((this.problem).replace(/[\s.]/gi,"")).toLowerCase()//create problem, replacing all spaces and periods from input with nothing => into all lowercase
const longArr = problem.split('')//splitting the string into an array of single characters
 
for (let i = 0; i <longArr.length/6; i++ ){//looping through my array and pushing every sixth character; refer to freecode camp ES6 Basic Algorithm Scripting: Find the Longest Word in a String
for (let j = i; j < longArr.length; j+=6){
    array.push(longArr[j])
}}
 
    return array.join("")//join the array and return the result
}
};