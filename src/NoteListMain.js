import React, { Component } from 'react';
import Note from './Note';
import Context from './Context';

class NoteListMain extends Component {
    static contextType = Context
    render() {
        const folderId = this.props.match.params.folderId
        const { folders, notes } = this.context;
        const selectedFolder = folders.find(folder => folder.id === folderId)
<<<<<<< Updated upstream
        // selectedFolder is UNDEFINED when folder id doesnt exist --> ie: not in the URL
        // selectedFolder exists when folder id exist --> ie: exist in the url  (http://localhost:3000/folders/b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1)
        const notesToDisplay  = notes.filter(note => {
          // only FILTER when selectedFolder exists
          if(selectedFolder) {
            return note.folderId === selectedFolder.id; // true false
          }
          // otherwise return it ALL
         return true;
=======
        // console.log(selectedFolder);
        const notesToDisplay = notes.filter(note => {
            if (selectedFolder) {
            return note.folderId === selectedFolder.id
            }
            return true;
>>>>>>> Stashed changes
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
