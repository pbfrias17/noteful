import React, { Component } from 'react';
import Note from './Note';

class NotePageMain extends Component {
    render() {
        return (
                <section className="note-page-main-container">
                    <Note selectedNote={this.props.selectedNote}/>
                    <div>
                        <p className="note-content">{this.props.selectedNote.content}</p>
                    </div>
                </section>
        )
    }
}

export default NotePageMain;