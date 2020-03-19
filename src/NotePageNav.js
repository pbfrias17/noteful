import React, { Component } from 'react';

class NotePageNav extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="note-page-nav-container">
                <button type="button" className="go-back">Go Back</button>
                <h3>folder name</h3>
            </div>
        )
    }
}

export default NotePageNav;