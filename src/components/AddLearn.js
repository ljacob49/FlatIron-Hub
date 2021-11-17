import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';


function AddLearn({onAddLearn}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState ("")
    const [image, setImage] = useState("")
    const [URL, setURL] = useState("")

    function handleSubmit (e) {
        e.preventDefault();
        fetch ("http://localhost:8000/learnitems", {
            method: "POST",
            headers: {
          "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name, 
                description: description,
                image: image,
                URL: URL 
            }),
        })
            .then((res) => res.json())
            .then((newLearnItem) => onAddLearn(newLearnItem));
        }        
        return (
            <div className="ui segment">
                <h3> Upload Your Resources Here!</h3>
              <form onSubmit = {handleSubmit} className="ui form">
                <div className="inline fields">
                  <input 
                  type="text" 
                  name="" 
                  value ={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Enter Name"
                  />
                  <input 
                  type="text" 
                  name="" 
                  placeholder="" 
                  value ={description}
                  onChange={(e)=> setDescription(e.target.value)}
                  placeholder= "Enter Description"
                  />
                  <input 
                  type="text" 
                  name="" 
                  placeholder="" 
                  value = {image}
                  onChange ={(e) => setImage(e.target.value)}
                  placeholder = "Enter Image Link"
                  />
                  <input 
                  type="text" 
                  name="" 
                  placeholder="" 
                  value = {URL}
                  onChange ={(e) => setURL(e.target.value)}
                  placeholder= "URL Link here"
                  />
                </div>
                
                <Button className="ui button" variant = "contained" type="submit">
                  Add Your Resource
                </Button>
              </form>
            </div>
          );   
}

export default AddLearn; 