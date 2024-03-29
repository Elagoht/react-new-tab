import { FC, useState } from 'react'
import { useSettings } from '../utils/contexts'
import classNames from 'classnames'
import { ISettings } from '../types'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion"

const Settings: FC = () => {

  const { settings, updateSettings, settingsPopup, setSettingsPopup } = useSettings()

  const [mouseInteraction, setMouseInteraction] = useState<boolean>(settings.background.mouseInteraction)
  const [bgType, setBgType] = useState<0 | 1 | 2>(settings.background.type)
  const [color, setColor] = useState<string>(settings.background.color)
  const [url, setUrl] = useState<string>(settings.background.url)
  const [custom, setCustom] = useState<boolean>(settings.text.custom)
  const [customText, setCustomText] = useState<string>(settings.text.customText)
  const [blur, setBlur] = useState<0 | 1 | 2 | 3>(settings.blur)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const newSettings: ISettings = {
      background: {
        mouseInteraction,
        type: bgType,
        color,
        url
      },
      text: {
        custom,
        customText
      },
      blur
    }
    updateSettings(newSettings)
    event.preventDefault()
    setSettingsPopup(false)
  }

  return <AnimatePresence mode="wait">
    {settingsPopup && <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          x: -1000,
          transition: {
            ease: "easeIn"
          }
        },
        visible: {
          x: 0,
          transition: {
            ease: "easeOut"
          }
        }
      }}
      className="flex fixed top-0 left-0 bottom-0 z-10 max-sm:w-full">
      <div className="glass m-3 flex flex-col text-neutral-200 max-sm:w-full max-sm:max-w-full select-none overflow-y
      -scroll overflow-x-hidden">
        <div className="text-2xl mb-3 font-bold flex items-center justify-between">
          Ayarlar
          <div className="w-12 h-12 -m-3 -mr-2 flex items-center justify-center cursor-pointer rounded-full hover:bg-red-700 hover:bg-opacity-30 transition-colors" onClick={() => setSettingsPopup(false)}>
            <X className="text-red-500" />
          </div>
        </div>
        <hr className="border-0 border-b -mx-3 mb-3 border-neutral-600" />
        <form
          onSubmit={(event) => handleSubmit(event)}
          id="settingsForm"
          className="flex flex-col gap-2"
        >

          <fieldset className="flex flex-col gap-3">
            <h2 className="font-bold -mb-2">Arkaplan Ayarları</h2>

            <fieldset className="flex flex-col">
              <label htmlFor="mouse-interact" className="glass flex flex-col gap-1">
                <h2 className="mb-2 font-bold">Fare Etkileşimi</h2>
                <div className="flex gap-1">
                  <input checked={mouseInteraction} type="checkbox"
                    onChange={() => setMouseInteraction(prev => !prev)} name="mouse-interact" id="mouse-interact" />
                  Arkaplanı hareket ettir
                </div>
              </label>
            </fieldset>

            <fieldset className="flex flex-col glass">
              <h2 className="mb-2 font-bold">Arkaplan Türü</h2>

              <label htmlFor="random-images" className={
                classNames({
                  "glass hover:bg-opacity-20 hover:bg-neutral-500 rounded-b-none flex gap-1": true,
                  "selected": bgType === 0
                })
              }>
                <input
                  checked={bgType === 0}
                  onChange={() => setBgType(0)}
                  type="radio" className="opacity-0 h-0 w-0 -m-1" name="background-type" value="0" id="random-images" />
                Rastgele fotoğraflar
              </label>

              <label htmlFor="flat-color" className={
                classNames({
                  "glass hover:bg-opacity-20 hover:bg-neutral-500 items-center flex gap-1 rounded-none border-y-0": true,
                  "selected": bgType === 1
                })}>
                <input
                  checked={bgType === 1}
                  onChange={() => setBgType(1)}
                  type="radio" className="opacity-0 h-0 w-0 -m-1" name="background-type" value="1" id="flat-color" />
                <div className="flex-shrink-0 mr-2">Düz renk</div>
                <input
                  disabled={bgType !== 1}
                  value={color}
                  onChange={(event) => setColor(event.currentTarget.value)}
                  type="color" name="display-color" id="display-color" className="w-full rounded-none disabled:opacity-40" />
              </label>

              <label htmlFor="custom-image"
                className={classNames({
                  "flex gap-1 glass rounded-t-none": true,
                  "selected": bgType === 2
                })}>
                <div className="flex flex-col gap-1 w-full">
                  <input
                    checked={bgType === 2}
                    onChange={() => setBgType(2)}
                    type="radio" className="opacity-0 h-0 w-0 -m-1" name="background-type" value="2" id="custom-image" />
                  Özelleştirilmiş arkaplan
                  <input
                    value={url}
                    onChange={(event) => setUrl(event.currentTarget.value)}
                    disabled={bgType !== 2}
                    type="url" name="custom-image-url" id="custom-image-url" placeholder="Özel Resim URL'si" className="glass hover:bg-opacity-20 hover:bg-neutral-500 p-1 disabled:opacity-40" />
                </div>
              </label>
            </fieldset>
          </fieldset>

          <hr className="border-0 border-b -mx-3 my-2 border-neutral-600" />

          <fieldset className="flex flex-col text-neutral-200">
            <h2 className="mb-2 font-bold">Metin Ayarları</h2>

            <label htmlFor="use-custom-text" className="flex flex-col gap-1 glass">
              <div className="flex gap-1">
                <input type="checkbox" name="use-custom-text" id="use-custom-text"
                  checked={custom}
                  onChange={() => setCustom(prev => !prev)}
                />
                Özelleştirilmiş metin kullan
              </div>
              <input
                value={customText}
                onChange={(event) => {
                  setCustomText(event.currentTarget.value)
                }}
                type="text" name="custom-text" id="custom-text" placeholder="Kendi Metniniz"
                disabled={!custom}
                className="glass p-1 disabled:opacity-40" />
            </label>
          </fieldset>

          <hr className="border-0 border-b -mx-3 my-2 border-neutral-600" />

          <fieldset className="flex flex-col text-neutral-200">
            <h2 className="mb-2 font-bold">Görünüm</h2>

            <label htmlFor="blur-level" className="flex gap-3 glass">
              Bulanıklık
              <div className="flex gap-1 border-l pl-3 border-neutral-500 w-full">
                <select
                  value={blur}
                  onChange={(event) => setBlur((parseInt(event.currentTarget.value)) as 0 | 1 | 2 | 3)}
                  name="blur-level" id="blur-level" className="w-full">
                  <option value="0">Kapalı</option>
                  <option value="1">Düşük</option>
                  <option value="2">Orta</option>
                  <option value="3">Yüksek</option>
                </select>
              </div>
            </label>
          </fieldset>

          <input type="submit" value="Save" className="glass text-center bg-sky-500 bg-opacity-20 hover:bg-opacity-40" />
        </form>
      </div>
    </motion.div >}
  </AnimatePresence>
}

export default Settings