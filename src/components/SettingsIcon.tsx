import { FC } from 'react'
import { useSettings } from '../assets/utils/contexts'
import { Settings } from 'lucide-react'

const SettingsIcon: FC = () => {

  const { settingsPopup, setSettingsPopup } = useSettings()

  return <div
    className={"glass p-2 aspect-square items-center justify-center cursor-pointer select-none" + (settingsPopup ? " bg-neutral-200 bg-opacity-40 border-neutral-200" : "")}
    onClick={() => setSettingsPopup(prev => !prev)}
  >
    <Settings stroke="white" />
  </div>
}

export default SettingsIcon