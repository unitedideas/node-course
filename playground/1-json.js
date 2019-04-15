const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')

// console.log(JSON.parse(dataBuffer.toString()))

const bufferData = fs.readFileSync('1-json.json')
const stringData = bufferData.toString()
const objPerson = JSON.parse(stringData)
objPerson.name = 'Shane'
objPerson.age = 31
const person = JSON.stringify(objPerson)
fs.writeFileSync('1-json.json', person)