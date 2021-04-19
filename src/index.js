// const element = document.createElement('h1')
// element.innerText = "Hello Platzi  Badges!"

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'
import ReactDom from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import './global.css'

import App from './components/App'

const container = document.getElementById('app');

ReactDom.render( <App />, container)