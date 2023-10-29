import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import Values from './Values.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddContact />
    <Header />
    <Values />
  </React.StrictMode>,
)
