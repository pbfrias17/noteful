import React, { Component } from 'react';

class Note extends Component {
    render() {
      return (
        <div className="note-container">
            <h3>
                <a href="#" className="note-name"></a>
            </h3>
            <p className="modified"></p>
            <button type="button" className="delete-note">Delete Note</button>
        </div>
      )
    }
}

export default Note;