// Create a new component AddNote that implements a form to capture the name, content and folder for a new Note. 
// Submit to the POST /notes endpoint on the server. 
// Add validation to ensure that the name of the note is not left blank. 
// The folder should be selected from a list of existing folders. Ensure that errors are properly handled. 
// Add a button to the note list page to invoke this new form.
// Define an error boundary component. Add this component to specific points in your component structure.
// Review each of the components that you have built so far for this project. 
// Any component that receives props from its parent should be refactored to define PropType validation.

import React, { Component } from "react";
import './AddNote.css'
import ValidationError from "./ValidationError";

class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: "",
                touched: false
            },
            content: {
                value: "",
                touched: false
            },
            folder: {
                value: "",
                touched: false
            }
        }
    }

    updateName(name) {
        this.setState({ name: { value: name, touched: true } });
    }

    updateContent(content) {
        this.setState({
            content: { value: content, touched: true }
        });
    }

    updateFolder(folder) {
        this.setState({
            folder: {
                value: folder,
                touched: true
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, content, folder } = this.state;

        console.log('Name: ', name.value);
        console.log('Content: ', content.value);
        console.log('Folder: ', folder.value);
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }
    }

    validateContent() {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return 'Content is required';
        }
    }

    // validateFolder() {
    //     const folder = this.state.folder.value.trim();
    //     const password = this.state.password.value.trim();

    //     if (repeatPassword !== password) {
    //         return "Passwords do not match";
    //     }
    // }

    render() {
        const nameError = this.validateName();
        const contentError = this.validateContent();
        // const folderError = this.validateFolder();

        return (
            <form className="add-note" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add Note</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" className="add-note-input"
                    name="name" id="name" onChange={e => this.updateName(e.target.value)} />
                {this.state.name.touched && <ValidationError message={nameError} />}
                <label htmlFor="content">Content:</label>
                <input type="text" className="add-note-input"
                    name="content" id="content" onChange={e => this.updateContent(e.target.value)} />
                {this.state.content.touched && <ValidationError message={contentError} />}
                <label htmlFor="Folder">Folder:</label>
                <input type="text" className="add-note-input"
                    name="folder" id="folder" onChange={e => this.updateFolder(e.target.value)} />
                {/* {this.state.folder.touched && <ValidationError message={folderError} />} */}

                <button
                    type="submit"
                    className="save-button"
                    disabled={
                        this.validateName() ||
                        this.validateContent() ||
                        this.validateFolder()
                    }
                >
                    Save
                </button>
            </form >
        )
    }
}

export default AddNote
