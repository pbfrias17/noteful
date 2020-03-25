import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Context from './Context';
import config from './config';

class Note extends Component {
    static contextType = Context

    handleDeleteNote = e => {
        e.preventDefault()
        const noteId = this.props.id

        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                this.context.deleteNote(noteId)
                // allow parent to perform extra behaviour
                this.props.onDeleteNote(noteId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div className="note-container">
                <h3>
                    <Link to={`/notes/${this.props.id}`} className="note-name">{this.props.name}</Link>
                </h3>
                <p className="modified">{this.props.modified}</p>
                <button type="button" className="delete-note" onClick={this.handleDeleteNote}>Delete Note</button>
            </div>
        )
    }
}

export default Note;