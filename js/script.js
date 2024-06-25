// target the form

const noteForm = document.querySelector('#note-form');

// target the note header h3

const noteHeader = document.querySelector('.note-header');

function getNotes() {
    const rawNotes = localStorage.getItem('notes');
    const notes = JSON.parse(rawNotes) || [];

    return notes;
}

// a function that is called when the form is submitted

function createNote(eventObj) {
    eventObj.preventDefault();
    // grab the note input element

    const noteInput = document.querySelector('#note-input');

    // get the value (what they type into the box)

    const noteText = noteInput.value;

    // create a date value object

    const dateObj = new Date();

    // get the month from the month for the date object

    const month = dateObj.getMonth() + 1;

    // get the day from date object

    const date = dateObj.getDate();

    // get the year

    const year = dateObj.getFullYear();

    // const objHours = dateObj.getHours();

    // const hour = objHours > 12 ? objHours - 12 : objHours;

    // TODO: if dateObj minutes values is less than 10 then add a 0 before the minutes, otherwise just use the object minutes

    

    // const minutes = dateObj.getMinutes();
    // Combine all of those values into a string that looks like this - 6/24/2024
    // const dateStr = month + '/' + date + '/' + year;
    const dateStr = `${month}/${date}/${year}` 
    // ${ hour }:${ minutes }`;
    // create an object value with the note text and the current date
    // the object should have 2 properies - text(noteText) & date(dateStr)

    const noteObj = {
        text: noteText,
        date: dateStr
    };

    // console.log(noteObj);

    // use my getNotes function to retrieve the notes

    const notes = getNotes();


    // || = or [] we need an array

    // push the noteObj to the notes array
    
    notes.push(noteObj);
    const jsonArray = JSON.stringify(notes);

    // save the notes array to localStorage

    localStorage.setItem('notes', jsonArray);

    noteInput.value = '';

    outputNotes();

}

function outputNotes() {
    // retrieve the raw notes array from local storage

    const notes = getNotes();
    // target main container element
    const container = document.querySelector('.container')
    // Loop over each obj in the array & output an article element into our main container for each object

    if (notes.length) {
        noteHeader.innerText = 'Your Notes:';
    }

    container.innerHTML = '';
    for (const noteObj of notes) {
        container.insertAdjacentHTML('beforeend', `
            <article class="note">
            <p class="note-text">${noteObj.text}</p>
            <p class="note-date">added:${noteObj.date}</p>
        </article>
            `);

    }
}

outputNotes();


// Set up any necessary event listener that should be listening when the page loads

noteForm.addEventListener('submit', createNote);



