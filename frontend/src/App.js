
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import {SignRouter} from './router/signRouter';
import {Bar} from './bar';


function App() {

    return (
    <div>
        <Bar />
   	    <SignRouter />
    </div>
    );
}

export default App;