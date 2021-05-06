import React,{useState} from "react";

function CreateArea(props) {

    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    
    function handleChange1(event){
        setTitle(event.target.value);
    }
    function handleChange2(event){
        setContent(event.target.value);
    }
 
    function handleRefresh(event)
    {
        setTitle("");
        setContent("");
        event.preventDefault();
    }

  return (
    <div>
      <form onSubmit={handleRefresh}>
        <input onChange={handleChange1} name="title" placeholder="Title" value={title} />
        <textarea onChange={handleChange2} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={()=>{
            props.addItem(title,content);
        }}><h1>+</h1></button>
      </form>
    </div>
  );
}

export default CreateArea;
