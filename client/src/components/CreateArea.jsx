import React, { useState } from "react";

function CreateArea(prop) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelInput(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleAdd(event) {
    event.preventDefault();
    prop.onAdd(note);
    setNote({title:"",
          content:""});
  }

  return (
    <div>
      <form >
        <input
          onChange={handelInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          value={note.content}
          onChange={handelInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
