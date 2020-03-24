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
              <Route path="/notes/:noteId" 
              component={NotePageNav}
              // render={(routeProps) => {
              //   const noteId = routeProps.match.params.noteId
              //   const selectedNote = this.state.notes.find(note => note.id === noteId)
              //   const selectedFolder = this.state.folders.find(folder => folder.id === selectedNote.folderId);

              //   return <NotePageNav folderName={selectedFolder.name} {...routeProps} />
              // }}
              />
              <Route path="/folders/:folderId" 
              component={NoteListNav}
              // render={(routeProps) => {
              //   const folderId = routeProps.match.params.folderId;
              //   const selectedFolder = this.state.folders.find(folder => folder.id === folderId);

              //   return <NoteListNav folders={this.state.folders} selectedFolder={selectedFolder.name} {...routeProps} />
              // }}
              />
              <Route exact path="/" 
              component={NoteListNav}
              // render={() =>
              //   <NoteListNav folders={this.state.folders} />
              // } 
              />
            </nav>
            <main>
              <Route path="/notes/:noteId" 
              component={NotePageMain}
              // render={(routeProps) => {
              //   const noteId = routeProps.match.params.noteId
              //   const selectedNote = this.state.notes.find(note => note.id === noteId)

              //   return <NotePageMain selectedNote={selectedNote} {...routeProps} />
              // }}
              />
              <Route path="/folders/:folderId" 
              component={NoteListMain}
              // render={(routeProps) => {
              //   const folderId = routeProps.match.params.folderId
              //   const selectedFolder = this.state.folders.find(folder => folder.id === folderId)
              //   const notesInFolder = this.state.notes.filter(note => {
              //     return note.folderId === selectedFolder.id;
              //   });

              //   return <NoteListMain notes={notesInFolder} {...routeProps} />
              // }}
              />
              <Route exact path="/" 
              component={NoteListMain}
              // render={() =>
              //   <NoteListMain notes={this.state.notes} />
              // }
               />
            </main>
          </div>
        </Context.Provider>
      </div>
    )
  }
}

export default App;