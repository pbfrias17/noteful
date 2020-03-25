import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import DummyStore from './dummy-store';
import Header from './Header';
import NoteListNav from './NoteListNav';
import NoteListMain from './NoteListMain';
import NotePageNav from './NotePageNav';
import NotePageMain from './NotePageMain';
import Context from './Context';
import config from './config';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // change to empty arrays
      folders: DummyStore.folders,
      notes: DummyStore.notes,
    }
  }

  // handleDeleteNote = (noteId) => {
  //   this.setState({
  //     notes: this.state.notes.filter(note => note.id !== noteId)
  //   })
  // }

     componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
            });
    }

render() {
  const contextValue = {
    folders: this.state.folders,
    notes: this.state.notes,
    deleteNote: this.handleDeleteNote,
  }
  return (
    <div>
      <Header />
      <Context.Provider value={contextValue}>
        <div className="container">
          <nav>
            <Route exact path="/"
              component={NoteListNav}
            />

            <Route path="/folders/:folderId"
              component={NoteListNav}
            />

            <Route path="/notes/:noteId"
              component={NotePageNav}
            />
          </nav>
          <main>
            <Route exact path="/"
              component={NoteListMain}
            />
            <Route path="/folders/:folderId"
              component={NoteListMain}
            />
            <Route path="/notes/:noteId"
              component={NotePageMain}
            />
          </main>
        </div>
      </Context.Provider>
    </div>
  )
}
}

export default App;