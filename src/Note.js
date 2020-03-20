import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Note extends Component {
    render() {
        console.log(this.props.selectedNote)
        return (
            <div className="note-container">
                {this.props.selectedNote.map(note =>
                    <li className="note-item">
                        <h3>
                            <Link to={`/notes/${note.id}`} className="note-name">{note.name}</Link>
                        </h3>
                        <p className="modified">{note.modified}</p>
                        <button type="button" className="delete-note">Delete Note</button>
                    </li>
                )}
            </div>
        )
    }
}

export default Note;