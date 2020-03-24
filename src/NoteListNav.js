import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Context from './Context';

class NoteListNav extends Component {
    static contextType = Context;
    render() {
        const { folders } = this.context
        const folderId = this.props.match.params.folderId;
        const selectedFolder = folders.find(folder => folder.id === folderId);
        return (
            <div className="note-list-nav-container">
                <ul className="folder-list">
                    {folders.map(folder =>
                        <li className={`folder-item ${selectedFolder === folder.name ? 'active-folder' : ''}`} key={folder.id}>
                            <NavLink to={`/folders/${folder.id}`}>
                                <span>{folder.name}</span>
                            </NavLink>
                        </li>
                    )}
                </ul>
                <button type="button" className="add-folder">Add Folder</button>
            </div>
        )
    }
}

export default NoteListNav;