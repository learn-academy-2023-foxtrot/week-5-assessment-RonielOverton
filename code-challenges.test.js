// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe('codedMessage',()=>{
// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

//     it('returns a string with a coded message',() =>{

//     expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

// Output  ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// Name: codedMessage
// Input: String
// Output: string
// Process: I am going to create a function that takes in a string replace certain characters in the string using .replace().
// Added a .replace for all the letters that needed changing as a chain.
// Each .replace needed a <g> for every extra letter and a <i> so it will not be case sensitive. 

// const codedMessage = (str) => {
//     console.log();
//    return str.replaceAll(/a/gi, 4 ).replaceAll(/e/gi, 3).replaceAll(/i/gi, 1).replaceAll(/o/gi, 0)
// }

// Output: Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.213 s, estimated 1 s

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('onlyContains',() => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    const filterLetterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    it('returns an array of all the words containing that particular letter', () =>{

        expect(onlyContains(filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])

        expect(onlyContains(filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//  Output: ReferenceError: onlyContains is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
// Name: onlyContains
// Input: array
// Output: array
// Process: create a function that takes in an array and returns an array with words that only contain particular letter using .includes() and if array contains words with .filter().

// const onlyContains = (letterToCheck) => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//     const newArr = fruitArray.filter((fruit) => fruit.toLowerCase().includes(letterToCheck))
//     // if(fruitArray.includes(arr) === true){
//     // }
//     return newArr

// }
// Output: Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.193 s, estimated 1 s

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('paintedLadies', () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
    it('determines whether or not the array is a "full house"', () => {
        expect(paintedLadies(hand1)).toEqual(true)
        expect(paintedLadies(hand2)).toEqual(false)
        expect(paintedLadies(hand3)).toEqual(false)
        expect(paintedLadies(hand4)).toEqual(true)
        
    })
})

// Output: ReferenceError: paintedLadies is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// Name: paintedLadies
// Input: array
// Output: boolean value
// Process: Create a function that takes in a array an checks if there a multiples of two and three using .includes()
// #### Edit: I had a few approaches for this challenge. All of them failed, I'm calling it on this one....

// const paintedLadies = (arr) => {
//    const copy = arr.slice()
//    for(let i = 0; i < arr.length; ){
//     const el = copy.slice(i, 1)[0]
//     if(copy.includes(el)){
//         copy.splice(copy.indexOf(el), 1)
//         if(copy.includes(el)){
//             return true
//         }
//     } else {
//         i++
//     }
//    }
//     return false
// }

// const paintedLadies = (arr1,arr2,arr3,arr4) =>{
//     const checkFullHouse = (arr) => {
//         return(
//             arr.includes(5) && arr.includes(3) &&
//             (arr.includes(5, 5, 5) || arr.includes(3,3, 3))
//         )
//     }
// const hands = [arr1, arr2, arr3, arr4]
    // }   


    // const paintedLadies = (arr) => {
    //     arr.sort(arr)
    //     for(let i = 0; i < arr.length; i++)
    
    // return 
    // };   
    //  const hasPair = (arr) => {
    //     for(let i = 0; i < arr.length; i++) 
            
    // }