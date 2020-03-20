import React, { Component } from 'react';
import Note from './Note';

class NotePageMain extends Component {
    render() {
        console.log(this.props)
        return (
                <section className="note-page-main-container">
                    <Note />
                    <div>
                        <p className="note-content">{this.props.content}</p>
                    </div>
                </section>
        )
    }
}

export default NotePageMain;