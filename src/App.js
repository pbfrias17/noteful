import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import DummyStore from './dummy-store';
import Header from './Header';
import NoteListNav from './NoteListNav';
import NoteListMain from './NoteListMain';
import NotePageNav from './NotePageNav';
import NotePageMain from './NotePageMain';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: DummyStore.folders,
      notes: DummyStore.notes,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <nav>
            <Route exact path="/" render={() =>
              <NoteListNav folders={this.state.folders} />
            } />
            <Route path="/folders/:folderId" render={(routeProps) => {
              const folderId = routeProps.match.params.folderId
              const selectedFolder = this.state.folders.find(folder => folder.id === folderId)

              return <NotePageNav folderName={selectedFolder.name} {...routeProps} />
            }}
            />
          </nav>
          <main>
            <Route exact path="/" render={() =>
              <NoteListMain notes={this.state.notes} />
            } />
            <Route path="/notes/:noteId" render={(routeProps) => {
              const noteId = routeProps.match.params.noteId
              const selectedNote = this.state.notes.find(note => note.id === noteId)
              
              return <NotePageMain selectedNote={selectedNote} {...routeProps} />
            }}
            />
          </main>
        </div>
      </div>
    )
  }
}

export default App;