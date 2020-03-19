import React, { Component } from 'react';
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
    console.log(DummyStore)
    return (
      <div>
        <Header />
        <div className="container">
          <nav>
            <NoteListNav folders={this.state.folders}/>
            {/* <NotePageNav folders={this.state.folders}/> */}
          </nav>
          <main>
            <NoteListMain notes={this.state.notes}/>
            {/* <NotePageMain notes={this.state.notes}/> */}
          </main>
        </div>
      </div>
    )
  }
}

export default App;
