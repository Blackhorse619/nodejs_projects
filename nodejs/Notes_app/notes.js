const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
  return 'Your notes...'
}


//Adding a Note

const addNote = function(title,body){
  const notes = loadNotes()
  //Here funtion(note) is being executed for every object inside the array, note is like a
  //instance variable for every object value so we are taking the note.title and
  //comparing it with title parameter and if matches then returns that specific object whose
  //title value matches the title in the parameter so duplicateNotes also becomes an array of objects

  const duplicateNotes = notes.filter(function(note){
    return note.title === title
  })

  if(duplicateNotes.length === 0){
    notes.push({
      title:title,
      body:body
    })
    saveNote(notes)
    console.log(chalk.green('New Note added!'))
  }else{
    console.log(chalk.red('Note Title taken!'))
  }
}

//============================================================================================

//Removing a Note

const removeNote = function(title){
  const notes = loadNotes()
  const notesToKeep = notes.filter(function(note){
    return note.title !== title
  })

  if(notes.length > notesToKeep.length){
    console.log(chalk.green('Removing note with title '+title))
    saveNote(notesToKeep)
  }else{
    console.log(chalk.red('No note with that name found'))
  }
}

//============================================================================================

//Listing a note, here we have used arrow functions

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse('Your notes'))
  notes.forEach((note)=>{
    console.log(note.title)
  })
}


const saveNote = function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}

// Here loadNotes is basically a function where fs.readFileSync is returning the data in
//notes.json in a buffered form and then we are use toString to convert the buffer into
//an array of json (there are basically two types of json one is json of objects or normal
//json and json of arrays). Now we have to parse the dataJSON using JSON.parse this returns
//an array of objects as .parse method returns object if given object and returns an array if
//given an array.



const loadNotes = function(){
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch(e){
    return []
  }
}







//Exporting modules

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}
