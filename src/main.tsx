import ReactDOM from 'react-dom/client'
import App from './App'
import PagesContext from './contexts/PagesContext'
import EditContext from './contexts/EditContext'
import PopupContext from './contexts/PopupContext'
import EditPopupContext from './contexts/EditPopupContext'
import DeletePopupContext from './contexts/DeletePopupContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <EditContext>
    <EditPopupContext>
      <DeletePopupContext>
        <PopupContext>
          <PagesContext>
            <App />
          </PagesContext>
        </PopupContext>
      </DeletePopupContext>
    </EditPopupContext>
  </EditContext>
)
