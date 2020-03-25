import React, { Component } from 'react';
import Note from './Note';
import Context from './Context';

class NotePageMain extends Component {
    static contextType = Context
    render() {
        const noteId = this.props.match.params.noteId
        const { notes } = this.context
        const selectedNote = notes.find(note => note.id === noteId)
        return (
            <section className="note-page-main-container">
                <Note {...selectedNote} />
                <div>
                    <p className="note-content">{selectedNote.content}</p>
                </div>
            </section>
        )
    }
}

export default NotePageMain;