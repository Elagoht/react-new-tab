import ReactDOM from 'react-dom/client'
import App from './App'
import PagesContext from './contexts/PagesContext'
import EditContext from './contexts/EditContext'
import AddPopupContext from './contexts/AddPopupContext'
import EditPopupContext from './contexts/EditPopupContext'
import DeletePopupContext from './contexts/DeletePopupContext'
import SettingsContext from './contexts/SettingsContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <SettingsContext>
    <EditContext>
      <EditPopupContext>
        <DeletePopupContext>
          <AddPopupContext>
            <PagesContext>
              <App />
            </PagesContext>
          </AddPopupContext>
        </DeletePopupContext>
      </EditPopupContext>
    </EditContext>
  </SettingsContext>
)
