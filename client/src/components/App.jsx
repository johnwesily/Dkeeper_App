import React, { useState ,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [item, addItem] = useState([]);


  useEffect(()=>{

    const getNotes=()=>{
    axios.get("http://localhost:4000/api/notes/")
         .then((Response)=>{
          addItem(Response.data)
         })
         .catch((error)=> {console.log(error)});

    }
   
    getNotes();

  },[])

  function addNote(newnote) {
     
     const postNote= ()=>{
      axios.post("http://localhost:4000/api/notes/",{
        title:newnote.title,
        content:newnote.content
      })
      .then((Response)=>{
        addItem((prev) => {
          return [...prev, Response.data];
        });
      })
      .catch((error)=>{
        console.log(error);
      })

     }
     postNote();
    
   
  }

  function deleteNote(id ,event) {

    const performdelete=()=>{
      axios.delete("http://localhost:4000/api/notes/"+id)
      .then((Response)=>{
        
        addItem((prev) => {
          return item.filter((item) => {
            return item._id!= id;
          });
        });
        alert("Note deleted ");
      })
      .catch((error)=>{
       console.log(error.error)
      });
    }

    performdelete();
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {item.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
