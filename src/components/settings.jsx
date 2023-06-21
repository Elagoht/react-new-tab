const Settings = ({ settings, setPages, pages, setEditMode, editMode }) => {

  const handleAddSite = (e) => {
    const new_pages = [
      ...pages,
      {
        name: e.target.elements["site-name"].value,
        link: e.target.elements["site-link"].value,
      }
    ]
    setPages(new_pages)
    localStorage["pages"] = JSON.stringify(new_pages)
    e.preventDefault()
  }

  return settings && <div className="fixed top-[4.25rem] right-3 bottom-3 w-80 glass z-10 flex flex-col" >
    <fieldset className="text-white">
      <legend>Add New Site</legend>
      <form className="w-full" onSubmit={handleAddSite}>

        <label htmlFor="site-name">Name</label>
        <input
          required
          id="site-name"
          name="site-name"
          className="w-full glass p-1"
        />

        <label htmlFor="site-link">URL</label>
        <input
          required
          id="site-link"
          name="site-link"
          className="w-full glass p-1"
        />

        <input
          type="submit"
          value="Add New"
          className="glass py-2 ml-auto mt-2"
        />

      </form>
    </fieldset>
    <fieldset>
      <legend>Edit Mode</legend>
      <button
        className={"glass w-full " + (editMode ? "bg-red-500" : "bg-green-500")}
        onClick={() => setEditMode(prev => !prev)}
      >
        {editMode ? "Disable" : "Enable"}
      </button>
    </fieldset>
  </div>
}

export default Settings