const chalk = require('chalk')
const fs = require('fs')

const getnotes = () => 'My Notes...'


const addnotes = (title,body) => {
    const notes = loadnotes()
    const duplicatetitle = notes.filter((note) => note.title===title)

    if(duplicatetitle.length===0){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log(notes)
        console.log(chalk.green.bold('Item added successfully'))
    }
    else{
        console.log(chalk.red.bold('Title is already in use'))
    }
}

const loadnotes = () => {
    try{
        const Buffer = fs.readFileSync('notes.json')
        const JSONdata = Buffer.toString()
        return JSON.parse(JSONdata)
    }
    catch(e){
        return []
    }
}

const savenotes = (notes) => {
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('notes.json',JSONdata)
}

const removenote = (title) => {
    const notes = loadnotes()
    flag=1
    for(i=0;i<notes.length;i++){
        if(notes[i].title===title){
            notes.splice(i,1);
            flag=0
        }
    }

    if(flag===1){
        console.log(chalk.red.bold('No item found'))
    }
    else{
        savenotes(notes)
        console.log(notes)
        console.log(chalk.green.bold('Item removed successfully'))
    }
}

const Listnote = () =>{
    const notes = loadnotes()
    if(notes.length===0){
        console.log(chalk.red.bold('No item found'))
    }
    
    else{
        console.log(chalk.yellow('Your Note'))
        for(i=0;i<notes.length;i++){
            console.log((notes[i].title))
        }
    }
}

const readnote = (title) =>{
    const notes = loadnotes()
    flag=1;
    for(i=0;i<notes.length;i++){
        if(notes[i].title===title){
            console.log(chalk.blue(notes[i].title))
            console.log((notes[i].bodyG))
            flag=0
        }
    }
    if(flag===1) console.log(chalk.red('No item Found'))
}

module.exports = {
    addnotes: addnotes,
    removenote: removenote,
    Listnote: Listnote,
    readnote: readnote
}