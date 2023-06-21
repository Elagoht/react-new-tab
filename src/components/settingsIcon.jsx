import icon from '../assets/misc/settings.svg'

const SettingsIcon = ({ setSettings }) => {
  return <div
    className="glass p-2 fixed top-3 right-3 aspect-square cursor-pointer select-none"
    onClick={() => setSettings(prev => !prev)}
  >
    <img src={icon} alt="settings" width="24" />
  </div>
}

export default SettingsIcon