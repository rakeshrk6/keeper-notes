import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.text.title}</h1>
      <p>{props.text.content}</p>
      <button
        onClick={() => {
          return props.onDelete(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
