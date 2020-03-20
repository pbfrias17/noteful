import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className="note-container">
                {this.props.notes.map(note =>
                    <li className="note-item">
                        <h3>
                            <a href="#" className="note-name">{note.name}</a>
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