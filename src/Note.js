import React, { Component } from 'react';

class NotePageMain extends Component {
    render() {
        return (
            <div className="note-container">
                <h3>
                    <a href="#" className="note-name">{this.props.name}</a>
                </h3>
                <p className="modified">{this.props.modified}</p>
                <button type="button" className="delete-note">Delete Note</button>
            </div>
        )
    }
}

export default NotePageMain;