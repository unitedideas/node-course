const fs = require('fs')
const getNote = () => 'Your Notes...'

const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        console.log(chalk.green.inverse(`New note added`))
    } else {
        console.log(chalk.yellow.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const keeperNotes = notes.filter((note) => note.title !== title)
    if (keeperNotes.length < notes.length) {
        console.log(chalk.green.inverse(`${title} was removed`))
        saveNotes(keeperNotes)
    } else {
        console.log(chalk.red.inverse('No note found by that title.'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes: '))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}