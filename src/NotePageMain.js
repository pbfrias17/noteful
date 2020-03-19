import React, { Component } from 'react';
import Note from './Note';

class NotePageMain extends Component {
    render() {
        return (
                <section className="note-page-main-container">
                    <Note />
                    <div>
                        <p className="note-content">Content Here</p>
                    </div>
                </section>
        )
    }
}

export default NotePageMain;