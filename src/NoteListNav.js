import React, { Component } from 'react';

class NoteListNav extends Component {
    render() {
        console.log(this.props.folders)
        return (
            <div className="note-list-nav-container">
                <ul className="folder-list">
                    {this.props.folders.map(folder =>
                        <li className="folder-item">
                            {/* use nav link */}
                            <a href='#' className="folder">
                                {folder.name}
                        </a>
                        </li>
                    )}
                </ul>
                <button type="button" className="add-folder">Add Folder</button>
            </div>
        )
    }
}

export default NoteListNav;