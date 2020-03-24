import React, { Component } from 'react';
import Note from './Note';
import Context from './Context';

class NoteListMain extends Component {
    static contextType = Context
    render() {
        const folderId = this.props.match.params.folderId
        if(!folderId) return null;
        const { folders, notes } = this.context;
        const selectedFolder = folders.find(folder => folder.id === folderId)
        const notesInFolder = notes.filter(note => {
            return note.folderId === selectedFolder.id;
        });
        return (
            <section className="note-list-main-container">
                <ul className="note-list">
                    {notesInFolder.map(note =>
                        <li className="note-item" key={note.id}>
                            <Note
                                id={note.id}
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