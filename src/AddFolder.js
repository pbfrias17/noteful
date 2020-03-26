// Create a new component AddFolder that implements a form to capture the name of a new folder from the user. 
// This form should submit the name of the new folder to the POST /folders endpoint on the server. 
// Ensure that any errors are properly handled. Add a button to the navigation to invoke the new form.
// Define an error boundary component. Add this component to specific points in your component structure.
// Review each of the components that you have built so far for this project. 
// Any component that receives props from its parent should be refactored to define PropType validation.

import React, { Component } from "react";
import './AddFolder.css';
import ValidationError from "./ValidationError";

class AddFolder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: "",
                touched: false
            }
        }
    }

    updateName(name) {
        this.setState({ name: { value: name, touched: true } });
    }


    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state;

        console.log('Name: ', name.value);

        // api call here?
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }
    }

    render() {
        const nameError = this.validateName();

        return (
            <form className="add-folder" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add Folder</h2>
                <label htmlFor="name">Name</label>
                <input type="text" className="add-folder-input"
                    name="name" id="name" />
                {this.state.name.touched && <ValidationError message={nameError} />}

                <button type="submit" className="save-button">
                    Save
                </button>
            </form >
        )
    }
}

export default AddFolder
