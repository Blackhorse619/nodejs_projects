// const validator =require('validator')
const notes = require ('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')


// Create add command
yargs.command({
  command: 'add',
  description: 'Add a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.addNote(argv.title,argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  description: 'Remove a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  description: 'List your notes!',
  handler: function(argv){
    notes.listNotes()
  }
})

// Create read command
yargs.command({
  command: 'read',
  description: 'Read a note!',
  handler: function(){
    console.log('Reading all the note.')
  }
})


yargs.parse()
