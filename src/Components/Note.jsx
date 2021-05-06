import React from "react";

function Note(props) {
  var url="https://static.thenounproject.com/png/639629-200.png";
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="wider" onClick={()=>{
          props.removeItem(props.id);
      }}><img className="bin-img" src={url}></img></button>
    </div>
  );
}

export default Note;
