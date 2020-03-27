// Create a new component AddNote that implements a form to capture the name, content and folder for a new Note. 
// Submit to the POST /notes endpoint on the server. 
// Add validation to ensure that the name of the note is not left blank. 
// The folder should be selected from a list of existing folders. Ensure that errors are properly handled. 
// Add a button to the note list page to invoke this new form.
// Define an error boundary component. Add this component to specific points in your component structure.
// Review each of the components that you have built so far for this project. 
// Any component that receives props from its parent should be refactored to define PropType validation.

import React, { Component } from "react";
import './AddNote.css';
import Context from './Context';
// import ValidationError from "./ValidationError";

class AddNote extends Component {
    static contextType = Context

    handleSubmit = e => {
        e.preventDefault();
        const newNote = {
            name: e.target['note-name'].value,
            content: e.target['note-content'].value,
            folderId: e.target['note-folder-id'].value,
            modified: new Date(),
        }

        this.context.addNote(newNote)
    }

    render() {
        return (
            <form className="add-note" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add a Note</h2>
                
                <label htmlFor="name">Name:</label>
                <input type="text" className="add-note-input"
                    name="note-name" id="name" />

                <label htmlFor="content">Content:</label>
                <input type="text" className="add-note-input"
                    name="note-content" id="content" />

                <label htmlFor="Folder">Folder:</label>
                <select name="note-folder-id">
                    {this.context.folders.map(folder =>
                        <option 
                        value={folder.id} 
                        key={folder.id}>{folder.name}</option>
                    )}
                </select>

                <button
                    type="submit"
                    className="save-button"
                >
                    Save
                </button>
            </form >
        )
    }
}

export default AddNote
