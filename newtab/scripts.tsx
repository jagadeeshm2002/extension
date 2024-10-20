import React from 'react'
import ReactDOM from 'react-dom/client'
import NewtabApp from './NewTabApp'
import './styles.css'
import Main from '../popup/Main';

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
)
