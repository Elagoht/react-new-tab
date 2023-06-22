import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PagesContext from './contexts/PagesContext'
import EditContext from './contexts/EditContext'
import PopupContext from './contexts/PopupContext'
import { AnimatePresence } from 'framer-motion'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AnimatePresence mode="wait">
    <EditContext>
      <PopupContext>
        <PagesContext>
          <App />
        </PagesContext>
      </PopupContext>
    </EditContext>
  </AnimatePresence>
)
