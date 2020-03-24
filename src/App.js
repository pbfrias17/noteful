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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // change to empty arrays
      folders: DummyStore.folders,
      notes: DummyStore.notes,
    }
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      // deleteNote: this.deleteNote,
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