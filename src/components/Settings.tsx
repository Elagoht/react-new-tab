import { FC, useState } from 'react'
import { useSettings } from '../assets/utils/contexts'
import classNames from 'classnames'
import { ISettings } from '../types'

const Settings: FC = () => {

  const { settings, updateSettings } = useSettings()

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
  }

  return <div className="flex fixed top-0 left-0 bottom-0 z-10 max-sm:w-full">
    <div className="glass m-4 flex flex-col text-neutral-200 max-sm:w-full select-none overflow-scroll">
      <div className="text-center text-2xl mb-3 font-bold">Settings</div>
      <hr className="border-0 border-b -mx-3 mb-3 border-neutral-600" />
      <form
        onSubmit={(event) => handleSubmit(event)}
        id="settingsForm"
        className="flex flex-col gap-2"
      >

        <fieldset className="flex flex-col gap-3">
          <h2 className="font-bold -mb-2">Background Settings</h2>

          <fieldset className="flex flex-col">
            <label htmlFor="mouse-interact" className="glass flex flex-col gap-1">
              <h2 className="mb-2 font-bold">Mouse interaction</h2>
              <div className="flex gap-1">
                <input checked={mouseInteraction} type="checkbox"
                  onChange={() => setMouseInteraction(prev => !prev)} name="mouse-interact" id="mouse-interact" />
                Move background
              </div>
            </label>
          </fieldset>

          <fieldset className="flex flex-col glass">
            <h2 className="mb-2 font-bold">Type</h2>

            <label htmlFor="random-images" className={
              classNames({
                "glass rounded-b-none flex gap-1": true,
                "selected": bgType === 0
              })
            }>
              <input
                checked={bgType === 0}
                onChange={() => setBgType(0)}
                type="radio" className="opacity-0 h-0 w-0 -m-1" name="background-type" value="0" id="random-images" />
              Random images
            </label>

            <label htmlFor="flat-color" className={
              classNames({
                "glass items-center flex gap-1 rounded-none border-y-0": true,
                "selected": bgType === 1
              })}>
              <input
                checked={bgType === 1}
                onChange={() => setBgType(1)}
                type="radio" className="opacity-0 h-0 w-0 -m-1" name="background-type" value="1" id="flat-color" />
              <div className="flex-shrink-0 mr-2">Flat color</div>
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
                Custom Image
                <input
                  value={url}
                  onChange={(event) => setUrl(event.currentTarget.value)}
                  disabled={bgType !== 2}
                  type="url" name="custom-image-url" id="custom-image-url" placeholder="Custom Image URL" className="glass p-1 disabled:opacity-40" />
              </div>
            </label>
          </fieldset>
        </fieldset>

        <hr className="border-0 border-b -mx-3 my-2 border-neutral-600" />

        <fieldset className="flex flex-col text-neutral-200">
          <h2 className="mb-2 font-bold">Text Settings</h2>

          <label htmlFor="use-custom-text" className="flex flex-col gap-1 glass">
            <div className="flex gap-1">
              <input type="checkbox" name="use-custom-text" id="use-custom-text"
                checked={custom}
                onChange={() => setCustom(prev => !prev)}
              />
              Use Custom Text
            </div>
            <input
              value={customText}
              onChange={(event) => {
                setCustomText(event.currentTarget.value)
              }}
              type="text" name="custom-text" id="custom-text" placeholder="Your Text"
              disabled={!custom}
              className="glass p-1 disabled:opacity-40" />
          </label>
        </fieldset>

        <hr className="border-0 border-b -mx-3 my-2 border-neutral-600" />

        <fieldset className="flex flex-col text-neutral-200">
          <h2 className="mb-2 font-bold">Appearance</h2>

          <label htmlFor="blur-level" className="flex gap-3 glass">
            Blur
            <div className="flex gap-1 border-l pl-3 border-neutral-500 w-full">
              <select
                value={blur}
                onChange={(event) => setBlur((parseInt(event.currentTarget.value)) as 0 | 1 | 2 | 3)}
                name="blur-level" id="blur-level" className="w-full">
                <option value="0">none</option>
                <option value="1">low</option>
                <option value="2">medium</option>
                <option value="3">high</option>
              </select>
            </div>
          </label>
        </fieldset>

        <input type="submit" value="Save" className="glass bg-sky-500 bg-opacity-20 hover:bg-opacity-40" />
      </form>
    </div>
  </div >
}

export default Settings