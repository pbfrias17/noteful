import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Note extends Component {
    render() {
        return (
            <div className="note-container">
                <h3>
                    <Link to={`/notes/${note.id}`} className="note-name">{note.name}</Link>
                </h3>
                <p className="modified">{note.modified}</p>
                <button type="button" className="delete-note">Delete Note</button>
            </div>
        )
    }
}

export default Note;