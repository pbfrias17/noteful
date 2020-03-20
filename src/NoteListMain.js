import React, { Component } from 'react';
import Note from './Note';

class NoteListMain extends Component {
    render() {
        // console.log(this.props)
        return (
            <section className="note-list-main-container">
                <ul className="note-list">
                    <Note
                        notes={this.props.notes} />
                </ul>
                <button type="button" className="add-note">Add Note</button>
            </section>
        )
    }
}

export default NoteListMain;