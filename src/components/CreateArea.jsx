import React, { useState } from "react";

function CreateArea(props) {
  const [eachNote, setNote] = useState({
    title: "",
    content: ""
  });

  function addTitle(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(eachNote);
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={addTitle}
          value={eachNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={addTitle}
          value={eachNote.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
