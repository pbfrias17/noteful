import React, { Component } from 'react';
import Note from './Note';
import Context from './Context';

class NoteListMain extends Component {
    static contextType = Context
    render() {
        const folderId = this.props.match.params.folderId
        const { folders, notes } = this.context;
        const selectedFolder = folders.find(folder => folder.id === folderId)
        const notesToDisplay  = notes.filter(note => {
          if(selectedFolder) {
            return note.folderId === selectedFolder.id; // true false
          }
         return true;
        });

        return (
            <section className="note-list-main-container">
                <ul className="note-list">
                    {notesToDisplay.map(note =>
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
