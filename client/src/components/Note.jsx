import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <img src={"https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_delete_48px-32.png"} className="delete-logo" alt="logo" />
      </button>
    </div>
  );
}

export default Note;
