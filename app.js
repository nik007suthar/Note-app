const chalk = require('chalk')
const yargs = require('yargs');

const notes = require('./notes');

//      Adding a new note
yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    builder: {
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addnotes(argv.title, argv.body)
    
})

//      deleting a note
yargs.command({
    command: 'remove',
    describe: 'Note removed',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removenote(argv.title)
    
})

//      reading a note
yargs.command({
    command: 'read',
    describe: 'You are reading a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readnote(argv.title)
})

//      Listing note items
yargs.command({
    command: 'list',
    describe: 'Listing note items',
    handler: () => notes.Listnote()
})

yargs.parse()