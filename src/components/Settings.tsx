import { FC } from 'react'

const Settings: FC = () => {

  const handleSettings = () => {

    // Get Form Data
    const data = new FormData(document.forms.namedItem("settingsForm") as HTMLFormElement)
    console.log(data)

    // Get Form Elements
    const displayColor = document.querySelector("#display-color") as HTMLInputElement
    const customImageURL = document.querySelector("#custom-image-url") as HTMLInputElement
    const customText = document.querySelector("#custom-text") as HTMLInputElement
    const randomImagesLabel = document.querySelector("#random-images-label") as HTMLLabelElement
    const flatColorLabel = document.querySelector("#flat-color-label") as HTMLLabelElement
    const customImageLabel = document.querySelector("#custom-image-label") as HTMLLabelElement

    // Disable all
    displayColor.disabled = true
    customImageURL.disabled = true
    customText.disabled = true
    randomImagesLabel.classList.remove("selected")
    flatColorLabel.classList.remove("selected")
    customImageLabel.classList.remove("selected")

    // Enable background setting if available
    // Colorize selected background type
    switch (data.get("background-type")) {
      case "random-images":
        randomImagesLabel.classList.add("selected")
        break
      case "flat-color":
        displayColor.disabled = false
        flatColorLabel.classList.add("selected")
        break
      case "custom-image":
        customImageURL.disabled = false
        customImageLabel.classList.add("selected")
        break
    }


    // Enable custom text if activated
    if (data.get("use-custom-text")) {
      customText.disabled = false
    }

  }

  return <div className="flex fixed top-0 left-0 bottom-0 z-10 w-full">
    <div className="glass m-4 flex flex-col text-neutral-200 max-sm:w-full select-none">
      <div className="text-center border-b border-neutral-600 pb-2 text-2xl mb-2 font-bold">Settings</div>
      <form onChange={handleSettings} id="settingsForm" className="flex flex-col gap-2">

        <fieldset className="flex flex-col gap-4">
          <h2 className="font-bold -mb-2">Background Settings</h2>

          <fieldset className="flex flex-col">
            <label htmlFor="mouse-interact" className="glass flex flex-col gap-1">
              <h2 className="mb-2 font-bold">Mouse interaction</h2>
              <div className="flex gap-1">
                <input type="checkbox" name="mouse-interact" id="mouse-interact" /> Move background
              </div>
            </label>
          </fieldset>

          <fieldset className="flex flex-col glass">
            <h2 className="mb-2 font-bold">Type</h2>

            <label id="random-images-label" htmlFor="random-images" className="glass rounded-b-none flex gap-1">
              <input type="radio" className="hidden" name="background-type" value="random-images" id="random-images" />
              Random images
            </label>

            <label id="flat-color-label" htmlFor="flat-color" className="glass items-center flex gap-1 rounded-none border-y-0">
              <input type="radio" className="hidden" name="background-type" value="flat-color" id="flat-color" />
              <div className="flex-shrink-0 mr-2">Flat color</div>
              <input type="color" name="display-color" id="display-color" className="w-full rounded-none disabled:opacity-40" />
            </label>

            <label id="custom-image-label" htmlFor="custom-image" className="flex gap-1">
              <div className="glass rounded-t-none flex flex-col gap-1 w-full">
                <input type="radio" className="hidden" name="background-type" value="custom-image" id="custom-image" />
                Custom Image
                <input type="url" name="custom-image-url" id="custom-image-url" placeholder="Custom Image URL" className="glass p-1 disabled:opacity-40" />
              </div>
            </label>
          </fieldset>
        </fieldset>

        <fieldset className="flex flex-col text-neutral-200">
          <h2 className="mb-2 font-bold">Text Settings</h2>

          <label htmlFor="use-custom-text" className="flex flex-col gap-1 glass">
            <div className="flex gap-1">
              <input type="checkbox" name="use-custom-text" id="use-custom-text" />
              Use Custom Text
            </div>
            <input type="text" name="custom-text" id="custom-text" placeholder="Your Text" className="glass p-1 disabled:opacity-40" />
          </label>

        </fieldset>
      </form>
    </div>
  </div >
}

export default Settings