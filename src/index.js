import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PagesContext from './contexts/PagesContext'
import EditContext from './contexts/EditContext'
import PopupContext from './contexts/PopupContext'
import EditPopupContext from './contexts/EditPopupContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <EditContext>
    <EditPopupContext>
      <PopupContext>
        <PagesContext>
          <App />
        </PagesContext>
      </PopupContext>
    </EditPopupContext>
  </EditContext>
)
