import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from 'react-router-dom';

const RichTextEditor = () => {
    const [blogInfo,setBlogInfo] = useState({title:""});
    const navigate = useNavigate()
    const onChange = (e) =>setBlogInfo({...blogInfo,[e.target.name]:e.target.value})

    // Editor state change 
    const editorState = EditorState.createEmpty();
    const [description, setDescription]= useState(editorState);
    const onEditorStateChange = editorState => setDescription(editorState);

    // save data to server 
    const [isError,setIsError] = useState(null);
    const addDetails = async(e) =>{
        e.preventDefault();
        e.persist();
        if (blogInfo.description.value.length < 50) {
            setIsError("Required minimum 50 words description");
            return;
        }
        fetch("https://sheltered-temple-15299.herokuapp.com/addBlog",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({title:blogInfo.title, description:blogInfo.description.value})
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("Blog posted successfully!")
            }
        })
    }


    return (
        <div style={{margin:"2% 10%"}}>
            <h2>Write Your Blog Here</h2>
            <form onSubmit={addDetails}>
                <p>Blog Title:</p>
                <input value={blogInfo.title} onChange={onChange} style={{backgroundColor:"rgba(0,0,225,0.2)", width:"100%"}} type="text" name='title'/>

                <p>Blog Description</p>
                <Editor
                    editorStyle={{border:"1px solid white", padding:"10px", margin:"10px", backgroundColor:"rgba(10,40,40,0.1)"}}
                    editorState={description}
                    onEditorStateChange={onEditorStateChange}
                />
                <textarea  style={{display:'none'}} disabled ref={(val) => blogInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) }></textarea>
                {
                    isError && <p style={{color:"red"}}>{isError}</p>
                }
                    <button style={{backgroundColor:"rgba(0,0,225,0.2)", padding:"3px 8px", borderRadius:"7px", display:"block", margin:"auto"}} type="submit">Post blog</button>
            </form>
        </div>
    );
};

export default RichTextEditor;