import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const[items,addItem]=useState([]);

    function add(t,c)
    {
        if(t=="" && c=="")
        {
          return;
        }
        if(t==="")
        {
            t="No Title";
        }
        if(c==="")
        {
            c="No Content";
        }
        addItem((prev)=>{
            return [...prev,{
                title : t,
                content : c
            }];
        })
    }

    function remove(id)
    {
        addItem(items.filter((object,index)=>{
            return id!==index;
        }));
    }

  return (
    <div>
      <Header />
      <CreateArea addItem={add} />
      <div>
      {items.map((object,index)=>{
        return <Note key={index} id={index} removeItem={remove} title={object.title} content={object.content} />;
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
