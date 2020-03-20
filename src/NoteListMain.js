import React, { Component } from 'react';
import Note from './Note';

class NoteListMain extends Component {
    render() {
        return (
            <section className="note-list-main-container">
                <ul className="note-list">
                    {this.props.notes.map(note =>
                        <li className="note-item">
                            <Note 
                            name={note.name}
                            modified={note.modified} />
                        </li>
                    )}
                </ul>
                <button type="button" className="add-note">Add Note</button>
            </section>
        )
    }
}

export default NoteListMain;