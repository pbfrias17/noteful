
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
// import AddNote from './AddNote';

ReactDOM.render(
    <Router>
        {/* <AddNote /> */}
        <App />
    </Router>,
    document.getElementById('root'));